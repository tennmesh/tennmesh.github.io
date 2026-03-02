---
layout: base.njk
title: Settings
description: Recommended MeshCore settings for TennMesh nodes, repeaters, and companions.
---

<div class="container-narrow">
  <div class="content-section">
    <h1>Recommended Settings</h1>
    <p>
      These are the recommended MeshCore settings for TennMesh to help keep the network stable, efficient, and easy to join. These values are designed to reduce unnecessary airtime, improve reliability, and maintain compatibility across the mesh. Whether you're setting up a new companion or configuring a repeater, use the guidance below to ensure your device works seamlessly with the rest of the TennMesh network.
    </p>
  </div>

  <div class="content-section">
    <div class="note"><p><strong>Note:</strong> Start by selecting the <strong>USA/Canada (Recommended)</strong> preset, and then only change the Coding Rate as desired. When the Coding Rate is changed, the preset will then say "Custom" instead of USA/Canada. This is normal.</p></div>
    <div class="info-box mb-8">
      <h3>Companion Settings</h3>
      <dl>
        <dt>Preset</dt>
        <dd>USA/Canada (Recommended)</dd>
        <dt>Frequency</dt>
        <dd>910.525 MHz</dd>
        <dt>Bandwidth</dt>
        <dd>62.5 kHz</dd>
        <dt>Spread Factor</dt>
        <dd>7</dd>
        <dt>Coding Rate</dt>
        <dd>5 or 8 for weak signals</dd>
      </dl>
    </div>

    <div class="info-box">
      <h3>Repeater Settings</h3>
      <dl>
        <dt>Preset</dt>
        <dd>USA/Canada (Recommended)</dd>
        <dt>Frequency</dt>
        <dd>910.525 MHz</dd>
        <dt>Bandwidth</dt>
        <dd>62.5 kHz</dd>
        <dt>Spread Factor</dt>
        <dd>7</dd>
        <dt>Coding Rate</dt>
        <dd>8</dd>
      </dl>
    </div>
  </div>

  <div class="content-section">
    <h2>Advert Interval Settings</h2>
    <p>
      Since we've seen a rapid increase in growth, we're now dialing back the recommended advert settings for East TN where we're starting to see congestion.
    </p>

    <div class="info-box mb-8">
      <h3>East TN Repeater Advert Intervals</h3>
      <dl>
        <dt>Zero Hop</dt>
        <dd>120 Minutes</dd>
        <dt>Flood</dt>
        <dd>12 hours</dd>
      </dl>
    </div>

    <div class="info-box mb-8">
      <h3>Middle TN Repeater Advert Intervals</h3>
      <dl>
        <dt>Zero Hop</dt>
        <dd>60 Minutes</dd>
        <dt>Flood</dt>
        <dd>3 hours</dd>
      </dl>
    </div>

    <div class="info-box">
      <h3>West TN Repeater Advert Intervals</h3>
      <dl>
        <dt>Zero Hop</dt>
        <dd>60 Minutes</dd>
        <dt>Flood</dt>
        <dd>3 hours</dd>
      </dl>
    </div>
  </div>

  <div class="content-section">
    <h2>Repeater TX Delay Settings</h2>
    <p>
      This section is for the repeater transmission delay settings along with some additional recommended settings. The goal of these settings is simple: <strong>repeaters that hear more neighbors should wait longer before transmitting.</strong> This lets nearby repeaters serve their local areas first, reduces on-air collisions, and keeps packets flowing.
    </p>
    <p>
      If your repeater was just deployed, wait a few days for your repeater to collect data on how many neighbors it has, then use the specfic settings based on your neighbor count below.
    </p>

    <table class="settings-table">
      <thead>
        <tr>
          <th>Neighbors</th>
          <th>txdelay</th>
          <th>direct.txdelay</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>0–1</td><td>0.3</td><td>0.1</td></tr>
        <tr><td>2–4</td><td>0.5</td><td>0.3</td></tr>
        <tr><td>5–9</td><td>1.0</td><td>0.5</td></tr>
        <tr><td>10–14</td><td>1.5</td><td>1.0</td></tr>
        <tr><td>15+</td><td>2.0</td><td>2.0</td></tr>
      </tbody>
    </table>

    <p>
      Each section below will have a command with a copy button to the right. These are to be copied and pasted into the <strong>Command Line</strong> tab in the MeshCore app after remotely logging into as an admin on the repeater you're managing.
    </p>

    <div class="info-box mb-8">
      <h3>Common Settings (all repeaters)</h3>
      <p style="margin-top:0;margin-bottom:var(--space-4);font-size:0.9rem;color:var(--color-text-muted);">These settings are recommended for all repeaters, regardless of neighbor count.</p>
      <pre><code>set agc.reset.interval 4
set multi.acks 1
set rxdelay 3</code></pre>
    </div>

    <div class="info-box mb-8">
      <h3>Neighbor Count: 0–1</h3>
      <pre><code>set txdelay 0.3
set direct.txdelay 0.1
set agc.reset.interval 4
set multi.acks 1
set rxdelay 3</code></pre>
    </div>

    <div class="info-box mb-8">
      <h3>Neighbor Count: 2–4</h3>
      <pre><code>set txdelay 0.5
set direct.txdelay 0.3
set agc.reset.interval 4
set multi.acks 1
set rxdelay 3</code></pre>
    </div>

    <div class="info-box mb-8">
      <h3>Neighbor Count: 5–9</h3>
      <pre><code>set txdelay 1
set direct.txdelay 0.5
set agc.reset.interval 4
set multi.acks 1
set rxdelay 3</code></pre>
    </div>

    <div class="info-box mb-8">
      <h3>Neighbor Count: 10–14</h3>
      <pre><code>set txdelay 1.5
set direct.txdelay 1
set agc.reset.interval 4
set multi.acks 1
set rxdelay 3</code></pre>
    </div>

    <div class="info-box">
      <h3>Neighbor Count: 15+</h3>
      <pre><code>set txdelay 2
set direct.txdelay 2
set agc.reset.interval 4
set multi.acks 1
set rxdelay 3</code></pre>
    </div>
  </div>
</div>
