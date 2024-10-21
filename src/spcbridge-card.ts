/* eslint-disable  @typescript-eslint/no-explicit-any */
import { LitElement, html, css, CSSResult, TemplateResult, PropertyValues } from 'lit';
import { property, customElement, state, eventOptions } from 'lit/decorators.js';
import { CARD_VERSION, defaultCardConfig, Action, ArmMode} from './const';
import { MyHass, CardConfig } from './types';

import './spcbridge-card-editor';
import './components/spc-arm-panel';
import './components/spc-sensor-item';
import './components/spc-output-item';
import './components/spc-door-item';
import './components/spc-countdown';
import './components/spc-keypad';

const DOMAIN = 'spcbridge';

@customElement('spcbridge-card')
export class SpcCard extends LitElement {
  @property({ attribute: false })
  public hass?: MyHass;

  @state()
  private config?: CardConfig;

  @state()
  private spcEntities = {};

  @state()
  private spcEvent = '';

  @state()
  private countDownRemaining = 0;

  @state()
  private actionInProgress: any = {};

  @state()
  private armingInProgress: any = {};

  @state()
  private openZones: any = {};

  @state()
  private hideEvents: boolean = false;

  @state()
  private hideAreasTab: boolean = false;

  @state()
  private hideZonesTab: boolean = false;

  @state()
  private hideOutputsTab: boolean = false;

  @state()
  private hideDoorsTab: boolean = false;

  countDownTimer: any = null;
  countDownStopTime: any = null;
  eventTimer: any = null;
  currentTab = 1;
  panelId = '';
  startX = 0;
  startY = 0;
  eventQueue: string[] = [];

  public static async getConfigElement() {
    return document.createElement('spcbridge-card-editor');
  }

  public static async getStubConfig(hass: MyHass): Promise<Partial<CardConfig>> {
    let defaultSpcSystem = "";
    Object.values(hass.devices).forEach((device: any) => {
       if (device.model == "SPC Bridge") {
          defaultSpcSystem = device.primary_config_entry;
       }
    });
    return {
      spc_system: defaultSpcSystem,
      header: "SPC Alarm System",
    };
  }

  public setConfig(config?: CardConfig & { button_scale?: any }): void {
    if (!config) throw new Error('Invalid configuration!');
    if (!config.spc_system) throw new Error('Please define a SPC Bridge device!');
    this.config = { ...defaultCardConfig, ...config };
  }

  public async getCardSize(): Promise<number> {
    return 6;
  }

  private formatEventMessage(event: string): any {
    if (event == '') return { type: '', text: '' };
    const _event = JSON.parse(event);
    const eventId = Number(_event.ev_id);
    const m: string[] = [];
    const keys = ['ev_desc', 'area_name', 'zone_name', 'mg_name', 'door_name'];
    let type = '';

    for (const key of keys) {
      if (_event[key]) {
        m.push(_event[key]);
      }
    }
    if (
      (eventId >= 1000 && eventId <= 1029) || // Alarm Intruder, Fire etc
      (eventId >= 1200 && eventId <= 1223) || // Tamper
      eventId == 3500 || // Confirmed Alarm
      eventId == 7001 || // Code Tamper
      eventId == 7010 ||
      eventId == 7012
    ) {
      type = 'alarm';
    }
    return { type: type, text: m.join(' - ') };
  }

  private startEventDisplay() {
    const maxDisplayTime = 2000;
    this.spcEvent = this.formatEventMessage(this.dequeueEvent()).text;
    this.eventTimer = window.setInterval(() => {
      const event = this.dequeueEvent();
      if (this.spcEvent == '' && event == '') {
        clearInterval(this.eventTimer);
        this.eventTimer = null;
      } else {
        this.spcEvent = this.formatEventMessage(event).text;
      }
    }, maxDisplayTime);
  }

  private enqueueEvent(event: string) {
    const maxLen = 10;
    for (let i = 0; i < this.eventQueue.length - maxLen; i++) {
      this.eventQueue.pop();
    }
    if (this.eventQueue.indexOf(event) === -1) {
      this.eventQueue.push(event);
      if (this.eventTimer === null) this.startEventDisplay();
    }
  }

  private dequeueEvent(): string {
    const event = this.eventQueue.shift() as string;
    if (!event) return '';
    return event;
  }

