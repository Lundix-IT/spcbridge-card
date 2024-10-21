import { HomeAssistant } from 'custom-card-helpers';

export type CardConfig = {
  type: string;
  header: string;
  spc_system: string;
  appearance: string[];
};

export type StateConfig = {
  hide: boolean;
  button_label: string;
  state_label: string;
};

export interface MyHass extends HomeAssistant {
  entities: any;
  devices: any;
};
