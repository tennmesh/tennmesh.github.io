---
layout: base.njk
title: Get Connected
description: Join TennMesh in four easy steps. Get a device, configure settings, and start messaging on the mesh network.
---

<div class="container-narrow">
  <div class="content-section">
    <h1>Get Connected to TennMesh</h1>
    <p>
      Joining in and communicating with the mesh is easy! Follow these steps to get your device set up and communicating on the mesh network.
    </p>
  </div>

  <div class="content-section">
    <h2>Step 1a: Get a Companion Device</h2>
    <p>
      To get started, you’ll need a portable mesh radio that runs MeshCore firmware. Pre-built devices typically cost between $30 and $100 and pair to your phone over Bluetooth, letting you send and receive texts in the MeshCore app. These radios are called Companions, and we’ve listed a few beginner-friendly recommendations below.
    </p>

    <h3>Recommended Companion Device Options</h3>
    <div class="card mb-8">
      <h4>Seeed Studio Wio Tracker L1 Pro</h4>
      <p>
        This is a great option for most people starting out. It's well-supported, reasonably priced, and includes
        an antenna and battery.
      </p>
      <p>
        <strong>Where to buy:</strong> <a href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener">Seeed Studio</a>
      </p>
    </div>

    <div class="card mb-8">
      <h4>RAK WisMesh Tag</h4>
      <p>
        This is another great option for people starting out who venture out in the outdoors a lot. This device is a pocket-sized mesh radio in a card form factor that is durable and waterproof with an IP66 rating.
      </p>
      <p>
        <strong>Where to buy:</strong> <a href="https://store.rokland.com/products/wismesh-tag-from-rakwireless-mokosmart-meshtastic-compatible-card-sized-node-us915-mhz" target="_blank" rel="noopener">Rokland</a>
      </p>
    </div>

    <div class="card mb-8">
      <h4>SenseCAP T1000-E Card Tracker</h4>
      <p>
        This device is another pocket-sized mesh radio in a card form factor that is durable and ready for the outdoors with an IP65 rating. This one is a little smaller than the WisMesh Tag with a smaller pricetag as well. The smaller size means a smaller battery however, but you still get multiple days of general use with it.
      </p>
      <p>
        <strong>Where to buy:</strong> <a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank" rel="noopener">Seeed Studio</a>
      </p>
    </div>

    <div class="info-box">
      <p style="margin: 0;">
        <strong>Not sure what to buy?</strong> Check out our <a href="/devices/">Devices page</a> for detailed
        recommendations, DIY options, and solar-powered repeater builds.
      </p>
    </div>
  </div>

  <div class="content-section">
    <h2>Step 1b: Get a Solar repeater</h2>
    <p>
      If you just have a companion device and you're a bit out of range from others, you may need a device somewhere high up and outdoors acting as a repeater. There is currently a great solar powered option for repeaters thats easy to setup and use. See our recommendation below for this.
    </p>

    <h3>Recommended Solar Repeater</h3>
    <div class="card mb-8">
      <h4>SenseCAP Solar Node P1-Pro</h4>
      <p>
        This is a great option for an outdoor solar mesh repeater. It's easy to put together and then it's just a matter of mounting it outside with the solar panel facing the sun and it will help extend your range as well as help other mesh users within range of your repeater.
      </p>
      <p>
        <strong>Where to buy:</strong> <a href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank" rel="noopener">Seeed Studio</a>
      </p>
    </div>

    <div class="info-box">
      <p style="margin: 0;">
        <strong>Not sure what to buy?</strong> Check out our <a href="/devices/">Devices page</a> for detailed
        recommendations, DIY options, and solar-powered repeater builds.
      </p>
    </div>
  </div>


  <div class="content-section">
    <h2>Step 2: Flash Your Device</h2>
    <div class="info-box">
      <p style="margin: 0;">
        <strong>Note:</strong> To flash your device, you must use a Chromium-based browser such as Google Chrome or Microsoft Edge.
      </p>
    </div>

    <h3 class="mt-8">Open the Web Flasher</h3>
    <p>
      Go to: <a href="https://flasher.meshcore.co.uk" target="_blank" rel="noopener">https://flasher.meshcore.co.uk</a>
    </p>
    <p>
      From the device list, select your specific radio model.
    </p>
    <p>
      On the next page, choose <strong>Companion Bluetooth</strong> as the firmware type.
    </p>

    <h3 class="mt-8">Enter DFU Mode</h3>
    <ol>
      <li>Click <strong>Enter DFU Mode</strong>. A device-selection window will appear.</li>
      <li>Plug your MeshCore device into your computer using a USB cable.</li>
      <li>When a new device appears in the list, select it and click <strong>Connect</strong>.</li>
      <li>Wait until the button changes to <strong>DFU Mode Active</strong>.</li>
    </ol>

    <h3 class="mt-8">Erase Flash</h3>
    <p>
      Click <strong>Erase Flash</strong>. This wipes any existing firmware and prepares the device for MeshCore.
    </p>
    <p>
      Wait until the erase process completes.
    </p>

    <h3 class="mt-8">Flash Firmware</h3>
    <p>
      Click <strong>Flash</strong> to install the MeshCore firmware.
    </p>
    <p>
      When flashing completes, your device is ready to be paired.
    </p>
  </div>

  <div class="content-section">
    <h2>Step 3: Pair and Configure Your Device</h2>

    <h3>Pair with Phone</h3>
    <ol>
      <li>Open the MeshCore app on your phone.</li>
      <li>Tap <strong>Connect</strong> in the top-right corner.</li>
      <li>Select your MeshCore device from the list.</li>
      <li>When prompted for the Bluetooth PIN:
        <ul>
          <li>If the device has a screen → use the PIN shown on the device.</li>
          <li>If the device has no screen → enter <code>123456</code>.</li>
        </ul>
      </li>
    </ol>
    <p>
      Your device should now be paired and connected.
    </p>

    <h3 class="mt-8">Configure Basic Settings</h3>
    <p>
      Tap the <strong>gear icon</strong> in the top-right corner.
    </p>

    <h4 class="mt-8">Set Device Name</h4>
    <p>
      In the <strong>Public Info</strong> section, enter a name for your device (callsign, handle, or anything you like).
    </p>

    <h4 class="mt-8">Set Radio Preset</h4>
    <ol>
      <li>Scroll to the <strong>Radio Settings</strong> section.</li>
      <li>Tap <strong>Choose Preset</strong>.</li>
      <li>Select <strong>USA Canada Recommended</strong> from the list.</li>
    </ol>

    <h4 class="mt-8">Save Settings</h4>
    <ol>
      <li>Tap the <strong>checkmark</strong> in the top-right corner to save.</li>
      <li>Tap <strong>Back</strong> to return to the main screen.</li>
    </ol>

    <h3 class="mt-8">Say Hello to the Mesh</h3>
    <ol>
      <li>Tap <strong>Channels</strong> at the bottom of the app.</li>
      <li>Open the <strong>Public</strong> channel and send a message.</li>
      <li>Check your message status:
        <ul>
          <li>You may see <strong>Heard 1 Repeat</strong>, <strong>Heard 2 Repeats</strong>, etc.</li>
          <li>This shows how many repeaters received and rebroadcast your message.</li>
        </ul>
      </li>
    </ol>
    <p>
      Your MeshCore device is now live and talking on the mesh.
    </p>
  </div>

  <div class="content-section">
    <h2>Step 4 (Optional): Flash and Configure a MeshCore Repeater</h2>
    <p>
      <strong>This step is optional and only for those who are setting up a repeater device.</strong> If you've completed Steps 1-3 with a companion device, you're all set to use the mesh!
    </p>
    <p>
      These steps are for setting up a device to run Repeater firmware.
    </p>

    <h3>Flash Repeater Firmware</h3>
    <p>
      Open a Chromium-based browser such as Chrome or Edge.
    </p>
    <p>
      Go to: <a href="https://flasher.meshcore.co.uk" target="_blank" rel="noopener">https://flasher.meshcore.co.uk</a>
    </p>
    <p>
      Select your device model from the list.
    </p>
    <p>
      On the next page, choose <strong>Repeater</strong> as the firmware type.
    </p>

    <h3 class="mt-8">Enter DFU Mode</h3>
    <ol>
      <li>Click <strong>Enter DFU Mode</strong>.</li>
      <li>Plug your device into your computer using a USB cable.</li>
      <li>When the new device appears, select it and click <strong>Connect</strong>.</li>
      <li>Wait for the button to change to <strong>DFU Mode Active</strong>.</li>
    </ol>

    <h3 class="mt-8">Erase and Flash</h3>
    <ol>
      <li>Click <strong>Erase Flash</strong> and wait for it to finish.</li>
      <li>Click <strong>Flash</strong> to install the repeater firmware.</li>
      <li>When flashing is complete, leave the device connected.</li>
    </ol>

    <h3 class="mt-8">Configure the Repeater</h3>
    <p>
      Open: <a href="https://config.meshcore.dev" target="_blank" rel="noopener">https://config.meshcore.dev</a>
    </p>
    <ol>
      <li>Click <strong>Connect</strong> in the top-right corner.</li>
      <li>Select your repeater device and click <strong>Connect</strong>.</li>
    </ol>

    <h4 class="mt-8">Set Device Name</h4>
    <p>
      Enter a name for your repeater (callsign, location, or anything descriptive).
    </p>

    <h4 class="mt-8">Set Location</h4>
    <p>
      Set the <strong>Latitude</strong> and <strong>Longitude</strong>.
    </p>
    <ul>
      <li>You may enter coordinates manually, or</li>
      <li>Click the map button and choose a spot.</li>
    </ul>
    <div class="info-box mt-4">
      <p style="margin: 0;">
        <strong>Tip:</strong> If you don't want your exact home location shown, choose a nearby park, airport, or general area.
      </p>
    </div>

    <h4 class="mt-8">Access Settings</h4>
    <p><strong>Guest Password</strong></p>
    <p>
      Optional. Leave blank unless you want others to view status info like battery level.
    </p>
    <p><strong>Admin Password</strong></p>
    <p>
      Required. Enter the password you'll use to manage the repeater remotely.
    </p>

    <h4 class="mt-8">Radio Settings</h4>
    <p>
      Set <strong>Preset</strong> to: <code>USA Canada Recommended</code>
    </p>
    <p>
      Set <strong>Coding Rate</strong> to: <code>8</code>
    </p>
    <p>
      Leave all other values unchanged:
    </p>
    <ul>
      <li><strong>Frequency:</strong> 910.525</li>
      <li><strong>Bandwidth:</strong> 62.5</li>
      <li><strong>Spreading Factor:</strong> 7</li>
    </ul>

    <h3 class="mt-8">Save and Reboot</h3>
    <p>
      Click <strong>Save Settings</strong>.
    </p>
    <p>
      Your repeater will reboot automatically and come online.
    </p>
  </div>

  <div class="content-section">
    <h2>Need Help?</h2>
    <p class="text-center">
      Getting started with mesh networking can be confusing at first. Don't hesitate to ask for help! Connect with the TennMesh community for support, tips, and troubleshooting.
    </p>
    <div style="display: flex; justify-content: center; margin-top: var(--space-8);">
      <div class="cta-buttons">
        <a href="https://discord.gg/XGhftQw9Mt" class="btn btn-primary btn-large" target="_blank" rel="noopener">Join Our Discord</a>
        <a href="https://t.me/+ny3SblBJ8rVjMWIx" class="btn btn-secondary btn-large" target="_blank" rel="noopener">Join Our Telegram</a>
        <a href="https://www.facebook.com/groups/877766108102231" class="btn btn-secondary btn-large" target="_blank" rel="noopener">Join Our Facebook Group</a>
      </div>
    </div>
  </div>

</div>