  private forEachSpcEntity(spcType: string, callback) {
    if (!this.panelId) return;
    if (!this.spcEntities[this.panelId][spcType]) return;
    Object.values(this.spcEntities[this.panelId][spcType]).forEach((e: any) => {
      Object.values(e).forEach((_e: any) => {
        callback(_e);
      });
    });
    return;
  }

  private createSpcEntities() {
    const devices = this.hass!['devices'];
    const states = this.hass!['states'];
    const entities = this.hass!['entities'];
    const spcEntities = {};

    const spc_system = this.config!.spc_system;

    // Get Panel ID
    this.panelId = "";
    for (const d in devices) {
       const device = devices[d];
       if (device.primary_config_entry == spc_system && device.identifiers[0][0] == DOMAIN) {
            this.panelId = device.identifiers[0][1].split('-')[0]; 
	    if (this.panelId.length > 0) break;
       }
    }
    if (this.panelId.length == 0) return;

    for (const e in states) {
      const entity = states[e];
      if (entities[entity.entity_id] && entities[entity.entity_id].platform === DOMAIN) {
        if (entity.attributes && entity.attributes.unique_id) {
          const [panelId, type, id, capability] = entity.attributes.unique_id.split('-');
          const _id = Number(id);
          if (panelId == this.panelId) {
            if (!spcEntities[panelId]) spcEntities[panelId] = {};
            if (!spcEntities[panelId][type]) spcEntities[panelId][type] = {};
            if (!spcEntities[panelId][type][_id]) spcEntities[panelId][type][id] = {};
            if (!spcEntities[panelId][type][_id]) spcEntities[panelId][type][id][capability] = {};
            spcEntities[panelId][type][_id][capability] = entity.entity_id;
          }
        }
      }
    }
    this.spcEntities = spcEntities;
  }

  private entityIdToSpcObject(entityId) {
    // panelId, type, id, capability
    return this.hass!['states'][entityId].attributes.unique_id.split('-');
  }

  private spcObjectToEntityId(type, id, capability) {
    if (
      this.panelId &&
      this.spcEntities[this.panelId] &&
      this.spcEntities[this.panelId][type] &&
      this.spcEntities[this.panelId][type][Number(id)] &&
      this.spcEntities[this.panelId][type][Number(id)][capability]
    ) {
      return this.spcEntities[this.panelId][type][Number(id)][capability];
    }
    return null;
  }

  async firstUpdated() {
    this.createSpcEntities();
    if (this.config!.appearance.includes("hide_events")) this.hideEvents = true;
    if (this.config!.appearance.includes("hide_areas_tab")) this.hideAreasTab = true;
    if (this.config!.appearance.includes("hide_zones_tab")) this.hideZonesTab = true;
    if (this.config!.appearance.includes("hide_outputs_tab")) this.hideOutputsTab = true;
    if (this.config!.appearance.includes("hide_doors_tab")) this.hideDoorsTab = true;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('config')) return true;
    if (changedProps.has('actionInProgress')) return true;
    if (changedProps.has('armingInProgress')) return true;
    if (changedProps.has('countDownRemaining')) return true;
    if (changedProps.has('spcEvent')) return true;

    const oldHass = changedProps.get('hass') as MyHass | undefined;
    if (
      !oldHass ||
      oldHass.themes !== this.hass!.themes ||
      oldHass.language !== this.hass!.language ||
      oldHass.config.state !== this.hass!.config.state
    )
      return true;

    let changed = false;
    this.forEachSpcEntity('panel', e => {
      if (oldHass.states[e] !== this.hass!.states[e]) {
        changed = true;
        this.enqueueEvent(this.hass!.states[e].attributes.spc_event);
      }
    });
    this.forEachSpcEntity('area', e => {
      if (oldHass.states[e] !== this.hass!.states[e]) changed = true;
    });
    this.forEachSpcEntity('zone', e => {
      if (oldHass.states[e] !== this.hass!.states[e]) changed = true;
    });
    this.forEachSpcEntity('output', e => {
      if (oldHass.states[e] !== this.hass!.states[e]) changed = true;
    });
    this.forEachSpcEntity('door', e => {
      if (oldHass.states[e] !== this.hass!.states[e]) changed = true;
    });
    if (changed) return true;

