---
layout: base.njk
title: Why You Should Switch to 2-Byte Path Hashes in MeshCore (And How Easy It Is)
description: As TennMesh has grown beyond 256 nodes, the default 1-byte path hash is causing collisions. Here's why switching to 2-byte mode matters and exactly how to do it.
date: 2026-03-28
---

<div class="container-narrow">
  <div class="howto-breadcrumb">
    <a href="/blog/">&larr; Back to Blog</a>
  </div>

  <div class="content-section" style="padding-bottom: 0">
    <div class="blog-post-header">
      <span class="howto-tag howto-tag--config">Network</span>
      <h1>Why You Should Switch to 2-Byte Path Hashes in MeshCore (And How Easy It Is)</h1>
      <p class="blog-post-meta">March 28, 2026</p>
      <p class="howto-intro">As TennMesh has grown beyond 256 nodes, the default 1-byte path hash is causing collisions. Here's why it matters and exactly how to fix it.</p>
    </div>
  </div>

  <div class="content-section blog-post-content" style="padding-top: var(--space-6)">
    <p>
      If you're part of the TennMesh MeshCore network, then you already know how quickly the mesh has grown in just a few months and it's been exciting to see more reliable communications throughout East Tennessee and beyond! However, being on such a large and rapidly growing network doesn't come without some challenges, and the current challenge we're facing is the default 1-byte path hash size, which only allows for 256 possible values.
    </p>

    <div class="note">
      <p><strong>What's a path hash, anyway?</strong><br>
      When a MeshCore packet travels across the network, it keeps a record of the nodes it's passed through. Each entry in that log is a short "hash" that represents a node. By default, those hashes are 1 byte long, which allows for 64 hops, but only 256 possible values.</p>
    </div>

    <h2>So here's the current situation:</h2>
    <p>
      The default 1-byte path hash that MeshCore uses allows for 64 hops but only 256 possible unique device IDs (or hashes which is the 2-character ID associated with Repeaters, Companions, and Room Servers). As the TennMesh network has grown and we've now started connecting to our great neighbors in NC, SC, GA, KY, and VA, we've reached well beyond the 256 possible 1-byte path hashes. Looking at the Nodes list from the <a href="https://live.tennmesh.com/#/nodes" target="_blank" rel="noopener">TennMesh Live Page</a>, there are currently 685 Repeaters, 44 Room Servers, and 162 Companions at the time of this writing. You may have noticed this issue first-hand while looking at the path messages are taking and seeing where repeaters in the path show a list of multiple known repeaters in red like this:
    </p>

    <img src="/assets/images/known-repeaters.png" alt="Screenshot showing multiple repeaters sharing the same path hash in MeshCore" class="blog-post-img blog-post-img--natural">

    <p>
      If we take a look at the 1-Byte Hash Usage Matrix below, we can see there are path hash collisions for just about every possible 1-byte path hash, and even numerous boxes showing 3+ users with the same one. Luckily, there's an easy solution to fix this: switching to 2-byte path hashes.
    </p>

    <img src="/assets/images/1ByteMatrix.png" alt="1-Byte Hash Usage Matrix showing widespread collisions across all 256 possible values" class="blog-post-img">


    <h2>So what does 2-byte path hash do?</h2>
    <p>
      Bumping to 2-byte hashes expands those possible values from 256 to a whopping 65,536. The collision probability drops dramatically. For a growing regional network like TennMesh that's actively adding repeater sites, that headroom is important for our growth and future-proofing the network.
    </p>

    <h2>Will this break anything?</h2>
    <p>
      Making this switch does reduce the maximum hop count from 64 down to 32, but that's still plenty. We've yet to see a hop count higher than the mid-20s on TennMesh, so nothing will break in terms of the reach we're currently seeing.
    </p>
    <p>
      Any repeater running firmware 1.14+ is multibyte capable and will repeat 1-byte, 2-byte, and 3-byte traffic. This means the transition is straightforward: once your repeater is on 1.14+, it's ready to repeat 2-byte traffic from Companion nodes that have made the switch.
    </p>
    <p>
      The only repeaters that can't repeat 2-byte traffic are those still running firmware older than 1.14. That's why updating to 1.14+ is the important first step, and why we're encouraging the whole TennMesh community to get updated. The more of us that do, the better the network gets for everyone.
    </p>
    <p>
      So that's how to make the repeaters compatible, but there's another optional step that we recommend taking, and that's setting the repeaters to send adverts using 2-byte path hashes. You can do this by logging into your repeater's remote admin page, selecting the Command Line tab at the bottom, and sending the following command:
    </p>

<pre><code>set path.hash.mode 1</code></pre>

    <p>
      The reason for this is to help everyone see which repeaters have been updated. After this command has been sent, whenever the repeater sends an advert, it will be in the 2-byte format. We can then see which repeaters support 2-byte by visiting the static map on the <a href="https://live.tennmesh.com/#/map" target="_blank" rel="noopener">TennMesh Live page</a> and looking for the larger 4-character repeater labels on the map like the ones circled below:
    </p>

    <img src="/assets/images/2byte-map.png" alt="TennMesh Live static map showing repeaters with 4-character labels indicating 2-byte advert support" class="blog-post-img">

    <h2>How to make the switch on your repeater</h2>
    <p>It's a two-step process and takes less than five minutes:</p>

    <h3><em>Step 1: Update your firmware</em></h3>
    <p>
      Make sure your repeater is running MeshCore firmware version 1.14 or later. The 2-byte hash mode isn't available on older versions, so this is a required first step. If you're not sure what version you're on, check before proceeding.
    </p>

    <h3><em>Step 2: Enable 2-byte repeater adverts</em></h3>
    <p>This step is optional, but very helpful. Once you're on 1.14+, remote into your repeater, open the Command Line, and send this command:</p>

<pre><code>set path.hash.mode 1</code></pre>

    <p>That's it. One command and your repeater's adverts are broadcasting in 2-byte format.</p>

    <h2>How to make the switch on your Companion node</h2>

    <h3><em>Set the path hash size</em></h3>
    <p>
      From the home screen on the MeshCore app, tap on the Gear icon on the top right &gt; Scroll Down to Experimental Settings &gt; Adjust the "Default Path Hash Size" option to "2-Byte (max 32 hops)"
    </p>

    <div class="note">
      <p><strong>Note:</strong> Only set this after most of the repeaters in your area have updated to firmware 1.14+. Repeaters still running older firmware will <strong>NOT</strong> repeat your 2-byte traffic.</p>
    </div>

    <p>Thanks and hope to see y'all on the mesh!</p>
  </div>
</div>
