---
layout: base.njk
title: Repeater Attention Report
description: Repeaters seen on the network that need attention from their operators such as unnamed devices, missing locations, and outdated firmware.
date: 2026-04-07
---

<div class="container-narrow">
  <div class="howto-breadcrumb">
    <a href="/reports/">&larr; Back to Reports</a>
  </div>

  <div class="content-section" style="padding-bottom: 0">
    <div class="blog-post-header">
      <span class="howto-tag howto-tag--firmware">Operator Action</span>
      <h1>Repeater Attention Report</h1>
      <p class="blog-post-meta">April 7, 2026</p>
      <p class="howto-intro">A summary of repeaters seen on the network that need attention from their operators. Issues are listed from lowest to highest urgency.</p>
    </div>
  </div>

  <div class="content-section blog-post-content" style="padding-top: var(--space-6)">

**Generated:** 2026-04-07
**Data Window:** 2026-03-31 to 2026-04-07

---

<div class="note note-success">
<p><strong>✅ Progress Since April 5, 2026</strong></p>
<p>38 repeaters previously flagged for operator attention have now been confirmed to be running firmware 1.14 or newer. These systems are either broadcasting 2- or 3-byte adverts or have been observed successfully forwarding multi-byte traffic, and have been removed from the attention list. Thank you to everyone who updated promptly, and to those who enabled multi-byte traffic on their companion devices and sent test messages. Your testing helped provide the visibility needed to confirm these upgrades.<br><br>
</p>

<details>
<summary>Click Here to view all 38 repeaters that confirmed firmware 1.14+ since April 5</summary>

| Repeater Name | Public Key Prefix |
|---|---|
| @izzyisaac V4 Observer | cf4d1e87 |
| 6684 Rptr Mt. Mitchell | 628e2051 |
| Black Betty | 77e36bc6 |
| Brushy Valley Repeater | 22204cab |
| CC | f8f847dc |
| Delta Flyer - nashme.sh | af574da7 |
| Ellerbe Repeater | edbcf5a6 |
| Eno-RPT1 | 23071210 |
| Fairgarden Repeater-Sev | 2a655736 |
| fire on the mountain | b419852f |
| Green Hill Repeater | 4f9a9470 |
| House Mtn TennMesh.com | 8980cc79 |
| ikoka test | 823f97de |
| Jeff Portable | 4d6591ef |
| Jupiter Repeater | b489bc8d |
| Kd4stt Home BASE 🏡 | dc239240 |
| KholdFuzion V4 Repeater | 9b548f5e |
| kg4ojl Mini Rep7 | eb4df29a |
| kg4ojl Pocket V2 | 4f64c5f3 |
| kg4ojl Rep1 | a6e802f4 |
| kg4ojl V4 Work Fr-Home | 1d699ae0 |
| KQ4HLZ 1W Hilltop | 2a92473b |
| KQ4HLZ YAG | a6ccc2a6 |
| LG | 023efe05 |
| N4PPG Mobile (2 Byte) | 9283d868 |
| OhmsRepeater4 | 25947a10 |
| RAK Tag CM Repeater | 826235a3 |
| RR_Mobile_Rep_Jim | 549d3d4a |
| RR_REP_17f0_Greeneville | 17f09f48 |
| santiago | 96e0f652 |
| Ted - W4LZA | d858143c |
| TN | 7473d27c |
| Unkown | 796163fb |
| WIL_T1 | 53f812bc |
| WIl_Tdeck | 8969c86e |
| ZZBIRD  KM4HDM 🦅 | 5b06111a |
| 😵‍💫 KQ4HLZ  1AB | 7398d66f |
| 😵‍💫KQ4HLZ 3AB | fecf043a |

</details>
</div>

---

<h2 id="unnamed">Unnamed Repeaters</h2>
<span class="howto-tag howto-tag--app">Action Recommended</span>

These repeaters are still broadcasting a default hardware name or a hex/MAC-style identifier. Operators should set a meaningful name so their device can be identified on network maps and in analysis tools. Duplicate names in the table are distinct devices with different public keys.

| Repeater Name | Public Key Prefix | First Seen | Last Seen | Adverts | Reason |
|---|---|---|---|---|---|
| Heltec Repeater | 8a33031d | 2026-04-01 | 2026-04-01 | 1 | Hardware default |
| Heltec Repeater | 85b4722b | 2026-04-04 | 2026-04-07 | 4 | Hardware default |
| RAK4631 Repeater | 46f8d5bd | 2026-03-31 | 2026-04-07 | 47 | Hardware default |
| RAK4631 Repeater | bc4ebd87 | 2026-04-04 | 2026-04-04 | 2 | Hardware default |
| SenseCap_Solar Repeater | 3e0b4b7a | 2026-03-31 | 2026-04-07 | 14 | Hardware default |
| SenseCap_Solar Repeater | 3dd1c835 | 2026-04-01 | 2026-04-07 | 13 | Hardware default |
| SenseCap_Solar Repeater | b663fcd5 | 2026-04-02 | 2026-04-02 | 4 | Hardware default |
| T3S3-1262 Repeater | d70a51be | 2026-04-01 | 2026-04-07 | 11 | Hardware default |
| Xiao_nrf52 Repeater | 270b1e8b | 2026-04-01 | 2026-04-02 | 5 | Hardware default |

