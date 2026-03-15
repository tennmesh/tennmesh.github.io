---
layout: base.njk
title: Repeater Configuration
description: How to do the initial configuration of a MeshCore repeater over USB after flashing the firmware.
---

<div class="container-narrow">
  <div class="howto-breadcrumb">
    <a href="/howtos/">&larr; Back to How-Tos</a>
  </div>

  <div class="content-section" style="padding-bottom: 0">
    <div class="howto-page-header">
      <span class="howto-tag howto-tag--config">Configuration</span>
      <h1>Repeater Configuration</h1>
      <p class="howto-intro">Now that we have the MeshCore Repeater firmware flashed, we need to do some initial configuration.</p>
    </div>
  </div>

  <div class="content-section" style="padding-top: var(--space-6)">
    <p>
      Unlike the companion devices, which can be configured via Bluetooth and the MeshCore app, Repeaters need to have their initial configuration done while connected to a computer using the USB-C cable. After this initial configuration is complete, the repeater can then be managed remotely over the LoRa radio using the MeshCore app while a companion device is paired to it.
    </p>
    <div class="note">
      <p>Bluetooth is disabled on Repeater firmware. This means they can only be remotely managed from a LoRa radio flashed with the companion firmware and managing it through the MeshCore app.</p>
    </div>
  </div>

  <div class="content-section">
    <h2>Step 1: Go to the Repeater Config Page</h2>
    <div class="note">
      <p>This only works on Chromium-based web browsers, like Google Chrome, Brave, or if you're on a recent version of Windows, you already have one called Microsoft Edge.</p>
    </div>
    <p>Open your web browser and go to the repeater config web page at <a href="https://config.meshcore.dev" target="_blank" rel="noopener noreferrer">config.meshcore.dev</a>.</p>
  </div>

  <div class="content-section">
    <h2>Step 2: Connect</h2>
    <p>
      On the top right of the page, there's a "Connect" button. Click on this and a window will appear with a list of devices. After this window pops up, plug in your MeshCore repeater into the computer. Whatever device appears on the list is what should be selected. Select the device and hit the "Connect" button below.
    </p>
  </div>

  <div class="content-section">
    <h2>Step 3: Configure</h2>
    <p>Next we need to configure some settings for the Repeater using this page.</p>

    <h3 class="howto-section-label">Name &amp; Location</h3>

    <h4>Name</h4>
    <p>
      This can be whatever you like. Some people use their Ham Radio or GMRS Callsign and if they're deploying multiple they may add a -1 -2 -3 to the name <code>CALLSIGN-1</code>, <code>CALLSIGN-2</code>, etc. Others use an online handle, or just the name of the location it's at. The choice is yours..
    <div class="note note-primary">
      <p>If you're part of the TennMesh mesh here in Tennessee, consider adding <strong>TennMesh.com</strong> to the end of your repeater's name so others know the best place to go for the latest info for the mesh and where to go to get help if needed.</p>
    </div>

    <h4>Latitude / Longitude</h4>
    <p>
      To the right of the Lat/Long boxes is a map icon. Click on this and set the location of the repeater. If you prefer not to set the exact location, that's fine, but it's recommended to at least set the location somewhere in the general area. This helps others better determine antenna placement who may be within range of your repeater.
    </p>

    <h3 class="howto-section-label">Access</h3>
    <p>In the access section there are two passwords: Guest and Admin.</p>

    <h4>Guest</h4>
    <p>
      We recommend leaving this blank. This allows for other users on the mesh to log into your repeater's Guest page for helpful info like Owner info (if set), current battery level, neighbors seen, and more. Don't worry, they can't make any changes to your repeater and can only read some of the helpful info.
    </p>

    <h4>Admin</h4>
    <p>
      It's important to set a password for this as it will allow you to remotely make changes to your repeater using the MeshCore app.
    </p>

    <h3 class="howto-section-label">Radio Settings</h3>

    <h4>Preset</h4>
    <p>
      This is a quick way to set the desired Frequency and LoRa settings for your country. Click on this and select your country preset (USA/Canada Recommended for TennMesh).
    </p>
    <p>
      The remaining settings will be set for you based on the preset. Be sure not to change these settings other than the Coding Rate. Making changes to any of the others will make you unable to communicate with the mesh. For repeaters on the TennMesh network, we like to set the Coding Rate to <strong>8</strong>.
    </p>
    <div class="note note-grey">
      <p>Changing the coding rate will make the preset say Custom again. This is normal.</p>
    </div>
  </div>

  <div class="content-section">
    <h2>Step 4: Save &amp; Reboot</h2>
    <p>
      Now that all of the settings are set, click on the "Save settings" button on the bottom left of the page. After that, reboot by clicking on the "Reboot" button back towards the top of the page. When the device reboots, it will send an advert. Your companion device connected to your phone using the MeshCore app should see the advert. If so, your repeater is all set and ready to be deployed!
    </p>
    <p>
      Now's a great time to also test the Remote Admin feature to make sure you're able to remotely connect to your repeater to make changes later on. More info on that can be found at the following link — <em>link coming soon</em>.
    </p>
  </div>
</div>
