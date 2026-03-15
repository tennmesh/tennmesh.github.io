---
layout: base.njk
title: Flashing the NRF52 OTA Bootloader
description: How to flash the NRF52 OTA bootloader onto the SenseCAP Solar Node P1-Pro for safer over-the-air firmware updates.
---

<div class="container-narrow">
  <div class="howto-breadcrumb">
    <a href="/howtos/sensecap-p1-pro/">&larr; Back to SenseCAP P1-Pro How-Tos</a>
  </div>

  <div class="content-section" style="padding-bottom: 0">
    <div class="howto-page-header">
      <span class="howto-tag howto-tag--hardware">Hardware</span>
      <h1>Flashing the NRF52 OTA Bootloader</h1>
      <p class="howto-intro">Flash the NRF52 OTA bootloader onto the SenseCAP Solar Node P1-Pro for safer over-the-air firmware updates.</p>
    </div>
  </div>

  <div class="content-section" style="padding-top: var(--space-6)">
    <h2>Why Flash the OTA Bootloader on a MeshCore Repeater?</h2>
    <p>
      When a <strong>MeshCore repeater</strong> is installed on a tower, roof, or other hard-to-reach location, updating the firmware the traditional way via USB cable can be difficult as you have to take the device down, update, and redeploy it. Luckily, there's an easy way to update using the <strong>Over-The-Air (OTA) update</strong> method. For NRF52 based devices like the Seeed Studio SenseCAP Solar Node P1&#8209;Pro, this is done via the Bluetooth connection.
    </p>

    <div class="note">
      <p>The <strong>stock bootloader</strong> has a major limitation: if a Bluetooth firmware update fails, the failure can lock the device, making it unresponsive. When this happens, the only solution is to physically re-flash it from a computer; no easy task for a tower-deployed repeater.</p>
    </div>

    <p>Installing the <strong>OTA Bootloader</strong> greatly reduces this risk. With it installed:</p>
    <ul>
      <li>Failed Bluetooth firmware updates result in a <strong>soft failure</strong>, not a device lockup.</li>
      <li>The repeater remains accessible so you can <strong>retry the update remotely</strong>.</li>
      <li>You can <strong>maintain deployed MeshCore nodes</strong> without climbing towers or rooftops.</li>
    </ul>

    <p>For anyone deploying <strong>MeshCore repeaters in permanent or elevated locations</strong>, flashing the OTA Bootloader is highly recommended.</p>

    <p>Now that you understand its purpose, follow the steps below to <strong>flash the OTA Bootloader and enable safer OTA firmware updates</strong>.</p>
  </div>

  <div class="content-section">
    <h2>Step 1: Download the OTA Bootloader</h2>
    <p>
      The OTA Bootloader for the Seeed Studio SenseCAP Solar Node P1&#8209;Pro can be found at the link below. Download it and take note of where it saves to.
    </p>
    <p>
      <a href="https://github.com/oltaco/Adafruit_nRF52_Bootloader_OTAFIX/releases/download/0.9.2-OTAFIX2.1-BP1.2/update-xiao_nrf52840_ble_bootloader-0.9.2-OTAFIX2.1-BP1.2_nosd.uf2" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download OTA Bootloader (.uf2)</a>
    </p>
  </div>

  <div class="content-section">
    <h2>Step 2: Put the Repeater into DFU Mode and Flash the Bootloader</h2>
    <p>
      Hook up the repeater to a computer and put it into DFU mode by <strong>double-pressing the RST button</strong> (twice within half a second). The device will appear as a flash drive on your computer named <code>XIAO-BOOT</code> and will likely pop up a window with three files:
    </p>
    <ul>
      <li><code>CURRENT.UF2</code></li>
      <li><code>INDEX.HTM</code></li>
      <li><code>INFO_UF2.TXT</code></li>
    </ul>
    <p>
      Keep this window open and open the folder where the OTA bootloader downloaded in another window. Find the file named <code>update-xiao_nrf52840_ble_bootloader-0.9.2-OTAFIX2.1-BP1.2_nosd.uf2</code>, right-click it, and select <strong>Copy</strong>. Go back to the <code>XIAO-BOOT</code> window, right-click on an empty area, and select <strong>Paste</strong>.
    </p>
    <p>
      This will load the new bootloader onto the device and reboot it. The device will exit DFU mode and will no longer appear as a flash drive.
    </p>
  </div>

  <div class="content-section">
    <h2>Step 3: Confirm that the OTA Bootloader was flashed</h2>
    <p>
      Put the device back into DFU mode by <strong>double-pressing the RST button</strong> again. The <code>XIAO-BOOT</code> flash drive should appear with the same three files:
    </p>
    <ul>
      <li><code>CURRENT.UF2</code></li>
      <li><code>INDEX.HTM</code></li>
      <li><code>INFO_UF2.TXT</code></li>
    </ul>
    <p>
      Open the file named <code>INFO_UF2.TXT</code> and check if it has OTAFIX anywhere in the first line like the example below:
    </p>
    <pre><code>UF2 Bootloader 0.9.2-OTAFIX2.1-BP1.2 </code></pre>
    <p>
      Then the flashing process was a success and you now have a safe way to update your repeater's firmware over Bluetooth without having to climb!
    </p>

    <div class="note note-primary">
      <p>If you're setting up a <strong>brand new device</strong>, continue on with the standard process of flashing MeshCore. If you're adding the OTA bootloader to a <strong>repeater already running MeshCore</strong>, you're all set!</p>
    </div>
  </div>

  <div class="content-section">
    <div class="note note-grey">
      <p>A big thank you to <a href="https://github.com/oltaco/Adafruit_nRF52_Bootloader_OTAFIX" target="_blank" rel="noopener noreferrer">oltaco</a> for developing and maintaining the NRF52 OTA Bootloader that makes this possible.</p>
    </div>
  </div>
</div>
