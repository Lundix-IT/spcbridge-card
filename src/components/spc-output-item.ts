import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Action, Color } from '../const';
import { MyHass } from '../types';
import { 
  mdiToggleSwitchOffOutline,
  mdiToggleSwitchOutline,
} from '@mdi/js';
//import { HomeAssistant } from 'custom-card-helpers';

class SpcOutputItem extends LitElement {

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

  private handleActionEvent(action: Action, title: string): void {
    const event = new CustomEvent('action-event', {
      detail: {
        service: "output_command",
        entity: this.entityId,
        action: action,
	title: title,
      }
    });
    this.dispatchEvent(event);
    return;
  }

  protected render(): TemplateResult {
    if (!this.hass || 
	!this.entityId || 
	!this.hass.states || 
	!this.hass.states[this.entityId] ||
	!this.hass.states[this.entityId].attributes) return html``;
    const stateObj = { ...this.hass.states[this.entityId].attributes };

    const stateIcon = stateObj.state? mdiToggleSwitchOutline : mdiToggleSwitchOffOutline;
    const stateText = stateObj.state? "On" : "Off";
    const stateClass = stateObj.state? "on" : "off";

    return html`
      <div class="container">
        <div class="info-container">
	  <div class="output-name">
	     ${stateObj.name}
	  </div>
	</div>
        <div class="state-container">
	  <div class="state ${stateClass}">
	   ${stateText} 
	  </div>
	</div>
        <div class="icon-button ${stateClass}"
          @click=${() => this.handleActionEvent(stateObj.state? Action.OutputOff : Action.OutputOn, stateObj.name)}>
	  <svg class="icon-svg" viewBox="0 0 24 24">
            <path class="icon-path ${stateClass}" d=${stateIcon} />
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
      .info-container { 
        position: relative;
	left: 20px;
        width: 250px;
        height: 100%;
      }
      .output-name { 
        margin-top: 14px;
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
      }
      .state-container { 
        position: absolute;
	top: 14px;
	right: 70px;
        width: 50px;
        height: 100%;
	text-align: right;
      }
      .state { 
        font-size: 1.2em;
        font-weight: 500;
        font-family: "Segoe UI",Arial,sans-serif;
      }
      .on {
	border-color: var(--spcbridge-orange-color);
	color: var(--spcbridge-orange-color);
	fill: var(--spcbridge-orange-color);
      }
      .off {
	border-color: var(--spcbridge-green-color);
	color: var(--spcbridge-green-color);
	fill: var(--spcbridge-green-color);
      }
      .icon-button { 
        position: absolute;
	top: 5px;
	right: 10px;
        width: 40px;
        height: 40px;
        min-width: 40;
        min-height: 40px;
        max-width: 40px;
        max-height: 40px;
	border: 0px;
	cursor: pointer;
      }
      .icon-button:hover {
        filter: brightness(80%);
      }
      .icon-svg { 
        width: 100%;
	height: 100%;
      }
    `;
  }
}
customElements.define('spc-output-item', SpcOutputItem);
