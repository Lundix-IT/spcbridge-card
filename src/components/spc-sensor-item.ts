import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Action, Color } from '../const';
import { MyHass } from '../types';
import { 
  mdiMotionSensor,
  mdiMotionSensorOff,
  mdiDoorOpen,
  mdiDoorClosed,
  mdiWindowOpenVariant,
  mdiWindowClosedVariant,
  mdiFire,
  mdiFireOff,
  mdiClose,
  mdiElectricSwitch,
  mdiElectricSwitchClosed,
} from '@mdi/js';
//import { HomeAssistant } from 'custom-card-helpers';

class SpcSensorItem extends LitElement {

  @property({ type: Object })
  public hass?: MyHass;

  @property({ type: String })
  public entityId?;

  @property({ type: Boolean })
  public disableActions? = false;

  shouldUpdate(changedProps: PropertyValues) {
    //const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    const oldHass = changedProps.get('hass');
    if (!oldHass) return true;
    if (this.entityId && oldHass.states[this.entityId] !== this.hass!.states[this.entityId]) return true;
    return false;
  }

  private _handleZoneSelectEvent(): void {
    if (this.disableActions) return;
    const commandPanel = this.shadowRoot?.getElementById('command-panel');
    if (commandPanel) {
      if (commandPanel.style.display != "flex") {
        commandPanel.style.display = "flex";
      } else {
        commandPanel.style.display = "none";
      }
    }
    return;
  }

  private _handleActionEvent(action: Action, title: string): void {
    if (action == Action.Cancel) return this._handleZoneSelectEvent();
    let event = new CustomEvent('action-event', {
      detail: {
        service: "zone_command",
        entity: this.entityId,
        action: action,
	title: title,
      }
    });
    this.dispatchEvent(event);
    return;
  }

  private stateIcon(stateObj) {
    switch(stateObj.device_class) {
      case "motion":
        return stateObj.input == 1? mdiMotionSensor : mdiMotionSensorOff;
        break;
      case "door":
        return stateObj.input == 1? mdiDoorOpen : mdiDoorClosed;
        break;
      case "window":
        return stateObj.input == 1? mdiWindowOpenVariant : mdiWindowClosedVariant;
        break;
      case "smoke":
        return stateObj.input == 1? mdiFire : mdiFireOff;
        break;
    }
    return stateObj.input == 1? mdiElectricSwitch : mdiElectricSwitchClosed;
  }

  private stateText(stateObj) {
    switch(stateObj.device_class) {
      case "motion":
        return stateObj.input == 1? "Motion" : "No motion";
        break;
      case "door":
        return stateObj.input == 1? "Open" : "Closed";
        break;
      case "window":
        return stateObj.input == 1? "Open" : "Closed";
        break;
      case "smoke":
        return stateObj.input == 1? "Fire" : "No fire";
        break;
    }
    return stateObj.input == 1? "Open" : "Closed";
  }

