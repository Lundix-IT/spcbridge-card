import { CardConfig } from './types';

export const CARD_VERSION = 'v0.5.0';

export enum ArmMode {
  UNSET = 0,
  PART_SET_A = 1,
  PART_SET_B = 2,
  FULL_SET = 3,
  PARTLY_SET_A = 97,
  PARTLY_SET_B = 98,
  PARTLY_FULL_SET = 99,
}

export enum Action {
  Disarm = 'unset',
  Arm = 'set_delayed',
  ArmA = 'set_a',
  ArmB = 'set_b',
  ArmForced = 'set_delayed_forced',
  ArmAForced = 'set_a_forced',
  ArmBForced = 'set_b_forced',
  ClearAlerts = 'clear_alerts',
  Inhibit = 'inhibit',
  Deinhibit = 'deinhibit',
  Isolate = 'isolate',
  Deisolate = 'deisolate',
  ForceArm = 'force_arm',
  OutputOn = 'set',
  OutputOff = 'reset',
  DoorNormalMode = 'set_normal_mode',
  DoorUnlockMode = 'open_permanently',
  DoorLockMode = 'lock',
  DoorOpen = 'open_momentarily',
  Cancel = 'cancel',
}

export const ActionToName = {
  [Action.Disarm]: 'Disarm',
  [Action.Arm]: 'Arm',
  [Action.ArmA]: 'Partset A',
  [Action.ArmB]: 'Partset B',
  [Action.ArmForced]: 'Arm',
  [Action.ArmAForced]: 'Partset A',
  [Action.ArmBForced]: 'Partset B',
  [Action.ClearAlerts]: 'Clear all alerts',
  [Action.Inhibit]: 'Inhibit',
  [Action.Deinhibit]: 'Deinhibit',
  [Action.Isolate]: 'Isolate',
  [Action.Deisolate]: 'Deisolate',
  [Action.ForceArm]: 'Force arm',
  [Action.OutputOn]: 'Switch on',
  [Action.OutputOff]: 'Switch off',
  [Action.DoorNormalMode]: 'Normal mode',
  [Action.DoorUnlockMode]: 'Unlock door',
  [Action.DoorLockMode]: 'Lock door',
  [Action.DoorOpen]: 'Open momentary',
  [Action.Cancel]: 'Cancel',
};

export const ActionToState = {
  [Action.Disarm]: ArmMode.UNSET,
  [Action.Arm]: ArmMode.FULL_SET,
  [Action.ArmA]: ArmMode.PART_SET_A,
  [Action.ArmB]: ArmMode.PART_SET_B,
  [Action.ArmForced]: ArmMode.FULL_SET,
  [Action.ArmAForced]: ArmMode.PART_SET_A,
  [Action.ArmBForced]: ArmMode.PART_SET_B,
};

export const defaultCardConfig: CardConfig = {
  type: 'custom:spcbridge-card',
  header: '',
  spc_system: '',
  appearance: [],
};

export const Color = {
  orange: '#ff9800',
  green: '#4caf50',
  red: '#ff0000',
};
