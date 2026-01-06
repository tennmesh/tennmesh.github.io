---
layout: base.njk
title: Info
description: Learn about TennMesh and MeshCore mesh networking. Understand how it works and why it matters for East Tennessee.
---

<div class="container-narrow">
  <div class="content-section">
    <h1>What is TennMesh?</h1>
    <p>
      TennMesh is a community-built off-grid mesh network in East Tennessee using <a href="https://meshcore.co.uk" target="_blank" rel="noopener">MeshCore</a> to allow for a free, decentralized text messaging network that works without cell towers, internet, or electricity.
    </p>
    <p>
      MeshCore uses LoRa (Long Range) radio technology to create a mesh where repeaters relay messages for others,
      extending the network's reach. Users use handheld companion radios that pair to a phone for easy text messaging back and forth with other users.
    </p>
  </div>

  <div class="content-section">
    <h2>Why Build a Mesh?</h2>

    <div class="card mb-8">
      <h3>Emergency Preparedness</h3>
      <p>
        When disasters knock out power and cell towers, traditional communication fails. While many of us are ham radio operators, not everyone has the time or desire to get licensed. Mesh networks offer a simple, license-free way for friends and family to stay connected when the grid goes down.
      </p>
    </div>

    <div class="card mb-8">
      <h3>Community Resilience</h3>
      <p>
        Build stronger connections with your neighbors. A mesh network is owned and operated by the community,
        not by corporations. It's communication infrastructure we control together.
      </p>
    </div>

    <div class="card mb-8">
      <h3>A Fun New Hobby</h3>
      <p>
        Mesh communication has also grown into its own hobby, much like ham radio. People aren’t just using it; they’re experimenting with antennas, building solar nodes, and helping expand coverage for their local communities. It’s a new kind of radio culture, built around curiosity, tinkering, and collaboration.
      </p>
    </div>

    <div class="info-box">
      <p style="margin: 0;">
        <strong>Remember:</strong> This is a complement to, not a replacement for, traditional emergency services.
        In a real emergency, always call 911 when possible.
      </p>
    </div>
  </div>

  <div class="content-section">
    <h2>How Does It Work?</h2>

    <h3>The Technology</h3>
    <p>
      The MeshCore devices TennMesh uses use LoRa mesh radio technology operating in the 902-928 MHz band (ISM band, license-free in the US (Under 1W)).
      MeshCore is the open-source firmware that runs on these small, inexpensive LoRa mesh radio devices.
    </p>


    <h3 class="mt-8">The Network</h3>
    <p>
      Handheld mesh radio devices called "companions" pair to your phone using a Bluetooth connection. Your phone with the MeshCore app communicates with the radio device over Bluetooth to get you connected to the mesh where you send text messages back and forth with friends, family, and other users in the community.
      Repeater devices listen for messages and and pass them along by rebroadcasting them for others to receive.
      When you send a message, it hops from repeater to repeater until it reaches its destination. The more repeaters stretched out over an area, the stronger and more reliable the network becomes.
    </p>

    <h4 class="mt-8">Direct Communication Example</h4>
    <p>
      A direct message between two nearby users works like this:
      You type a message in the MeshCore app and tap send -> Your phone passes the message to your mesh radio via Bluetooth -> Mesh radio broadcasts it over the air -> The other person's mesh radio receives it -> forwards it to their phone via Bluetooth -> The message appears in their MeshCore app
    </p>

    <img src="/assets/images/Direct.png" alt="Direct communication flow diagram showing message path between two users" class="mt-8" style="max-width: 100%; height: auto; border-radius: var(--radius-lg); border: 1px solid var(--color-border);" />

    <h4 class="mt-8">Repeater Communication Example</h4>
    <p>
      When users are too far apart for direct communication, repeater nodes relay messages across the network. Here's how a message travels through multiple repeaters:
      You type a message in the MeshCore app and tap send -> Your phone passes the message to your mesh radio via Bluetooth -> Your mesh radio broadcasts it over the air -> Repeater 1 receives and rebroadcasts the message -> Repeater 2 receives and rebroadcasts -> Repeater 3 receives and rebroadcasts -> The recipient's mesh radio receives it -> forwards it to their phone via Bluetooth -> The message appears in their MeshCore app
    </p>

    <img src="/assets/images/Repeaters.png" alt="Repeater communication flow diagram showing message hopping through multiple solar repeaters" class="mt-8" style="max-width: 100%; height: auto; border-radius: var(--radius-lg); border: 1px solid var(--color-border);" />

    <div class="video-wrapper mt-8">
      <iframe
        src="https://www.youtube.com/embed/iaFltojJrAc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <div class="content-section">
    <h2>What Can It Do?</h2>

    <div class="feature-grid">
      <div class="feature-card">
        <h3>Public Channel</h3>
        <p>Broadcast messages to everyone on the network. Great for announcements, community coordination, and general chatting with your local community.</p>
      </div>
      <div class="feature-card">
        <h3>Private Channels</h3>
        <p>Encrypted group channels for teams, neighborhoods, specific communities, or your friends and family.</p>
      </div>
      <div class="feature-card">
        <h3>Direct Messages</h3>
        <p>One-on-one encrypted messaging between any two devices on the network.</p>
      </div>
      <div class="feature-card">
        <h3>Hashtag Channels</h3>
        <p>Create specific public channels for certain topics your interested in or for region specific communications</p>
      </div>
    </div>
  </div>

  <div class="content-section">
    <h2>Coverage Area</h2>
    <p>
      Our network is growing across East Tennessee. Range depends on terrain, antenna height, and the number of nodes,
      but typical line-of-sight range is 3-10 miles between devices. In mountainous areas, elevation helps significantly.
    </p>
    <p>
      Interested in helping expand coverage? <a href="/connect/">Get connected</a> and add a node in your area!
    </p>
  </div>

  <div class="content-section">
    <h2>MeshCore vs Meshtastic</h2>
    <p>
      Both MeshCore and Meshtastic are LoRa mesh networking platforms. However, they use
      different protocols and cannot communicate with each other directly.
    </p>
    <p>
      TennMesh chose MeshCore for its more off-grid and radio focused approach, active community, and focus on cutting down on radio transmissions.
      If you're already using Meshtastic, that's great too! Many of us are still fans of Mestastic, especially for more ad-hoc mobile meshes while traveling to events or hiking where there is no current mesh infrastructure.
    </p>
  </div>

  <div class="text-center py-12">
    <h2>Ready to Join?</h2>
    <p>Get started with TennMesh in just a few steps.</p>
    <a href="/connect/" class="btn btn-primary btn-large">Get Connected</a>
  </div>
</div>
