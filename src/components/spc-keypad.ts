import { LitElement, html, css, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ActionToName } from '../const';

class SpcKeypad extends LitElement {

  @property()
  action;

  @state()
  private _input: string = "";

  private _handlePadClick(e: MouseEvent): void {
    const val = (e.currentTarget! as any).value;
    if (val === "Enter" || val === "Cancel") {
      if (val === 'Enter') this.action["code"] = this._input;
      let event = new CustomEvent('keypad-event', {
        detail: {
          action: this.action,
	}
      });
      this.dispatchEvent(event);
      this._input = "";
      return;
    }
    this._input = val === 'Clear' ? '' : this._input + val;
  }

  render() {
    const _header = this.action.title + " - " + ActionToName[this.action.action];

    return html`
      <div id="container">
        <div id="header">${_header}</div>
        <input id="code" type="password" value=${this._input} disabled />
        <div>
          <input type="button" class="key-button" value="1" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="2" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="3" @click=${this._handlePadClick} />
        </div>
        <div>
          <input type="button" class="key-button" value="4" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="5" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="6" @click=${this._handlePadClick} />
        </div>
        <div>
          <input type="button" class="key-button" value="7" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="8" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="9" @click=${this._handlePadClick} />
        </div>
        <div>
          <input type="button" class="key-button key-text" value="Clear" @click=${this._handlePadClick} />
          <input type="button" class="key-button" value="0" @click=${this._handlePadClick} />
          <input type="button" class="key-button key-text" value="Enter" @click=${this._handlePadClick} />
        </div>
        <input type="button" id="cancel" value="Cancel" @click=${this._handlePadClick} />
      </div>
    `;
  }

  static get styles() {
    return css`
      #container { 
        margin-top: 10px;
        background-color: var(--spcbridge-card-background-color);
	width: 100%;
        border-radius: 12px;
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-card-border-color);
        display: block;
        text-align: center;
      }
      #header  {
        position: relative;
        top: 20px;
        display: block;
        width: 100%;
        font-weight: 500;
        font-size: 1.4em;
        text-align: center;
      }
      #cancel {
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 0;
        border: 0;
        outline: none;
        width: 100%;
        background-color: transparent;
        font-size: 1.0em;
	text-align: center;
	cursor: pointer;
      }
      #code {
        position: relative;
        background-color: transparent;
        color: var(--spcbridge-orange-color);
        margin: 0;
        padding-bottom: 0;
        padding-top: 20px;
        width: 100%;
        font-size: 3em;
        text-align: center;
        border: 0;
        outline: none;
        pointer-events: none;
      }
      .key-button {
        color: var(--spcbridge-primary-text-color);
        border-width: 1px;
        border-style: solid;
        border-color: var(--spcbridge-orange-color);
        border-radius: 15%;
        background-color: transparent;
        font-size: 1.5em !important;
        text-align: center;
        width: 60px;
        height: 60px;
        margin: 8px 8px;
        padding: 0;
        outline: none;
	cursor: pointer;
      }
      .key-button:hover {
        box-shadow: var(--spcbridge-orange-color) 0 0 1px 1px;
      }
      .key-button:active {
        background-color: var(--spcbridge-orange-color);
        color: var(--spcbridge-primary-text-color);
      }
      .key-text {
        font-size: 1.0em !important;
      }
    `;
  }
}
customElements.define('spc-keypad', SpcKeypad);
