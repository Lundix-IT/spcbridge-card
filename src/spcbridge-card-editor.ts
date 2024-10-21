import { LitElement, html, TemplateResult, CSSResult, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { LovelaceCardEditor, fireEvent } from 'custom-card-helpers';
import { MyHass, CardConfig } from './types';
import { localize } from './localize/localize';
import { Action, defaultCardConfig } from './const';

@customElement('spcbridge-card-editor')
export class SpcBridgeCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false })
  public hass?: MyHass;

  @state()
  private _config?: Partial<CardConfig>;

  @state()
  private _entities: string[] | null = null;

  @state()
  private _editAction: Action | null = null;

  viewElements = [
    'Hide SPC event text messages',
    'Hide System tab',
    'Hide Areas tab',
    'Hide Zones tab',
    'Hide Outputs tab',
    'Hide Doors tab',
  ];

  async firstUpdated() {
  }

  public setConfig(config?: Partial<CardConfig>): void {
    this._config = { ...defaultCardConfig, ...config };
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    return html`
      <div class="card-config">
        <div class="grid">
	  <ha-form
            .hass=${this.hass}
	    .data=${this._config}
            .schema=${[
              {
                name: "spc_system", 
	        selector: {
                  config_entry: { 
                    integration: "spcbridge",
                  }
	        }
	      },
              {
                name: "header", 
	        selector: {
                  text: {
                    type: "text",
		  }
	        }
	      },
              {
                name: "appearance", 
                selector: { 
                  select: { 
                    multiple: true, 
                    mode: "list", 
		    options: [
                      {label: localize('editor.hide_events', this.hass.language), value: "hide_events"},
                      {label: localize('editor.hide_areas_tab', this.hass.language), value: "hide_areas_tab"},
                      {label: localize('editor.hide_zones_tab', this.hass.language), value: "hide_zones_tab"},
                      {label: localize('editor.hide_outputs_tab', this.hass.language), value: "hide_outputs_tab"},
                      {label: localize('editor.hide_doors_tab', this.hass.language), value: "hide_doors_tab"},
                    ]
		  }
		}
	      }
            ]}
	    .computeLabel=${this._computeLabel}
	    @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      </div>
    `;
  }

  private _computeLabel(schema) {
    let label = localize!('editor.' + schema.name, this.hass!.language)
    if (schema.name == "spc_system") {
      label = label + " (" + this.hass!.localize('ui.panel.lovelace.editor.card.config.required') + ")";
    }
    return label;
  }

  private _valueChanged(ev) {
    if (!this._config || !this.hass) {
      return;
    }
    const _config = Object.assign({}, this._config);
    _config.spc_system = ev.detail.value.spc_system;
    _config.header = ev.detail.value.header;
    _config.appearance = ev.detail.value.appearance;
    this._config = _config;
    fireEvent(this, 'config-changed', { config: this._config });
  }

  _editActionClick(action: Action) {
    this._editAction = action;
  }

  _goBack() {
    this._editAction = null;
  }

  static get styles(): CSSResult {
    return css`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'spcbridge-card-editor': SpcBridgeCardEditor;
  }
}
