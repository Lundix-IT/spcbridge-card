import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Action, Color } from '../const';
import { MyHass } from '../types';
import { 
  mdiLockCheckOutline,
  mdiLockOutline,
  mdiLockOpenOutline,
  mdiClose
} from '@mdi/js';

class SpcDoorItem extends LitElement {

  @property({ type: Object })
  public hass?: MyHass;

  @property({ type: String })
  public entityId?;

  shouldUpdate(changedProps: PropertyValues) {
    const oldHass = changedProps.get('hass');
    if (!oldHass) return true;
    if (this.entityId && oldHass.states[this.entityId] !== this.hass!.states[this.entityId]) return true;
    return false;
  }

  private handleSelectEvent(): void {
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

  private handleActionEvent(action: Action, title: string): void {
    if (action == Action.Cancel) return this.handleSelectEvent();
    let event = new CustomEvent('action-event', {
      detail: {
        service: "door_command",
        entity: this.entityId,
        action: action,
	title: title,
      }
    });
    this.dispatchEvent(event);
    return;
  }

  private stateIcon(stateObj) {
     if (stateObj.mode == 1) return mdiLockCheckOutline;  // Locked
     if (stateObj.mode == 2) return mdiLockOpenOutline;   // Unlocked
     return mdiLockOutline;                               // Normal mode
  }

  private stateClass(stateObj) {
     if (stateObj.mode == 1) return "locked";
     if (stateObj.mode == 2) return "unlocked";
     return "normal";
  }

  private stateLabel(stateObj) {
     if (stateObj.mode == 1) return "Locked";
     if (stateObj.mode == 2) return "Unlocked";
     return "Normal";
  }

  protected render(): TemplateResult {
    if (!this.hass || 
	!this.entityId || 
	!this.hass.states || 
	!this.hass.states[this.entityId] ||
	!this.hass.states[this.entityId].attributes) return html``;
    const stateObj = { ...this.hass.states[this.entityId].attributes };
    const stateClass = this.stateClass(stateObj);
    const stateLabel = this.stateLabel(stateObj);

    return html`
      
      <div class="container" @click=${() => this.handleSelectEvent()}>
        <div class="icon-container ${stateClass}">
	  <svg class="icon-svg" viewBox="0 0 24 24">
            <path class="icon-path" d=${this.stateIcon(stateObj)} />
          </svg>
	</div>
        <div class="info-container">
	  <div class="door-name">
	     ${stateObj.name}
	  </div>
	</div>
        <div class="status-container">
	  <div class="status ${stateClass}">
	   ${stateLabel} 
	  </div>
	</div>
      </div>
      <div id="command-panel" class="command-panel">
        <div class="command-buttons">
          ${stateObj.mode == 0
            ? html`  
              <input type="button" class="command-button" value="Open momentary" 
                @click=${() => this.handleActionEvent(Action.DoorOpen, stateObj.name)} />
              <input type="button" class="command-button" value="Unlock" 
                @click=${() => this.handleActionEvent(Action.DoorUnlockMode, stateObj.name)} />
              <input type="button" class="command-button" value="Lock" 
                @click=${() => this.handleActionEvent(Action.DoorLockMode, stateObj.name)} />
	      `
            : ``
          }
          ${stateObj.mode == 1
            ? html`  
              <input type="button" class="command-button" value="Normal mode" 
                @click=${() => this.handleActionEvent(Action.DoorNormalMode, stateObj.name)} />
              <input type="button" class="command-button" value="Unlock" 
                @click=${() => this.handleActionEvent(Action.DoorUnlockMode, stateObj.name)} />
	      `
            : ``
          }
          ${stateObj.mode == 2
            ? html`  
              <input type="button" class="command-button" value="Normal mode" 
                @click=${() => this.handleActionEvent(Action.DoorNormalMode, stateObj.name)} />
              <input type="button" class="command-button" value="Lock" 
                @click=${() => this.handleActionEvent(Action.DoorLockMode, stateObj.name)} />
	      `
            : ``
          }
	</div>
	<div class="icon-button"
	  @click=${() => this.handleActionEvent(Action.Cancel, stateObj.name)}>
	  <svg class="icon-button-svg" viewBox="0 0 24 24">
            <path class="icon-button-path" d=${mdiClose} />
          </svg>
	</div>
      </div>

    `;
  }

  static get styles() {
    return css`
      .container { 
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
      .door-name { 
        margin-top: 14px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
      }
      .door-info { 
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
	top: 14px;
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
        font-weight: 500;
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
      .locked {
	border-color: var(--spcbridge-orange-color);
	color: var(--spcbridge-orange-color);
      }
      .unlocked {
	border-color: var(--spcbridge-green-color);
	color: var(--spcbridge-green-color);
      }
      .normal { 
        border-color: var(--spcbridge-orange-color);
        color: var(--spcbridge-orange-color);
      }
    `;
  }
}
customElements.define('spc-door-item', SpcDoorItem);
