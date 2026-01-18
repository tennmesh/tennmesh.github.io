---
layout: base.njk
title: Home
description: An off-grid text based communications network in Tennessee based on license-free LoRa radios. Text with others in the community without the need for internet or power from the grid.
---
<!-- Force rebuild -->

<section class="hero">
  <img src="/assets/images/tennmesh-primary-dark-even.png" alt="TennMesh" class="hero-logo">
  <p class="tagline">Built for the community, by the community, TennMesh is an off-grid text messaging network across East Tennessee. Using license-free LoRa radios, members can communicate with others in the mesh with no internet, no cell service, and no grid power required..</p>
  <p class="sub">Decentralized / Off-Grid / Community-powered</p>
  <div class="cta-buttons">
    <a href="/connect/" class="btn btn-primary btn-large">Get Connected</a>
    <a href="/info/" class="btn btn-secondary btn-large">Learn More</a>
  </div>
</section>

<div class="container">
  <section class="content-section">
    <h2>How It Works</h2>
    <div class="steps">
      <div class="step">
        <span class="step-number">1</span>
        <h3>Get a Radio</h3>
        <p>LoRa mesh devices start around $30-100. Check out our <a href="/devices/">recommended devices</a> to get started.</p>
      </div>
      <div class="step">
        <span class="step-number">2</span>
        <h3>Install & Configure</h3>
        <p>Flash MeshCore firmware and apply our local settings. Just takes about 10 minutes with our <a href="/connect/">setup guide</a>.</p>
      </div>
      <div class="step">
        <span class="step-number">3</span>
        <h3>Start Messaging</h3>
        <p>Connect via Bluetooth to your phone and you're ready. Works anywhere within mesh range.</p>
      </div>
    </div>


  <section class="content-section">
    <h2>What We Do</h2>
    <div class="container-narrow">
      <p class="text-center">
        TennMesh is a community-built mesh network in East Tennessee using MeshCore.
        This community network offers text messaging that works without cell towers, internet, or electricity from the grid. All that's needed is an inexpensive mesh radio to communicate with others in range.
        Our network is designed for emergency preparedness, community building, and resilient communication.
      </p>
    </div>

    <div class="feature-grid mt-8">
      <div class="feature-card">
        <h3>Emergency Ready</h3>
        <p>Communication that works when traditional networks fail. No power or internet needed.</p>
      </div>
      <div class="feature-card">
        <h3>Community Owned</h3>
        <p>Built and maintained by local volunteers. NO corporations, NO subscriptions.</p>
      </div>
      <div class="feature-card">
        <h3>Private Messaging</h3>
        <p>Talk to the community on the Public channel or friends & familiy on your own Private channel.</p>
      </div>
    </div>
  </section>

  <section class="content-section">
    <h2>Get In Touch</h2>
    <div class="container-narrow">
      <p class="text-center">
        Have questions? Want to connect with other mesh enthusiasts in Tennessee? Join our community channels to learn more, get help, and stay updated.
      </p>
      <div style="display: flex; justify-content: center; margin-top: var(--space-8);">
        <div class="cta-buttons">
          <a href="https://discord.gg/XGhftQw9Mt" class="btn btn-primary btn-large" target="_blank" rel="noopener">Join Our Discord</a>
          <a href="https://t.me/+ny3SblBJ8rVjMWIx" class="btn btn-secondary btn-large" target="_blank" rel="noopener">Join Our Telegram</a>
          <a href="https://www.facebook.com/groups/877766108102231" class="btn btn-secondary btn-large" target="_blank" rel="noopener">Join Our Facebook Group</a>
        </div>
      </div>
    </div>
  </section>

  <section class="content-section">
    <h2>TennMesh MeshCore Settings</h2>
    <div class="container-narrow">
      <div class="info-box">
        <h3>Companion Device Settings</h3>
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

      <div class="info-box mt-8">
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

      <div class="text-center mt-8">
        <a href="https://flasher.meshcore.co.uk" class="btn btn-primary" target="_blank" rel="noopener">Flash Your Device →</a>
      </div>
    </div>
  </section>
</div>