    return false;
  }

  private handleActionEvent(e: CustomEvent): void {
    this.actionInProgress = e.detail;
  }

  private handleKeypadEvent(e: CustomEvent): void {
    if (e.detail.action.code != null && e.detail.action.code.length > 0) {
      this.handleAction(e.detail.action);
    }
    this.actionInProgress = {};
  }

  private handleCountdownEvent(e: CustomEvent): void {
    if (e.detail.action.code != null && e.detail.action.code.length > 0) {
      this.handleAction(e.detail.action);
    } else {
      this.stopCountDown();
    }
  }

  async startCountDown(delay: number) {
    clearInterval(this.countDownTimer);
    this.countDownStopTime = new Date(new Date().getTime() + delay * 1000);
    this.countDownRemaining = delay;

    this.countDownTimer = window.setInterval(() => {
      this.countDownRemaining = (this.countDownStopTime.getTime() - new Date().getTime()) / 1000;
      if (this.countDownRemaining < 0) this.stopCountDown();
    }, 1000);
  }

  stopCountDown() {
    clearInterval(this.countDownTimer);
    this.countDownTimer = null;
    this.countDownStopTime = null;
    this.countDownRemaining = 0;
    this.armingInProgress = {};
  }

  private handleOpenZoneEvent(event, action): void {
    if (event == Action.Cancel) {
      this.openZones = {};
    }
    if (event == Action.ForceArm) {
      if (action.action == Action.Arm) action.action = Action.ArmForced;
      if (action.action == Action.ArmA) action.action = Action.ArmAForced;
      if (action.action == Action.ArmB) action.action = Action.ArmBForced;
      this.openZones = {};
      this.handleAction(action);
    }
    return;
  }

  async requestOpenZones(action) {
    const zones: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [panelId, type, id, capability] = this.entityIdToSpcObject(action.entity);
    const service = (type == 'panel') ? 'get_panel_arm_status' : 'get_area_arm_status';
    try {
      // Check if any open zones are preventing arm action
      const res:any = await this.hass!.callWS({
         type: "call_service",
	 domain: DOMAIN,
	 service: service,
         service_data: {
            device_id: this.hass!.entities[action.entity].device_id,
	    arm_mode: action.action,
	 },
	 return_response: true
      });
      if (res && res.response && res.response.area && res.response.area) {
        const area = res.response.area;
        Object.keys(area).forEach(id => {
	  if (area[id] && area[id].length > 0) {
            area[id].forEach(reason => {
              const [type, id] = reason.split('_');
              if (type == 'zone') {
                const entityId = this.spcObjectToEntityId(type, id, 'state');
                if (entityId) zones.push(entityId);
              }
	    });
          }
	});
      }
    } catch (e) {
      console.log("Failed to get area arm status", e);
      return null;
    }
    return { action: action, zones: zones };
  }

  async handleAction(action) {
    if (action.action == Action.Arm || action.action == Action.ArmA || action.action == Action.ArmB) {
      try {
        this.openZones = await this.requestOpenZones(action);
        if (this.openZones.zones.length > 0) return;
      } catch (e) {
        console.log("Failed to get area arm status", e);
      }
    }

    try {
      await this.hass!.callService(DOMAIN, action.service, {
        device_id: this.hass!.entities[action.entity].device_id,
        code: action.code,
        command: action.action,
      });
      if (action.action == Action.Arm || action.action == Action.ArmForced) {
        this.armingInProgress = action;
      } else {
        this.stopCountDown();
      }
    } catch (e) {
      console.log(e);
    }
  }

  private tabIsActive(tab) {
    if (tab == this.currentTab) return true;
    return false;
  }

  private handleTabChangeEvent(e) {
    if (e.target.checked === true && e.target.id != undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [name, id] = e.target.id.split('-');
      let _id = Number(id);
      if (_id < 1 || _id > 5) _id = 1;
      this.currentTab = _id;
    }
  }

  @eventOptions({ passive: true })
  private handleTouchStart(event) {
    // Record the starting position of the touch
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  @eventOptions({ passive: true })
  private handleTouchMove(event) {
    const deltaX = event.touches[0].clientX - this.startX;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const deltaY = event.touches[0].clientY - this.startY;

    if (Math.abs(deltaX) > 150) {
      const id = event.touches[0].target.closest('.tab-content').id;
      if (id && id.startsWith('tab-content-')) {
        let tabId = Number(id.split('-')[2]);
        tabId = deltaX < 0 ? tabId + 1 : tabId - 1;
        if (tabId >= 1 && tabId <= 5) {
          this.currentTab = tabId;
          this.requestUpdate();
        }
      }
    }
  }

  private renderOpenZones(cardHeader): TemplateResult {
    if (!this.hass || !this.openZones || !this.openZones.zones || this.openZones.zones.length == 0) return html``;
    return html`
      <div class="card-header">
        ${cardHeader}
      </div>
      <div id="open-zones-banner">
        <div id="open-zones-header">Open Zones</div>
        <input
          type="button"
          class="command-button"
          value="Cancel arming"
          @click=${() => this.handleOpenZoneEvent(Action.Cancel, {})}
        />
        <input
          type="button"
          class="command-button"
          value="Force arming"
          @click=${() => this.handleOpenZoneEvent(Action.ForceArm, this.openZones.action)}
        />
      </div>
      <div>
        ${this.openZones.zones.map((entityId: any) => {
          return html`
            <spc-sensor-item .hass=${this.hass} .entityId=${entityId} .disableActions=${true} />
          `;
        })}
      </div>
    `;
  }

  protected render(): TemplateResult {
    if (!this.config || !this.hass || Object.keys(this.spcEntities).length == 0) {
      return html``;
    }

    if (this.openZones && this.openZones.zones && this.openZones.zones.length > 0) {
      return this.renderOpenZones(this.config.header);
    }

    if (Object.keys(this.actionInProgress).length != 0) {
      // Show keypad
      return html`
        <div class="card-header">
          ${this.config.header}
        </div>
        ${this.hideEvents
          ? html``
          : html`
            <div class="page-banner">
              ${this.spcEvent}
            </div>
            `
        }
        <div class="view">
          <div id="keypad-view" class="view">
            <spc-keypad .action=${this.actionInProgress} @keypad-event="${this.handleKeypadEvent}" />
          </div>
        </div>
      `;
    }

    if (Object.keys(this.armingInProgress).length != 0) {
      const entity = this.armingInProgress.entity;
      const armMode = this.hass!.states[entity].attributes.mode;
      const delay = this.hass.states[this.armingInProgress.entity].attributes.exittime;
      if (armMode != ArmMode.FULL_SET) {
        if (this.countDownTimer == null) {
          this.startCountDown(delay);
        }

        return html`
          <div class="card-header">
            ${this.config.header}
          </div>
          ${this.hideEvents
            ? html``
            : html`
              <div class="page-banner">
                ${this.spcEvent}
              </div>
              `
          }
          <div class="view">
            <spc-countdown
              id="counter"
              .remaining=${this.countDownRemaining}
              .delay=${delay}
              .action=${this.armingInProgress}
              @countdown-event="${this.handleCountdownEvent}"
            />
          </div>
        `;
      }
    }
    this.stopCountDown();

    const panelEntityId = this.spcEntities[this.panelId]['panel'][1].arm_mode;

    return html`
      <div class="card-header">
        ${this.config.header}
      </div>
      ${this.hideEvents
        ? html``
        : html`
          <div class="page-banner">
            ${this.spcEvent}
          </div>
          `
      }
      <div class="view">
        <div class="tabs" @change="${this.handleTabChangeEvent}">
          <input type="radio" class="tab-radio" name="tab-group" id="tab-1" .checked=${this.tabIsActive(1)} />

	${this.hideAreasTab && this.hideZonesTab && this.hideOutputsTab && this.hideDoorsTab
          ? html`
            <label for="tab-1" class="tab-label" hidden></label>
	    `
          : html`
            <label for="tab-1" class="tab-label">System</label>
	    `
          }
          <div
            id="tab-content-1"
            class="tab-content"
            @touchstart="${this.handleTouchStart}"
            @touchmove="${this.handleTouchMove}"
          >
            <spc-arm-panel
              .hass=${this.hass}
              .layout=${'single'}
              .panelType=${'panel'}
              .entityId=${panelEntityId}
              @action-event="${this.handleActionEvent}"
            />
          </div>


	${this.hideAreasTab
          ? ``
          : html`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-2" .checked=${this.tabIsActive(2)} />
            <label for="tab-2" class="tab-label">Areas</label>
            <div
              id="tab-content-2"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId]['area']).map((e: any) => {
                const entityId = e.arm_mode;
                return html`
                  <div>
                    <spc-arm-panel
                      .hass=${this.hass}
                      .layout=${'list'}
                      .panelType=${'area'}
                      .entityId=${entityId}
                      @action-event="${this.handleActionEvent}"
                    />
                  </div>
                `;
              })}
            </div>
	    `
          }

	${this.hideZonesTab
          ? ``
          : html`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-3" .checked=${this.tabIsActive(3)} />
            <label for="tab-3" class="tab-label">Zones</label>
            <div
              id="tab-content-3"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId]['zone']).map((e: any) => {
                const entityId = e.state;
                return html`
                  <spc-sensor-item .hass=${this.hass} .entityId=${entityId} @action-event="${this.handleActionEvent}" />
                `;
              })}
            </div>
	    `
          }

	${this.hideOutputsTab || this.spcEntities[this.panelId]['output'] == undefined
          ? ``
          : html`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-4" .checked=${this.tabIsActive(4)} />
            <label for="tab-4" class="tab-label">Outputs</label>
            <div
              id="tab-content-4"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId]['output']).map((e: any) => {
                const entityId = e.state;
                return html`
                  <spc-output-item .hass=${this.hass} .entityId=${entityId} @action-event="${this.handleActionEvent}" />
                `;
              })}
            </div>
	    `
          }

	${this.hideDoorsTab || this.spcEntities[this.panelId]['door'] == undefined
          ? ``
          : html`
            <input type="radio" class="tab-radio" name="tab-group" id="tab-5" .checked=${this.tabIsActive(5)} />
            <label for="tab-5" class="tab-label">Doors</label>
            <div
              id="tab-content-5"
              class="tab-content"
              @touchstart="${this.handleTouchStart}"
              @touchmove="${this.handleTouchMove}"
            >
              ${Object.values(this.spcEntities[this.panelId]['door']).map((e: any) => {
                const entityId = e.mode;
                return html`
                  <spc-door-item .hass=${this.hass} .entityId=${entityId} @action-event="${this.handleActionEvent}" />
                `;
              })}
            </div>
	    `
          }
        </div>
      </div>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
	--spcbridge-card-background-color: var(--card-background-color);
	--spcbridge-card-border-color: rgba(0, 0, 0, 0.12);
        --spcbridge-primary-color: var(--primary-color);
	--spcbridge-primary-text-color: var(--primary-text-color);
	--spcbridge-secondary-background-color: var(--secondary-background-color);
	--spcbridge-orange-color: #ff9800;
	--spcbridge-green-color: #4caf50;
	--spcbridge-red-color: #ff0000;
	--spcbridge-grey-color: #bdbdbd;
      }

      .tabs {
        display: flex;
        flex-wrap: wrap;
        min-width: 300px;
        max-width: 390px;
        font-family: Roboto, Arial, sans-serif;
      }
      .tab-label {
        padding: 10px 7px;
        cursor: pointer;
      }
      .tab-radio {
        display: none;
      }
      .tab-content {
        order: 1;
        width: 100%;
        padding-right: 10px;
        height: calc(100vh - 120px);
        max-height: 800px;
        overflow: auto;
        line-height: 1.5;
        font-size: 0.9em;
        display: none;
      }
      .tab-radio:checked + .tab-label {
        font-weight: bold;
        color: var(--spcbridge-primary-color);
        border-bottom: 2px solid var(--spcbridge-primary-color);
      }
      .tab-radio:checked + .tab-label + .tab-content {
        display: initial;
      }
      .view {
        min-width: 300px;
        max-width: 390px;
      }
      #open-zones-banner {
        width: 100%;
        height: 20px;
        display: flex;
        align-content: space-between;
        flex-flow: column wrap;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      #open-zones-header {
        font-size: 1.4em;
        font-weight: 500;
      }
      .command-button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        background-color: transparent;
        font-size: 1.1em;
        font-weight: 500;
        cursor: pointer;
      }
      .command-button:hover {
        filter: brightness(85%);
      }
      .card-header {
        position: relative;
        top: 0px;
        left: 0px;
        display: block;
        width: 100%;
	padding-top: 0.3em;
	padding-bottom: 0.3em;
        font-size: 2.0em;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0px;
      }
      .page-banner {
        position: relative;
        top: 0px;
        left: 0px;
        display: block;
        width: 100%;
        height: 1.3em;
        font-size: 0.9em;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0px;
      }
    `;
  }
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'spcbridge-card',
  name: 'spcbridge-card',
  description: 'Card for operating Vanderbilt SPC through Lovelace.',
  preview: true,
});

console.info(
  `%c  VANDERBILT SPCBRIDGE CARD  \n%c  Version: ${CARD_VERSION.padEnd(7, ' ')}`,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);
