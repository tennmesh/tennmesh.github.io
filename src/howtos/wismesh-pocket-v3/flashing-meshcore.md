---
layout: base.njk
title: Flashing MeshCore to the WisMesh Pocket V3
description: How to flash MeshCore companion firmware onto the RAKwireless WisMesh Pocket V3.
---

<div class="container-narrow">
  <div class="howto-breadcrumb">
    <a href="/howtos/wismesh-pocket-v3/">&larr; Back to WisMesh Pocket V3 How-Tos</a>
  </div>

  <div class="content-section" style="padding-bottom: 0">
    <div class="howto-page-header">
      <span class="howto-tag howto-tag--firmware">Firmware</span>
      <h1>Flashing MeshCore to the WisMesh Pocket V3</h1>
      <p class="howto-intro">Follow the instructions below to flash MeshCore to your WisMesh Pocket V3.</p>
    </div>
  </div>

  <div class="content-section" style="padding-top: var(--space-6)">
    <h2>Why This Guide?</h2>
    <p>
      The WisMesh Pocket V3 uses a different display driver than earlier versions, so firmware that supports it isn't available on the official <a href="https://flasher.meshcore.io/" target="_blank" rel="noopener noreferrer">MeshCore flasher</a> yet. Support is expected there soon.
    </p>
    <p>
      If you don't want to wait, follow the instructions below. They use a firmware file that includes the new display driver for the V3.
    </p>
  </div>

  <div class="content-section">
    <h2>Step-by-Step Instructions</h2>
    <ol>
      <li><strong>Connect your device</strong> to your computer using a USB data cable.</li>
      <li>
        Download the FLASH_ERASE file and take note of where it was saved.<br>
        <a href="https://flasher.meshcore.io/firmware/FLASH_ERASE_nrf52_softdevice_v6.uf2" class="btn btn-secondary">Download FLASH_ERASE (.uf2)</a>
      </li>
      <li>
        Download the firmware file and take note of where it was saved.<br>
        <a href="/assets/firmware/RAK_4631_companion_radio_ble-PR3651.uf2" class="btn btn-secondary" download>Download Firmware (.uf2)</a>
      </li>
      <li><strong>Quickly double-press the reset button</strong> (twice within about half a second) to enter DFU mode.</li>
      <li>Look for a new USB drive appearing on your computer. It may be named after your board.</li>
      <li>Copy or drag the downloaded <code>FLASH_ERASE_nrf52_softdevice_v6.uf2</code> file onto that drive.</li>
      <li>Wait for the device to reboot automatically. Do not disconnect it while the file is being copied.</li>
      <li>After the device has rebooted, <strong>quickly double-press the reset button</strong> (twice within about half a second) to enter DFU mode again.</li>
      <li>Copy or drag the downloaded <code>RAK_4631_companion_radio_ble-PR3651.uf2</code> file onto that drive.</li>
      <li>Enjoy MeshCore on your WisMesh Pocket V3!</li>
    </ol>
  </div>
</div>
