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
</div>
