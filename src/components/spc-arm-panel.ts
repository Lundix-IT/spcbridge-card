import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Action, ArmMode, Color } from '../const';
import { SvgIcon } from '../svg-icons';
import { MyHass } from '../types';

class SpcArmPanel extends LitElement {

  @property({ type: Object })
  public hass?: MyHass;

  @property({ type: String })
  public entityId?;

  @property({ type: String })
  public layout;

  @property({ type: String })
  public panelType?;

  shouldUpdate(changedProps: PropertyValues) {
    //const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    const oldHass = changedProps.get('hass');
    if (!oldHass) return true;
    if (this.entityId && oldHass.states[this.entityId] !== this.hass!.states[this.entityId]) return true;
    return false;
  }

  private _handleActionEvent(action: Action, title: string): void {
    let event = new CustomEvent('action-event', {
      detail: {
        service: this.panelType == "panel" ? "panel_command" : "area_command",
        entity: this.entityId,
        action: action,
	title: title,
      }
    });
    this.dispatchEvent(event);
    return;
  }

  render(): TemplateResult {
    if (!this.hass ||
        !this.entityId ||
        !this.hass.states ||
        !this.hass.states[this.entityId] ||
        !this.hass.states[this.entityId].attributes) return html``;
    const stateObj = { ...this.hass.states[this.entityId].attributes };

    const title = stateObj.title;
    const armMode = stateObj.mode;

    let iconWidth = 120;
    let iconHeight = 200;
    if (this.layout == "list") {
      iconWidth = 60;
      iconHeight = 100;
    }
    let alarmText = "";
    if (stateObj.alarm_status && stateObj.alarm_status.intrusion) { 
      alarmText = "Intrusion alarm";
    } else if (stateObj.alarm_status && stateObj.alarm_status.fire) {
      alarmText = "Fire alarm";
    } else if (stateObj.alarm_status && stateObj.alarm_status.verified) {
      alarmText = "Verified alarm";
    } else if (stateObj.alarm_status && stateObj.alarm_status.tamper) {
      alarmText = "Tamper alarm";
    } else if (stateObj.alarm_status && stateObj.alarm_status.problem) {
      alarmText = "Problem alarm";
    }
    if (alarmText != "") {
      return html`
      <div class="container ${this.layout}">
        <div class="header ${this.layout}" style="color:${Color.red};">${title} - ${alarmText}</div>
        <div class="arm-container">
          <div class="arm-icon-button"
            @click=${() => this._handleActionEvent(Action.ClearAlerts, title)}>
            ${SvgIcon(armMode, iconWidth, iconHeight, Color.red)}
          </div>
        </div>
        </div>
      `
    };

    return html`
      
      <div class="container ${this.layout}">
        ${armMode == ArmMode.UNSET
          ? html`
            <div class="header ${this.layout}" style="color:${Color.green};">${title} - Disarmed</div>
            <div class="arm-container">
	      ${stateObj.partset_a_enabled
	        ? html`<input type="button" class="arm-text-button" value="Partset A" 
                      @click=${() => this._handleActionEvent(Action.ArmA, title)} />`
	        : html`<input style="opacity:0; cursor:default;" type="button" class="arm-text-button" value="Partset A"/>`}

              <div class="arm-icon-button"
                @click=${() => this._handleActionEvent(Action.Arm, title)}>
                ${SvgIcon(armMode, iconWidth, iconHeight, Color.green)}
              </div>

	      ${stateObj.partset_b_enabled
	        ? html`<input type="button" class="arm-text-button" value="Partset B" 
                      @click=${() => this._handleActionEvent(Action.ArmB, title)} />`
	        : html`<input style="opacity:0; cursor:default;" type="button" class="arm-text-button" value="Partset B"/>`}
            </div>`
          : ``}
        ${armMode == ArmMode.FULL_SET
          ? html`
            <div class="header ${this.layout}" style="color:${Color.orange};">${title} - Armed</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${() => this._handleActionEvent(Action.Disarm, title)}>
                ${SvgIcon(armMode, iconWidth, iconHeight, Color.orange)}
              </div>
            </div>`
          : ``}
        ${(armMode == ArmMode.PARTLY_FULL_SET ||
           armMode == ArmMode.PARTLY_SET_A ||
           armMode == ArmMode.PARTLY_SET_B)
          ? html`
            <div class="header ${this.layout}" style="color:${Color.orange};">${title} - Partly Armed</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${() => this._handleActionEvent(Action.Disarm, title)}>
                ${SvgIcon(armMode, iconWidth, iconHeight, Color.orange)}
              </div>
            </div>`
          : ``}
        ${armMode == ArmMode.PART_SET_A 
          ? html`
            <div class="header ${this.layout}" style="color:${Color.orange};">${title} - Partset A</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${() => this._handleActionEvent(Action.Disarm, title)}>
                ${SvgIcon(armMode, iconWidth, iconHeight, Color.orange)}
              </div>
            </div>`
          : ``}
        ${armMode == ArmMode.PART_SET_B 
          ? html`
            <div class="header ${this.layout}" style="color:${Color.orange};">${title} - Partset B</div>
            <div class="arm-container">
              <div class="arm-icon-button"
                @click=${() => this._handleActionEvent(Action.Disarm, title)}>
                ${SvgIcon(armMode, iconWidth, iconHeight, Color.orange)}
              </div>
            </div>`
          : ``}
      </div>

    `;
  }

  static get styles() {
    return css`
      .container { 
        margin-top: 10px;
	background-color: var(--spcbridge-card-background-color);
	height: 300px;
	border-radius: 12px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-card-border-color);
      }
      .container.list { 
	height: 200px !important;
      }
      .header  { 
        position: relative;
        top: 20px;
        display: block;
        width: 100%;
        font-weight: 500;
        font-size: 1.4em;
        text-align: center;
      }
      .header.list { 
        font-size: 1.3em !Important;
      }
      .arm-container {
        position: relative;
        top: 30px;
        display: flex;
        align-items: flex-center;
        flex-direction: row;
        justify-content: space-evenly;
      }
      .arm-text-button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        background-color: transparent;
        font-size: 1.1em;
        font-weight: 500;
        cursor: pointer;
      }
      .arm-icon-button {
        cursor: pointer;
      }
    `;
  }
}
customElements.define('spc-arm-panel', SpcArmPanel);
