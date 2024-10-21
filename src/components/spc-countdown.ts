import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class SpcCountdown extends LitElement {

  @property()
  delay;

  @property()
  remaining;

  @property()
  action;

  getFraction() {
    if (this.delay <= 0) return 1;
    let v = Math.round(this.remaining) / this.delay;
    return v < 0? 0 : v;
  }

  private _stateValue() {
    if (this.delay > 0) {
      return html`
        ${Math.max(Math.round(this.remaining), 0)}
      `;
    } else {
      return html``;
    }
  }

  private _cancelClick() {
    this.action.action = "unset";
    const event = new CustomEvent('countdown-event', {
      detail: {
        action: this.action,
      }
    });
    this.dispatchEvent(event);
  }

  render() {
    let c = 50;
    let r = 45;
    let arcLength = 2 * Math.PI * r;

    const _header = this.action.title + " - " + "Arming";

    return html`
      ${this.delay > 0
      ? html`
          <div id="container">
            <div id="header">${_header}</div>
            <div id="container-counter">
              <div id="counter">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g class="track">
                    <circle cx="${c}" cy="${c}" r="${r}"></circle>
                    <path
                      stroke-dasharray="${(this.getFraction() * arcLength).toFixed(2)} ${arcLength.toFixed(2)}"
                      class="remaining"
                      d="
                        M ${c}, ${c}
                        m -${r}, 0
                        a ${r},${r} 0 1,0 90,0
                        a ${r},${r} 0 1,0 -90,0
                      "
                    ></path>
                  </g>
                </svg>
                <div class="overlay">
                  <div class="value">
                    ${this._stateValue()}
                  </div>
                </div>
              </div>
            </div>
            <input type="button" id="cancel" value="Cancel" @click=${this._cancelClick} />
          </div>
        `
      : html``}
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
      #container-counter {
        width: 150px;
        height: 200px;
        margin: 0px auto;
        padding-top: 60px;
	color: var(--spcbridge-orange-color);
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
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 3px;
        stroke: var(--spcbridge-card-background-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--spcbridge-orange-color);
      }
      .overlay {
        position: absolute;
        margin-top: -150px;
        margin-left: 0;
        width: 150px;
        height: 150px;
        font-size: 2.0em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
	color: var(--spcbridge-primary-text-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 1.3em;
      }
    `;
  }
}
customElements.define('spc-countdown', SpcCountdown);