---

<h2 id="no-location">No Location Set</h2>
<span class="howto-tag howto-tag--hardware">Action Highly Recommended</span>

These repeaters have not configured a location (GPS coordinates are 0,0). Operators don't need to set a precise GPS coordinate, a general nearby area is enough. A location helps other operators understand network coverage and lets the community identify gaps.

| Repeater Name | Public Key Prefix | First Seen | Last Seen | Adverts |
|---|---|---|---|---|
| -R | 9b97bd6f | 2026-03-31 | 2026-04-07 | 23 |
| 9B | 9b2a6bc2 | 2026-03-31 | 2026-04-06 | 4 |
| AG1+ Station 🏳️‍ | f249e952 | 2026-04-01 | 2026-04-07 | 9 |
| ARK Car | 218cc7d6 | 2026-04-01 | 2026-04-07 | 12 |
| B2 Home Repeater | 190b40da | 2026-04-01 | 2026-04-07 | 10 |
| Big-Rak test repeater | 9b14d1b0 | 2026-04-04 | 2026-04-04 | 7 |
| Biscoe RPTR | da9d04e2 | 2026-04-02 | 2026-04-05 | 5 |
| BlueBucketRPTR | b82fb4eb | 2026-04-02 | 2026-04-05 | 3 |
| DavysTech \| RPT-1 | 746021d8 | 2026-04-01 | 2026-04-06 | 11 |
| Delta Flyer - nashme.sh | af574da7 | 2026-04-03 | 2026-04-06 | 10 |
| ENCMesh Jasper 2 | d86112a8 | 2026-04-03 | 2026-04-07 | 2 |
| ENCMesh NewBern NE LP | 60164b08 | 2026-04-05 | 2026-04-07 | 2 |
| ENCMesh-Experiment | ec11b7f7 | 2026-04-04 | 2026-04-07 | 2 |
| ENCMesh.com 28560 #4 | 518948ec | 2026-04-02 | 2026-04-02 | 1 |
| ENCMesh.com 28560 low | 74ca66d2 | 2026-04-06 | 2026-04-06 | 1 |
| ENCMesh.Com Jasper | 30db2926 | 2026-04-04 | 2026-04-07 | 2 |
| FlamingDragon4 🔥 | 97e77e92 | 2026-04-03 | 2026-04-03 | 4 |
| FoHi To Knox | 53146ca4 | 2026-03-31 | 2026-04-03 | 3 |
| GMD_804_RPTR | e5039f8d | 2026-04-01 | 2026-04-07 | 52 |
| HB Mobile Repeater | 36606a85 | 2026-04-01 | 2026-04-01 | 1 |
| Heltec Repeater | 8a33031d | 2026-04-01 | 2026-04-01 | 1 |
| Heltec Repeater | 85b4722b | 2026-04-04 | 2026-04-07 | 4 |
| Holston Mtn Repeater | efd63448 | 2026-03-31 | 2026-04-02 | 2 |
| iGGy War Wagon | 27a5ab80 | 2026-04-02 | 2026-04-02 | 1 |
| III_MC_OR_SL | 4c2f6435 | 2026-04-01 | 2026-04-07 | 12 |
| Jabez KY T-114 Rpt | 281e8519 | 2026-04-02 | 2026-04-03 | 3 |
| jagjohn spare rpt | e92d2600 | 2026-04-01 | 2026-04-07 | 14 |
| JC1🚁Repeater | 12643ff5 | 2026-04-03 | 2026-04-03 | 1 |
| KF4OFI~RPTR~2 | 7517b6e5 | 2026-04-01 | 2026-04-04 | 2 |
| kg4ojl Mini Rep7 | eb4df29a | 2026-04-06 | 2026-04-06 | 1 |
| KG4VCF Desk Repeater Te | c2aca894 | 2026-04-01 | 2026-04-07 | 11 |
| KM4BLG Mobile Repeater | b58bca9f | 2026-04-01 | 2026-04-07 | 10 |
| KQ4ZMX-RPT-1 | 0c56919c | 2026-03-31 | 2026-04-07 | 14 |
| KR4CMI - JC - South | 8489480b | 2026-03-31 | 2026-04-05 | 10 |
| LabtopiaFarms_rp | e7be1bc1 | 2026-04-03 | 2026-04-03 | 1 |
| Midtown Repeater - Nash | ee38644f | 2026-03-31 | 2026-04-02 | 29 |
| Milton✝️Repeated | 57d5aa98 | 2026-04-02 | 2026-04-02 | 1 |
| Mobile Rptr | bfb5908f | 2026-04-04 | 2026-04-04 | 4 |
| N4RUG 2 repeater | 9adf416e | 2026-04-02 | 2026-04-03 | 4 |
| ota test 🚫 | 56c44225 | 2026-04-03 | 2026-04-03 | 1 |
| Peak-Climber-Special-Ev | 29f80f10 | 2026-04-04 | 2026-04-04 | 1 |
| PORT | 2f114d49 | 2026-04-02 | 2026-04-07 | 8 |
| RAK4631 Repeater | 46f8d5bd | 2026-03-31 | 2026-04-07 | 47 |
| RAK4631 Repeater | bc4ebd87 | 2026-04-04 | 2026-04-04 | 2 |
| RARSfest-OUT | 0da708db | 2026-04-04 | 2026-04-04 | 5 |
| RIDGECORE RPTR V | c0e13a14 | 2026-04-01 | 2026-04-07 | 10 |
| SC2 | fe0858bf | 2026-03-31 | 2026-04-07 | 13 |
| SC3 | 0d14159d | 2026-03-31 | 2026-04-07 | 14 |
| SenseCap_Solar Repeater | 3e0b4b7a | 2026-03-31 | 2026-04-07 | 14 |
| SenseCap_Solar Repeater | 3dd1c835 | 2026-04-01 | 2026-04-07 | 13 |
| SG V Repeater | d6d52deb | 2026-04-01 | 2026-04-01 | 1 |
| Spaghetti (rdumesh.org) | ee7a6372 | 2026-04-01 | 2026-04-07 | 5 |
| SWDG Rover a | ce485797 | 2026-04-01 | 2026-04-07 | 8 |
| SWDG Rover B | 447ce227 | 2026-03-31 | 2026-04-07 | 12 |
| Trojan-2 RPTR | b34c2ea0 | 2026-04-01 | 2026-04-02 | 3 |
| WA4WMD-9 Repeater | ce4b570b | 2026-04-01 | 2026-04-07 | 11 |
| WD 200 | 025af85c | 2026-04-02 | 2026-04-06 | 8 |
| WEW_Repeater | d12775c1 | 2026-03-31 | 2026-04-07 | 14 |
| WM Truck Repeater | 72fc93c3 | 2026-04-01 | 2026-04-07 | 13 |
| WNC ZERO | 69e396d0 | 2026-04-03 | 2026-04-07 | 3 |
| ✈️ RDUMesh.org 🚫 | 5615dea1 | 2026-04-03 | 2026-04-07 | 35 |
| ✈️MX744 RDUmesh ❓ | 4f80eb96 | 2026-04-03 | 2026-04-07 | 13 |
| ✌🏻KR4HNK RPTR2✌ | db0170ac | 2026-04-01 | 2026-04-01 | 5 |
| 🍁Sage🚫 | 04c53f9e | 2026-04-04 | 2026-04-04 | 1 |
| 🍁Sage🚫 | 3ea919ff | 2026-04-05 | 2026-04-05 | 1 |
| 🍒Cherry | de7e5d0c | 2026-04-04 | 2026-04-06 | 6 |
| 🚒 DFD Station 6 | e6d29bf4 | 2026-03-31 | 2026-04-07 | 24 |
| 🚙smopuim86-Cager-RPT | a9c77b30 | 2026-04-01 | 2026-04-01 | 2 |

