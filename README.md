# spcbridge-card
## Introduction
This is a Lovelace card for Home Assistant that can be used to control your acre/Vanderbilt SPC alarm system.

The card works on top of the [spcbridge custom component](https://github.com/Lundix-IT/spcbridge). You *will* need it as well.

You cannot use it with any other alarm integration in HA.

Watch the demo video:<br>
[<img src="https://i9.ytimg.com/vi/QRNuylG4g1g/mqdefault.jpg?v=67485336&sqp=CIDcoboG&rs=AOn4CLDehC6EiebEdJ3hvWXk4p1lRtHmZA" width="40%">](https://youtu.be/QRNuylG4g1g?si=S99BWHYj7kMYaOIM)


## Installation
Before proceeding with the installation of this card, make sure you have the Vanderbilt SPC Bridge integration (`spcbridge`) installed and properly configured. Additionally, you will need access to the Home Assistant filesystem, such as through the SSH add-on.

1. Download the <a href="https://github.com/Lundix-IT/spcbridge-card/releases">latest release</a> of `spcbridge-card.js` and place it in the `config/www/` directory. (If the `www` directory does not exist, create it.)
2. Restart Home Assistant.
3. In the Home Assistant interface, navigate to **Settings > Dashboards > Resources** (accessible via the menu in the upper-right corner). Add `/local/spcbridge-card.js` as a JavaScript module.

You should now be able to add the card, named `Custom: spcbridge-card`, to your dashboard.

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
