---
layout: base.njk
title: Flashing MeshCore to the P1-Pro
description: How to flash MeshCore firmware onto the Seeed Studio SenseCAP Solar Node P1-Pro.
---

<div class="container-narrow">
  <div class="howto-breadcrumb">
    <a href="/howtos/sensecap-p1-pro/">&larr; Back to SenseCAP P1-Pro How-Tos</a>
  </div>

  <div class="content-section" style="padding-bottom: 0">
    <div class="howto-page-header">
      <span class="howto-tag howto-tag--firmware">Firmware</span>
      <h1>Flashing MeshCore to the P1-Pro</h1>
      <p class="howto-intro">Follow the instructions below to flash MeshCore to your Seeed Studio P1-Pro.</p>
    </div>
  </div>

  <div class="content-section" style="padding-top: var(--space-6)">
    <p>
      Since the Seeed Studio is an NRF52-based device, there are two ways you can flash MeshCore to it. One way is flashing via the web browser, and the other way is making your device appear as a flash drive and placing the firmware files on it.
    </p>
    <div class="howto-method-links">
      <a href="#method-1" class="btn btn-secondary">Method 1: Web Browser</a>
      <a href="#method-2" class="btn btn-secondary">Method 2: File Transfer</a>
    </div>
  </div>

  <div class="content-section">
    <h2 id="method-1">Method 1: Flashing via Web Browser</h2>

    <h3>Step 1: Go to the Flasher Page</h3>
    <div class="note">
      <p>This only works on Chromium-based web browsers, like Google Chrome, Brave, or if you're on a recent version of Windows, you already have one called Microsoft Edge.</p>
    </div>
    <p>Open your web browser and go to the webflasher webpage at <a href="https://flasher.meshcore.co.uk" target="_blank" rel="noopener noreferrer">flasher.meshcore.co.uk</a>.</p>

    <h3>Step 2: Find and Select Your Device</h3>
    <p>
      Find your device on the list by scrolling through the list and looking for "Seeed Studio SenseCAP Solar" or you can quickly find this by typing in "SenseCAP Solar" in the "Filter box". Select the "Seeed Studio SenseCAP Solar" option to go to the next page.
    </p>

    <h3>Step 3: Select Firmware Type</h3>
    <p>
      While the P1-Pro can be flashed as a Companion, Room Server, or Repeater, we're going to be flashing it as a repeater, so select "Repeater" from the list of options.
    </p>

    <h3>Step 4: Enter DFU Mode</h3>
    <p>
      Put the device into DFU mode by clicking the "Enter DFU mode" button on this page. After clicking that, a window will appear which will allow you to select your device. With this window open, go ahead and plug your Seeed Studio SenseCAP Solar Node P1&#8209;Pro into your computer. Take note of the device that appears in the window. This will be your device. Select it and click on the Connect button. Wait for the "Enter DFU mode" button we clicked earlier to say "DFU mode active" and then continue.
    </p>

    <h3>Step 5: Erase Flash</h3>
    <p>
      Since the Seeed Studio SenseCAP Solar Node P1&#8209;Pro comes pre-loaded with Meshtastic, it will need to be erased so we can load MeshCore onto it. Do this by hitting the "Erase Flash" button. The same small window from earlier will pop up again where you select your device from the list. Its name may be different from what we saw earlier and may be named "XIAO nRF52840" now. Select that and click on "Connect". It should now start the erase process and when it reaches 100%, a window should pop up saying that you can flash MeshCore now at the bottom. Hit OK on this window. If you have something that says it failed, try step 5 again.
    </p>

    <h3>Step 6: Flash MeshCore</h3>
    <p>
      Now we're ready to flash MeshCore and can do so by clicking on the "Flash" button. The same small window from earlier will pop up again where you select your device from the list. Select the device and hit "Connect". It will now begin flashing your device with a progress bar across the screen. When it's done, you'll see "Flashing complete!"
    </p>
    <div class="note">
      <p>If you get a message saying it failed, click on the "Retry" button, then hit "Flash", select your device from the list, and click Connect. It generally works the second time around. If you continue to have issues, try following the steps for Method 2 below.</p>
    </div>
    <p>
      After seeing "Flashing Complete!" your Seeed Studio SenseCAP Solar Node P1&#8209;Pro has the Repeater firmware loaded onto it and we're ready to configure it. Click on the "Configure via USB" button on the page and follow along with our "Repeater Configuration" Tutorial at the following link — <em>link will be added here when ready</em>.
    </p>
  </div>

  <div class="content-section">
    <h2 id="method-2">Method 2: Flashing via File Transfer</h2>
    <p>
      Another way to flash NRF52-based devices like the Seeed Studio SenseCAP Solar Node P1&#8209;Pro is to put the device into DFU mode while connected to a computer and placing the firmware files on the flash drive that appears. This is great for those who have issues flashing using a web browser as shown in Method 1 or for those that want a quick way to flash multiple devices without having to go to the flasher page. Follow the simple steps below.
    </p>

    <h3>Step 1: Go to the Flasher Page</h3>
    <p>Open your web browser and go to the webflasher webpage at <a href="https://flasher.meshcore.co.uk" target="_blank" rel="noopener noreferrer">flasher.meshcore.co.uk</a>.</p>

    <h3>Step 2: Find and Select Your Device</h3>
    <p>
      Find your device on the list by scrolling through the list and looking for "Seeed Studio SenseCAP Solar" or you can quickly find this by typing in "SenseCAP Solar" in the "Filter box". Select the "Seeed Studio SenseCAP Solar" option to go to the next page.
    </p>

    <h3>Step 3: Select Firmware Type</h3>
    <p>
      While the P1-Pro can be flashed as a Companion, Room Server, or Repeater, we're going to be flashing it as a repeater, so select "Repeater" from the list of options.
    </p>

    <h3>Step 4: Download the Files</h3>
    <p>
      You'll notice a "Download" button on the bottom right of the page here. If we click on that, we'll see there are 3 files available for download. One will be a <code>.zip</code> file and the other two will be <code>.uf2</code> files. We want to ignore the <code>.zip</code> file and download the two <code>.uf2</code> files. Click on the first <code>.uf2</code> file which will start with <code>SenseCap_Solar_repeater-.....</code> The zip file also starts with this, so be sure to select the file ending with <code>.uf2</code>. Save this to a location of your choice.
    </p>
    <div class="note note-grey">
      <p>To keep things organized, consider placing these files in a folder called <code>P1-Pro-repeater</code>.</p>
    </div>
    <p>
      Now we can download the second file, which will start with <code>FLASH_ERASE.....</code> and save this to a location of your choice.
    </p>

    <h3>Step 5: Flash the Erase File</h3>
    <p>
      Since the Seeed Studio SenseCAP Solar Node P1&#8209;Pro comes pre-loaded with Meshtastic, it will need to be erased so we can load MeshCore onto it. To do this, hook up the device to the computer via a USB cable and put it into DFU mode by double-pressing the RST (center black button) quickly (twice within 0.5 seconds). The device should go into DFU mode and will appear as a flash drive named <code>XIAO Boot</code> with 3 files on it:
    </p>
    <ul>
      <li><code>CURRENT.UF2</code></li>
      <li><code>INDEX.HTM</code></li>
      <li><code>INFO_UF2.TXT</code></li>
    </ul>
    <p>
      Keep this window open and open up the folder where the files were just downloaded to in another window. Find the file name starting with <code>FLASH_ERASE.....</code>, right-click on it and select <strong>Copy</strong>. Now go back to the window that popped up with the 3 files, right-click on an empty area there and select <strong>Paste</strong>. This will erase Meshtastic from the device and make it ready to flash MeshCore. When the process is complete, the device should go back into DFU mode automatically and will appear as a flash drive named <code>XIAO Boot</code> again.
    </p>

    <h3>Step 6: Flash the MeshCore Repeater Firmware</h3>
    <p>
      Similar to what we did in the previous step, we need to go to the folder with the files we downloaded earlier and select the file name starting with <code>SenseCap_Solar_repeater-.....</code>, right-click on it and select <strong>Copy</strong>. Now go back to the window that popped up with the 3 files, right-click on an empty area there and select <strong>Paste</strong>. This will flash the MeshCore repeater firmware to your Seeed Studio SenseCAP Solar Node P1&#8209;Pro.
    </p>
    <p>
      And that's it! The next step will be to configure your repeater by following the steps in our "Repeater Configuration" Tutorial at the following link — <em>link will be added here when ready</em>.
    </p>
  </div>
</div>