---

<h2 id="firmware">Not on Firmware 1.14+</h2>
<span class="howto-tag howto-tag--firmware">Action Important</span>

These repeaters were observed sending only 1-byte path hash adverts and were not observed forwarding any multi-byte packets during the data window. This likely means they are running firmware older than 1.14 and will **silently drop** 2-byte and 3-byte packets. This means that once we make the eventual switch to using 2-byte and 3-byte packets on Companion nodes, these repeaters will no longer forward traffic to help the mesh.

Operators should update to firmware 1.14 or later. [Learn more about why this matters and how to update &rarr;](https://tennmesh.com/blog/2byte-path-hashes/)

<div class="note"><p><strong>Note:</strong> Some repeaters in this list may already be on firmware 1.14+ with <code>path.hash.mode</code> left at the default of 0. They simply weren't observed forwarding a multi-byte packet during this data window. Updating and setting <code>path.hash.mode</code> to <code>1</code> or <code>2</code> will help get you off this list. We also recommend that users periodically set their companion nodes to use 2-byte or 3-byte and send a message in the #test channel. This will generate multibyte traffic and allow us to see which repeaters are forwarding the traffic, indicating that they're updated and multibyte capable.</p></div>

<div class="note"><p><strong>Firmware Version Notes:</strong> There is a known bug in <strong>1.14.0</strong> where multibyte adverts are not sent automatically, even if you have run the <code>set path.hash.mode</code> command on your repeater. The multibyte adverts only go out when triggered manually. This means a repeater on 1.14.0 may still appear on this list even if it's set to send out multibyte adverts. <strong>Upgrading to 1.14.1+ is recommended.</strong> However, 1.14.1 introduces a new issue where <code>rxgain</code> is disabled by default, which can reduce receive sensitivity. Re-enable it after upgrading with: <code>set radio.rxgain on</code> This only happens when <strong>upgrading</strong> to 1.14.1... A fresh install of 1.14.1 where a Flash Erase was performed prior to flashing the firmware will not have this issue. </p></div>

<details>
<summary>Click Here to view all 454 repeaters that have been sending only 1-byte adverts or have not been observed forwarding multibyte traffic</summary>

| Repeater Name | Public Key Prefix |
|---|---|
|  DKX Repeater | 09d6ce2d |
|  TNM360BXV | 1565851d |
| -R | 9b97bd6f |
| 165 Repeater | 3f0a76a1 |
| 443a8fa54c98 | 443a8fa5 |
| 6684 MM E Link | 7c935dc6 |
| 7 Oaks Swim | e92a9be0 |
| 9B | 9b2a6bc2 |
| ADS Home Repeater | 0cd35cef |
| AG1+ Station 🏳️‍ | f249e952 |
| ag_p_sol_rep_0 | 5041409c |
| AGpoeV3 | 026fa27b |
| AGS-JC07 | 07abc506 |
| agUDArepV4 | 27175911 |
| AI4SI Repeater | 5c295d3a |
| Alexander | 577d08eb |
| Alle-Repeater2 | fb0ecea7 |
| Allegheny_Cabin | 8243bc69 |
| Amerine Repeater | fead7660 |
| Amon Din | 695e5800 |
| ARK Car | 218cc7d6 |
| ARK North AVL | 03250366 |
| ARK West AVL | 48e7dade |
| Athens10EC | a3906a32 |
| Athey Tower Repeater | 20ae2685 |
| B2 Home Repeater | 190b40da |
| Barbourville | 211f838d |
| BART Heltec Repeater | fcabd2d8 |
| BeasFar Repeater | e10604f7 |
| Beaucatcher Mnt | 138ac541 |
| Beaverdam9 | a91bd165 |
| BellR1 | 53747fa5 |
| Big Canoe 1 | 587cdf5d |
| Big Hill Mtn Repeater | e3ee13e0 |
| Big Swamp Local Repeate | 0667b077 |
| Big Swamp Repeater | 6e676553 |
| Blackjack Mtn | f4f1767b |
| Bladenboro Repeater | 7f6cd0a4 |
| BluBaru Repeater/Relay | c3968dee |
| Blue Hill | b8d75d00 |
| Blue Ridge Rd | 4d707df8 |
| BOB_KIRBY_REPEATER | 043307b8 |
| Bobcat Rptr | e5d2f0c0 |
| Boswtring_RPTR_1 | 9aad1aaf |
| Bowstring Repeater 2 | 44dcf495 |
| Bristol Va Wraith | 66dff7e4 |
| BSol Repeater | f1c1c453 |
| Buck Repeater | d0782027 |
| BWrep | c2b033cb |
| Carlyle Repeater | 1507281b |
| Cascade Falls Repeater | cf62c5c5 |
| Caswell K4XD Repeater | a44a499b |
| CCB Repeater | fee9b86c |
| CCRep1 | a095bb55 |
| CDM Repeater | 22557dbd |
| Central Cherokee Repeat | a0304cf2 |
| Central High School \| R | 231e1955 |
| CharlestonTN TennMesh.c | a235f348 |
| CHR_Solar | 55f51917 |
| CleVegas Repeater | aec795dd |
| Countryside Home Rptr | dbd72af8 |
| COVE MT REPEATER | 4ca42e1a |
| Crabtree Valley Repeate | 5f03738d |
| Crawley Swamp Observer | d1d5bf95 |
| Crestwood Hills \| Knox  | 78f06103 |
| Cuckoo Marietta Repeate | 151ab7f5 |
| CWH-3 | 4444b351 |
| cxAttic | 11058ba3 |
| Daboo Winnipeg Ct | 90b91fab |
| DavysTech \| RPT-1 | 746021d8 |
| DavysTech \| RPT-2 | c77591b5 |
| DeuceRepeater - TNM300P | 5ecaab39 |
| DH Hill | 4ca91412 |
| DIF5 RAK4631 Solar Repe | 9d173d86 |
| diggitydiggitydiggity | 88aa8a5a |
| Doughton | 1f953b97 |
| Drews Repeater | c5eba7d0 |
| DRX1 | c9ed7099 |
| DT Somerset | 0708a44b |
| DW07AtticRpt | a684a287 |
| E London | c8de894e |
| East End Boys | cd414b80 |
| East OR  Repeater | 862fce87 |
| Eastview✝️Repeated | 58b9bd46 |
| ENCMesh 28560 DownTown | 9b2a78a8 |
| ENCMesh 28560 Glenburni | f5341d08 |
| ENCMesh 28562 Hospital | b23d2fb5 |
| ENCMesh Grantsboro | 1e164f29 |
| ENCMesh Jasper 2 | d86112a8 |
| ENCMesh LOW Grantsboro  | f8cf3b6e |
| ENCMesh NewBern NE LP | 60164b08 |
| ENCMesh-Experiment | ec11b7f7 |
| ENCMesh.com 28529 | 2d67f81e |
| ENCMesh.com 28560 #4 | 518948ec |
| ENCMesh.com 28560 low | 74ca66d2 |
| ENCMesh.com 28650 NE HP | 8f614e15 |
| ENCMesh.Com Jasper | 30db2926 |
| ENCMesh.com Trenton NC | 8783734b |
| eTac RPTR | c49d72bf |
| Faith Repeater | 883fd210 |
| Fishers Peak Repeater | 33336074 |
| FlamingDragon2 🔥 | 25463fd5 |
| FlamingDragon3 🔥 | a3d745a6 |
| FlamingDragon4 | 97e77e92 |
| FoHi To Knox | 53146ca4 |
| Fort Sanders Repeater | c5e28f5f |
| Franklin Rptr \| Knox | 9f688e71 |
| GMD_804_RPTR | e5039f8d |
| Golgi Apparatus | c2c46afe |
| GP Repeater | 3e1a9832 |
| Gray Hawk KY💧RPT | 2b66ff7d |
| Gray Repeater | 60b489a0 |
| Green Hill Backup | e377f44d |
| Green Hills Repeater | b02bf53b |
| Green Mountain Repeater | b306c422 |
| Grub Exp Solar | 23f0fcb9 |
| HamShackTV Repeater TNM | 2719339b |
| HarborBreeze Repeater | 68de04ed |
| Harlan Ky | f5ec1f47 |
| Heltec Repeater | 85b4722b |
| Hendo NC South Repeater | 01d763fc |
| Hendrix Mtn Repeater | db9f8997 |
| Herm1R Repeater | 5c818ce1 |
| Hilltop | fa5ddd29 |
| Hood 1 Repeater | 2a6dbb5f |
| Hood 2 Repeater | 51ebf7ae |
| Hot2TrotMobile.L1 | e6322b30 |
| HuntersCrossingWioRepea | edb1174a |
| Hville Repeater T114 | 3ec32622 |
| iGGy War Wagon | 27a5ab80 |
| III_MC_OR_SL | 4c2f6435 |
| Incisive-GVP | dd1dbbab |
| iX-Repeater-1 | 1bee37c3 |
| iX-Repeater-2 | 0cff1735 |
| iX-Repeater-Solar | 976e10c5 |
| Jabez KY T-114 Rpt | 3c8b27a6 |
| Jacksboro RPT | d773af74 |
| jagjohn spare rpt | e92d2600 |
| Jazzy Bear Repeater | deabd535 |
| JC1🚁Repeater | 12643ff5 |
| JCHS Ky Rpt | 6c6e9c20 |
| Jeep Rpt✌️🇺🇸 | a4601837 |
| JG 02 | ca9a0643 |
| JG04 | aa0ef367 |
| JJ_T114 Repeater | 3d3f6362 |
| JKSN Repeater | eaf69091 |
| Johnny Mobile  Repeater | 0c637239 |
| K4JAH Solar Repeater 01 | 8a510f50 |
| K4JKH SC_Solar Rptr | 1e5e1a0c |
| K4KI Repeater | eac6d52b |
| K4OZI Home KYM970KYQ | 9a8ebf18 |
| K4RAE Alcoa | 3037d075 |
| K9DFB-Repeater | 9f320f1b |
| KARC Repeater | 96b1eeef |
| KB2UUL 1W | e4f523bc |
| KCIT - 1W Test | 050754c3 |
| Kd4afw/R1 | 43665248 |
| kd4nc1 | dd43ec60 |
| KD4STT-3 TennMesh.com | ead9b567 |
| KE4GJG 1W Repeater | b2ecdec5 |
| KE4GJG.com Farm | d0c1d53d |
| KE4MH Repeater-1 | 1eda18a1 |
| Kenansville Repeater | 3791c999 |
| Kenwyn_Pass | b63a7eab |
| KF4IVV Mobile Repeater | 7dd73a51 |
| KF4OFI Repeater | 8c124059 |
| KF4OFI~RPTR~2 | 7517b6e5 |
| KG4VCF Chambers Mtn | 5de2bded |
| KG4VCF Desk Repeater Te | c2aca894 |
| KG4VCF Dogwood Rd | 5cd621a0 |
| KG4VCF Hightop AVL | fa3f91e3 |
| KG4VCF Home Tower | ac3f079e |
| KG4VCF Leisure Mtn | 8331efa8 |
| KG4VCF NEBRA Dogwood | b026399e |
| KG4VCF Spivey Mountain | f029a1ce |
| KG4VCF TN QTH | f9ed2e07 |
| KI4ZTP Repeater | 4b2ee22a |
| KJ4AKB Repeater | 1661f935 |
| KJ4VAD  - Elk Mtn | 244e3ee6 |
| KJ4VAD - Grants MTN | 3825ea6c |
| KJ4VAF Repeater | 3547f7f1 |
| KK4GGK-1 | 9eabe70b |
| KK4GGK-2 Lone Mnt | 1d9518f6 |
| km4ba-mule | ba438320 |
| KM4BLG Mobile Repeater | b58bca9f |
| KM4DNU1 | f93dbf6d |
| KN4CPX - repeater | e7341532 |
| KN4FZD Repeater | f8608856 |
| KN4SLI | b7707fba |
| KO4AXL Mtn View Repeate | aab3a91f |
| KO4FZG RPTR | 37da2cd3 |
| KQ4KXA V4 Repeater | 8fd4a69f |
| KQ4MHE Newfound | aeffc2af |
| KQ4ZMX-RPT | 9a734e8e |
| KQ4ZMX-RPT-1 | 0c56919c |
| KR4CMI - PF - North | e96b33b0 |
| KR4MT Repeater | 19239cd0 |
| ky4tb-r | 0104d2ed |
| ky6mm-r KYM750PCA | d8af3fd4 |
| LabtopiaFarms_rp | e7be1bc1 |
| Lafayette [rdumesh.org] | f9ddd0e8 |
| Lake Benson Repeater | bed2f75f |
| LC1 TennMesh.com | 9856262b |
| LCARA 146.880 Repeater | 88bbf2c6 |
| LCYW RAK4631 Repeater | 51062375 |
| LETC | 4e65a21f |
| LEVI Repeater | 0bae812a |
| Liberty | 33c8d129 |
| Liberty-KY 146.790 | e1385719 |
| Lions Park Raleigh | cc1b5fcf |
| Locke Repeater | 57e9eb64 |
| LOOKROCK REPEATER | a6790815 |
| LumpsBase (rdumesh.org) | c39269b2 |
| LynchHill✝️Repeated | 9f2a5eea |
| M4GGRY_GRDN | f30c31b9 |
| M4GRY_MCN | 080ec321 |
| Maryville Solar 7 | 3db282b0 |
| MasRep-RAK1W | 70a2662e |
| Mckee Repeater | 8d3cf43c |
| McMesh Clan - Castle | a7f4f2b0 |
| McQuailerton Farms #2 | d925aa84 |
| mdm | 01017a58 |
| Meshugga - nashme.sh | 7b90e544 |
| Mial-Repeater1 | 69559686 |
| Midtown Repeater - Nash | ee38644f |
| Milton✝️Repeated | 57d5aa98 |
| Mint Hill Repeater | afb39b3d |
| MJL9-Swannanoa-R2 | 9a077292 |
| Monticello 150 | cc6ba43c |
| MPJ-SolarRepeater | 933576f7 |
| Mt Vernon Ky Rptr | b13ab84c |
| Museum of Life&Science | 8d78424a |
| Music Row Observer | 68ef5c64 |
| Music Row Solar | 1101185b |
| N London Ky Rpt | b344df93 |
| N1FJB Repeater | 8fb65c9b |
| N2JWC RPTR | 9bb9f992 |
| N4CDK MC Repeater | bcc3f437 |
| N4JCJ Repeater | 6ca48183 |
| N4LMC - Lookout Mtn Rpt | 7298996a |
| N4LMC-LookoutRepeater | 5a89da1d |
| N4MNC-1 | 5111f9e4 |
| N4NJM Whiterun | 0a183d72 |
| N4RLS - Home RAK 1W RPT | 935cd899 |
| N4RUG 2 repeater | 9adf416e |
| N4SZ Repeater Oconeeche | 3e7a707b |
| NCOR Repeater | dd739774 |
| NESHER R1 | 2cdcd3e9 |
| NGPeater | 68a7d8fb |
| NIBROC | 171c1178 |
| Nich East KyFi | c41911cc |
| Nicholasville Center Ky | 1d127478 |
| Nicholasville North | d84758e3 |
| NK Repeater0 | 635c1aee |
| North Durham Mesh | 8ffcd71d |
| North Durham Mesh | 6705c96c |
| North Durham Mesh | afd85de8 |
| Oakley Repeater - 1WB | 133e4c45 |
| Oakley Repeater - 1WF | 3a94dfda |
| OhmsRepeater2 | ab415cf3 |
| Old Fort Repeater 🏰 | 2225ef30 |
| OR 2 Repeater | 275174b2 |
| OR 3 Repeater | 71a5938b |
| OR1 Repeater | d99f811e |
| OswaldDome TennMesh.com | 8ff98f96 |
| ota test 🚫 | 56c44225 |
| OUTERPOST | 19dc517e |
| PCB_Rob Repeater | 41778bde |
| PCB_Rob Repeater | 4571eca3 |
| Peak-Climber-Special-Ev | 29f80f10 |
| Peater | 17d3162e |
| PH \| Luckfox | fad95ca9 |
| PH \| Station G2 | 510ceccf |
| PH \| Xiao 1W | af7525aa |
| Pilot Mt Ky Rptr | ac62f405 |
| PineMtn | abcf581a |
| PNA SL RPTR | 5cdf78da |
| PORT | 2f114d49 |
| Posey Point | b0e437ad |
| PriceBase | 33d40409 |
| Prometheus LEXINGTON KY | 9964092d |
| Prospect Hill NC 🌲 | eec3fdcc |
| Q University | 79e7716a |
| RAK4631 Repeater | 46f8d5bd |
| Raleigh.Woodcrest.02 | 59bff5f3 |
| RARSfest-IN | 73d08ab9 |
| RARSfest-OUT | 0da708db |
| Redbud | 082151f6 |
| RedRepeater | b3051033 |
| Rennert Repeater | cf13f290 |
| Repeat Offender | c825710b |
| Reservoir Knob Somerset | efd38f09 |
| ReXWorld Repeater | 40df421a |
| Riceville Rd | a06c1828 |
| Richmond, Ky Repeater | 2df7ae8c |
| RIDGECORE RPTR II | 0fe4f176 |
| RIDGECORE RPTR III | 84d54fed |
| RidgeCore RPTR IV | dbbeb0e6 |
| RIDGECORE RPTR V | c0e13a14 |
| RoamingRepeater | c27f9508 |
| Roboscape ☀️ Solar  | 53e61b54 |
| Rockingham NC 1W Repeat | 99cad376 |
| Routkwon | 4479a6f9 |
| RoyalPines Repeater | 07cb0e8a |
| RPTR: OptiMESH Prime | 67fcec27 |
| S-Repeater | a25750db |
| S-Repeater-2 | b93a5b26 |
| S2R Repeater | f588ed41 |
| Sand Knob Ky | da8c320e |
| Sauratown Repeater | 7fcb134e |
| SC2 | fe0858bf |
| SC3 | 0d14159d |
| ScienceHill Water Tower | f420e369 |
| SCS Harrison | 68973fcc |
| SenseCap_Solar Repeater | 3e0b4b7a |
| SenseCap_Solar Repeater | 3dd1c835 |
| SenseCap_Solar Repeater | b663fcd5 |
| SenseCap_Solar Repeater | ebcf5aba |
| Sevier-78-Prime1w | eb956ab8 |
| Sevier-Observer | 6da8ec0a |
| SG V Repeater | d6d52deb |
| sharpshout FlagPole | 6a7c068a |
| Shepherd Repeater | d7171162 |
| Sherron Mesh | bb37bba6 |
| Short Mountain | 3d9cf2bc |
| ShortBus Meshcore Repea | 6d16c503 |
| ShortBus Repeater 2 +3d | 265f985f |
| SHRW-H-RPTR | 99938f63 |
| Skunk Rptr | 5122b6da |
| SKYNET | 4c1887e4 |
| Solar Node - Test 1 | 445ddff5 |
| Solar Node Test - 2 RAK | 42e565fc |
| Solar Node Test - 3 RAK | 86d7c8b9 |
| South AVL Repeater | 0e12a975 |
| South Corbin | 26ed8a94 |
| SouthernWoods MCR | 91fa0ea2 |
| Spaghetti (rdumesh.org) | ee7a6372 |
| Spivey_Tower | c46815f2 |
| Splatspace Repeater | 30c65d40 |
| Spout Springs Repeater | 5e1c0265 |
| STATE LINE NC_SC Repeat | e31282f7 |
| Swamp Mesh Repeater | 07288afa |
| Swan SenseCap_Solar Rep | bc5d3cef |
| SWDG - 1 RPTR  NF4DG | 9fb53813 |
| SWDG - 3A RPTR   K4SVB | 2f1a1c88 |
| SWDG 2 RPTR    WQ4M | 3e7c0070 |
| SWDG Rover a | ce485797 |
| SWDG Rover B | 447ce227 |
| SWDG-1 NF4DG - Shack | b1e5ba19 |
| SWDG-2 RPTR WQ4M | a8fcfec4 |
| SWDG-2A RPTR KE5KUP | 39055dd9 |
| SWDG-3A RPTR K4SVB | f4b99dc9 |
| SWDG10 TennMesh.com | a0ccfd4e |
| SWDG11 TennMesh.com | 1b165ed9 |
| Sweat Mtn Repeater | 381f5298 |
| Swiss Colony Rptr | bca6d2a2 |
| Swiss Layne | 7729a010 |
| T3S3-1262 Repeater | d70a51be |
| Tarheel Commons | 108df987 |
| TC² McMinn Obs | 32c9e75f |
| TC²-Helios | fa312f72 |
| Tee_Lee_Hornet | 1a6fe980 |
| Temporary Test Repeater | 6b87c58d |
| Test Repeater 1 | c4788e4e |
| TheHill TennMesh.com | bbf6fbe9 |
| TheHill[TennMesh.com] | 3e0d6f74 |
| TJNATCRPTR | 517a66d5 |
| TKOF | c60d9bbe |
| TminusTwo Attic 1W 🏠 | 852a0098 |
| TNM060HYL - Best Repeat | ab12ba1a |
| TNM061HYL - Home Rpt | 9cba9a70 |
| TNM310NNK Rooftop | caa38e12 |
| TNM470YLM - Rvrsde Rpt | b77bd23c |
| TNM670AVH-Eagleton | e9aafcad |
| TNM762NXZ - Sevier-78 T | cb616bac |
| Topsail Fire Tower RPTR | ec458837 |
| TP1 TennMesh.com | 18bee3a1 |
| Tri Star Repeater | fd88c48d |
| Tri-Cities Crossing Rep | 3da46236 |
| Trojan-2 RPTR | b34c2ea0 |
| Tropo🦆TennMesh.com | 41a4b619 |
| Turner Mountain Repeate | febc92af |
| USG770APD - NeedMore | d36c4399 |
| USG771APD - AquaCore | 65bfb014 |
| USS Enterprise NCC-1701 | 87276189 |
| V3 Test /R | 9df1dd81 |
| Vango - Repeater | 9d661c89 |
| VonCore_Repeater | 4aa24d71 |
| W0SMT-REPEATER | f075e1f3 |
| W4KIP-1 | 8717cd33 |
| W4WXR Repeater | 54509a78 |
| WA4ADG  Repeater | eb7b6e95 |
| WA4WMD-9 Repeater | ce4b570b |
| Walnut Grove-NE-Sevier | cdc1bf1b |
| WB4CDK MC Repeater | 8385b0b9 |
| WD 200 | 025af85c |
| WD8BFW Attic Node | ecd59eea |
| Weston [rdumesh.org] | 298166f1 |
| Westover Repeater | 447b1ba0 |
| WEW_Repeater | d12775c1 |
| Williamsburg Ky | 1108c7d9 |
| Winchester R/1 | 537d40c6 |
| Winchester R/3 | 080b408e |
| WM Truck Repeater | 72fc93c3 |
| WNC ZERO | 69e396d0 |
| Wolfnet Solar Hilltop | 54411995 |
| Woodcliff_Rptr | 486a3820 |
| WorldTourDr Repeater | 6426d149 |
| WY5Outdoor | 4f056da9 |
| WY5Repeater | bcb3338c |
| Xiao_nrf52 Repeater | 270b1e8b |
| xJCross-R1 TennMesh.com | 4f80e5ab |
| xJCross-R2 TennMesh.com | 5b1af0ba |
| XKO Repeater | 691c3dde |
| Yadkinville Repeater | eb6f37a6 |
| ZFCOM_HBM | 65eb8f17 |
| ZFCOM_JKG_R | 878c7172 |
| ZFCOMHQ | 35bb3b01 |
| ⛰️ Skyuka Mtn. ⛰ | 2e87234d |
| ✈️ RDUMesh.org 🚫 | 5615dea1 |
| ⭐️ROBO2⭐️ | 7d244a40 |
| 🌲Longleaf | 915179be |
| 🌳Catalpa Tree | b5b3c316 |
| 🍁Sage🚫 | 04c53f9e |
| 🍁Sage🚫 | 3ea919ff |
| 🍏 Hendersonville | b461eeba |
| 🍒 Forest City 🍒 | fcfccf22 |
| 🍯🌳Honey Oaks | 978d57e7 |
| 🎓CCHS- Liberty Ky✏ | e4a285be |
| 🏠4CL Home Rptr - ncm | aa13bb0e |
| 🏡N4RLS Home Repeater | 01ff1387 |
| 🐂Black Wall St. | fc6c7b6d |
| 🐻 MF (Test) | 9e38fddf |
| 🐻Merrick-Moore | 8e2defb7 |
| 🐿️Apex High | 028f91d9 |
| 👷NorwoodAnd50 | f1cb795a |
| 💥4CL Solar Node ncme | 0103aec5 |
| 📚 Ralph Ellison  | 71d3fbb9 |
| 🔋BNS Rptr 🇺🇸 | e2fef8c4 |
| 😵‍💫 KQ4HLZ  2AB | 201792c7 |
| 🚒 DFD Station 6 | e6d29bf4 |
| 🛜Nash Square | 6b3cb25c |
| 🛜NCSU Arboretum | 26d7f7c9 |
| 🛜The Eastern (Rars.o | 9f673aef |
| 🛠️ Wellwater (rdum | 072de433 |
| 🟠ROBOSCAPE V4🟠 | ba5b0270 |
| 🥐KVR1 Daedalus | faf0122d |
| 🥨KI4OTK (rdumesh.org | 69be406f |
| 🥨Montcastle RDUMesh. | ec523858 |
| 🥨Mysterious Mustard | 86fed8a1 |
| 🥨Orange Puppet | baebd93a |
| 🪂 TNM513CLP | f61f6a8b |

</details>

---

*Report generated from `meshcore.db` which is populated via data from Observers sending to the TennMesh Live Server.*

  </div>
</div>
