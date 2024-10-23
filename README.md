# spcbridge-card
## Introduction
This is a Lovelace card for Home Assistant that can be used to control your acre/Vanderbilt SPC alarm system.

The card works on top of the [spcbridge custom component](https://github.com/Lundix-IT/spcbridge). You *will* need it as well.

You cannot use it with any other alarm integration in HA.

## Installation
Before you install this card, ensure that you have installed and configured the Vanderbilt SPC Bridge integration, spcbridge.

1. Download the latest release of `spcbridge-card.js` and place it into directory `config/www/` (You have to create the www directory if it doesn't exists).
2. Restart Home Assistant
3. In HA GUI; Select Settings -> Dashboards -> Resources (in the menu in the upper right corner) and add `/local/spcbridge-card.js` as a javascript module.
5. Edit a dashboard and add the card `Custom: spcbridge-card`

## System View
<img src="https://github.com/Lundix-IT/spcbridge-card/blob/main/screenshots/spc-ha-system.png" width="300">

## Areas View
<img src="https://github.com/Lundix-IT/spcbridge-card/blob/main/screenshots/spc-ha-areas.png" width="300">

## Zones View
<img src="https://github.com/Lundix-IT/spcbridge-card/blob/main/screenshots/spc-ha-zones.png" width="300">

## Outputs View
<img src="https://github.com/Lundix-IT/spcbridge-card/blob/main/screenshots/spc-ha-outputs.png" width="300">

## Doors View
<img src="https://github.com/Lundix-IT/spcbridge-card/blob/main/screenshots/spc-ha-doors.png" width="300">

## Keypad
<img src="https://github.com/Lundix-IT/spcbridge-card/blob/main/screenshots/spc-ha-keypad.png" width="300">

## Arming Countdown
<img src="https://github.com/Lundix-IT/spcbridge-card/blob/main/screenshots/spc-ha-countdown.png" width="300">