  protected render(): TemplateResult {
    if (!this.hass || 
	!this.entityId || 
	!this.hass.states || 
	!this.hass.states[this.entityId] ||
	!this.hass.states[this.entityId].attributes) return html``;
    const stateObj = { ...this.hass.states[this.entityId].attributes };

    let statusText = this.stateText(stateObj);
    let statusClass = (stateObj.input == 1)? "open" : "closed";

    if (stateObj.inhibited) {
      statusText = "Inhibited";
      statusClass = "warning";
    }
    if (stateObj.isolated) {
      statusText = "Isolated";
      statusClass = "warning";
    }

    if (stateObj.alarm_status && stateObj.alarm_status.intrusion) { 
      statusText = "Intrusion";
      statusClass = "alarm";
    } else if (stateObj.alarm_status && stateObj.alarm_status.fire) {
      statusText = "Fire";
      statusClass = "alarm";
    } else if (stateObj.alarm_status && stateObj.alarm_status.tamper) {
      statusText = "Tamper";
      statusClass = "alarm";
    } else if (stateObj.alarm_status && stateObj.alarm_status.problem) {
      statusText = "Problem";
      statusClass = "alarm";
    }
    const zoneInfo = stateObj.area_name? stateObj.area_name: "";

    return html`
      
      <div class="zone-container" @click=${() => this._handleZoneSelectEvent()}>
        <div class="icon-container ${statusClass}">
	  <svg class="icon-svg" viewBox="0 0 24 24">
            <path class="icon-path" d=${this.stateIcon(stateObj)} />
          </svg>
	</div>
        <div class="info-container">
	  <div class="zone-name">
	     ${stateObj.name}
	  </div>
	  <div class="zone-info">
	    ${zoneInfo}
	  </div>
	</div>
        <div class="status-container">
	  <div class="status ${statusClass}">
	   ${statusText} 
	  </div>
	</div>
      </div>
      <div id="command-panel" class="command-panel">
        <div class="command-buttons">
          ${!stateObj.isolated
            ? html`  
	        ${stateObj.inhibited
                  ? html`
                    <input type="button" class="command-button" value="Deinhibit" 
                      @click=${() => this._handleActionEvent(Action.Deinhibit, stateObj.name)} />
                  `
                  : html`
                    <input type="button" class="command-button" value="Inhibit" 
                      @click=${() => this._handleActionEvent(Action.Inhibit, stateObj.name)} />
                    `
                }
	      `
            : ``
          }
          ${stateObj.isolated
            ? html`
              <input type="button" class="command-button" value="Deisolate" 
                @click=${() => this._handleActionEvent(Action.Deisolate, stateObj.name)} />
              `
            : html`
              <input type="button" class="command-button" value="Isolate" 
                @click=${() => this._handleActionEvent(Action.Isolate, stateObj.name)} />
              `
          } 
	</div>
	<div class="icon-button"
	  @click=${() => this._handleActionEvent(Action.Cancel, stateObj.name)}>
	  <svg class="icon-button-svg" viewBox="0 0 24 24">
            <path class="icon-button-path" d=${mdiClose} />
          </svg>
	</div>
      </div>

    `;
  }

  static get styles() {
    return css`
      .zone-container { 
        margin-top: 10px;
	background-color: var(--spcbridge-card-background-color); 
	height: 50px;
        position: relative;
        display: flex;
	cursor: pointer;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;
	border-color: var(--spcbridge-card-border-color);
      }
      .icon-container { 
        position: relative;
        top: 5px;
	left: 10px;
        width: 34px;
        height: 34px;
        min-width: 34px;
        min-height: 34px;
        max-width: 34px;
        max-height: 34px;
	border: 3px solid;
	border-radius: 50%;
      }
      .icon-svg { 
        position: relative;
        width: 20px;
	height: 20px;
	top: 7px;
	left: 7px;
      }
      .icon-path { 
        fill: var(--spcbridge-primary-text-color);
      }
      .info-container { 
        position: relative;
	left: 30px;
        width: 250px;
        height: 100%;
      }
      .zone-name { 
        margin-top: 5px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
      }
      .zone-info { 
        font-size: 1.0em;
      }
      .status-container { 
        position: relative;
	right: 10px;
        width: 170px;
        height: 100%;
	text-align: right;
      }
      .status { 
        position: relative;
	top: 10px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
      }
      .command-panel {
        display: none;
        background-color: var(--spcbridge-primary-text-color);
        padding: 0 18px;
	height: 50px;
	margin-left: 5px;
	margin-right: 5px;
        overflow: hidden;
	border-radius: 0px 0px 5px 5px;
      }
      .command-buttons {
        width: 100%;
        display: flex;
        align-items: flex-center;
        flex-direction: row;
        justify-content: space-evenly;
      }
      .command-button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        color: var(--spcbridge-secondary-background-color);
        background-color: transparent;
        font-size: 1.1em;
        font-weight: 400;
        cursor: pointer;
      }
      .command-button:hover {
        filter: brightness(85%);
      }
      .icon-button {
        cursor: pointer;
      }
      .icon-button-svg { 
        position: relative;
        width: 24px;
	height: 24px;
	top: 15px;
	left: 0px;
      }
      .icon-button:hover {
        filter: brightness(50%);
      }
      .icon-button-path { 
        fill: var(--spcbridge-secondary-background-color);
      }
      .open {
	border-color: var(--spcbridge-orange-color);
	color: var(--spcbridge-orange-color);
      }
      .closed {
	border-color: var(--spcbridge-green-color);
	color: var(--spcbridge-green-color);
      }
      .warning { 
        border-color: var(--spcbridge-orange-color);
        color: var(--spcbridge-orange-color);
      }
      .alarm { 
        border-color: var(--spcbridge-red-color);
        color: var(--spcbridge-red-color);
      }
    `;
  }
}
customElements.define('spc-sensor-item', SpcSensorItem);
