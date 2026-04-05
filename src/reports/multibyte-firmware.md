---
layout: base.njk
title: MultiByte Firmware Upgrade Status Report
description: Which repeaters on the TennMesh network have been upgraded to MeshCore firmware 1.14+ with MultiByte path hash support.
date: 2026-04-05
---

<div class="container-narrow">
  <div class="howto-breadcrumb">
    <a href="/reports/">&larr; Back to Reports</a>
  </div>

  <div class="content-section" style="padding-bottom: 0">
    <div class="blog-post-header">
      <span class="howto-tag howto-tag--config">Firmware</span>
      <h1>MultiByte Firmware Upgrade Status Report</h1>
      <p class="blog-post-meta">April 5, 2026</p>
      <p class="howto-intro">A snapshot of which repeaters on the network are running MeshCore firmware 1.14+ (MultiByte support) and which are still on 1-byte mode and need upgrading.</p>
    </div>
  </div>

  <div class="content-section blog-post-content" style="padding-top: var(--space-6)">

**Generated:** 2026-04-05  
**Data Window:** 2026-03-31 to 2026-04-05  
**Total Transmissions Analyzed:** 30,397  
**Total Unique Repeaters Observed:** 856  
**Observers Contributing Data:** 25

---

<h2 id="background">Background</h2>

MeshCore firmware 1.14+ introduces multi-byte path hash support:

| Path Hash Size | Hops Supported | Firmware Required |
|---|---|---|
| 1-byte (default) | up to 64 hops | Any (pre-1.14 and 1.14+) |
| 2-byte | up to 32 hops | 1.14+ only |
| 3-byte | up to 21 hops | 1.14+ only |

**Key rules:**
- A repeater running firmware **older than 1.14** will **silently drop** 2-byte and 3-byte packets.
- A repeater running firmware **1.14+** forwards **all** packet sizes (1-, 2-, and 3-byte).
- A repeater sending **2-byte or 3-byte adverts** is **confirmed** to be running firmware 1.14+.
- A repeater appearing in the **path of a 2-byte or 3-byte packet** is **confirmed** to be running firmware 1.14+ (it forwarded the packet rather than dropping it).

---

<h2 id="executive-summary">Executive Summary</h2>

| Metric | Count | % of Observed |
|---|---|---|
| Total unique repeaters observed | 856 | 100% |
| **Confirmed firmware 1.14+** (either method) | **287** | **33.5%** |
| Only 1-byte adverts, not seen forwarding multi-byte | 569 | 66.5% |

<div class="note"><p><strong>Note:</strong> Repeaters that send only 1-byte adverts and are not observed forwarding multi-byte packets are <strong>not necessarily</strong> on old firmware — they may simply have <code>path.hash.mode</code> set to 0 (default) and may not have been observed in a multi-byte packet path during the data window. The forwarding method is a stronger confirmation.</p></div>

---

<h2 id="method-1">Method 1: Advert Path Hash Size</h2>

This method identifies repeater firmware level by examining what path hash size each repeater uses in its own advert broadcasts. A repeater advertising with a 2- or 3-byte path hash **must** be running firmware 1.14+.

### Summary

| Advert Mode | Repeater Count | % of Observed |
|---|---|---|
| Only 1-byte adverts (repeaters only) | 443 | 51.8% |
| Sending 2-byte adverts | 170 | 19.9% |
| Sending 3-byte adverts | 14 | 1.6% |
| **Confirmed 1.14+ via adverts** | **178** (unique) | **20.8%** |

> Some repeaters send both 1-byte and 2-byte adverts (e.g., during a transition or reconfiguration). A repeater is counted in the highest mode it has been observed using.

---

### Repeaters Sending 3-Byte Adverts ✅ Confirmed 1.14+, path.hash.mode=2

| Repeater Name | Public Key Prefix |
|---|---|
| 7d92baf9dbda | 7d92baf9 |
| Bilboa Tree | c1f021ec |
| BlueBucketRPTR | b82fb4eb |
| CrowtecV4 | 427505e5 |
| Few SolarXiao | f09aee9c |
| KG4VCF Windrock | 3a4ec6a3 |
| RklsRxbr [rdumesh.org] | d0f7746a |
| TminusTwo 🚀 | 58650cbb |
| Todd Knob V4 | b00b1e50 |
| df85353ab65d | df85353a |
| ✈️MX745 RDUmesh.org | 4f80eb96 |
| 🏠MKV Home Room | c1a0fa60 |
| 🥃🏈Johnny 5 | a9abcc43 |
| 🥃🏈Strong Bad | 54bff67e |

---

### Repeaters Sending 2-Byte Adverts ✅ Confirmed 1.14+, path.hash.mode=1

| Repeater Name | Public Key Prefix |
|---|---|
| (unnamed) | 00000000 |
| 4Wall - NashMe.sh | 4a1156aa |
| AlienWolf | d654d14a |
| BUFFALO MTN - Test | 55c6834f |
| Beckwith Observer | b3a7b345 |
| Big-Rak test repeater | 9b14d1b0 |
| Biscoe RPTR | da9d04e2 |
| BorgNet - Nashme.sh | 8cf7baeb |
| Brentwood Observer | 15647399 |
| Brown Mountain Repeater | c3812702 |
| Brumley Mtn VA #2 | e061d3aa |
| Brumley Mtn VA - KM4HDM | dcf0e11c |
| Bucatini Mobile Rptr | 99b7fd94 |
| Bush Repeater | 2969672f |
| CH Colonial Heights RPT | da10cb5b |
| CROWRAK | e9f38f5b |
| Cane Mountain Repeater | c077331c |
| Cedar Bluff VA Repeater | 92d7de7e |
| Christian Repeater \| Na | 3166fb16 |
| Corina-1 TennMesh.com | 62e7c9a9 |
| Crow🦆ting | b24fe0bb |
| Crush 🍳 | ac29df62 |
| Danbury Repeater | 5cd26c52 |
| Deliverator KR4JRM | 14a81de8 |
| East Bristol Test Repeater | a141aa4a |
| EnglishMtn-Prime-1W | e8cbe1b2 |
| For All Meshkind | 750a8221 |
| GFab Repeater | 6a90d2e0 |
| HB Mobile Repeater | 36606a85 |
| Heltec Repeater | 8a33031d |
| Hermitage Observer | d3c0de03 |
| Hiro Protagonist KR4JRM | a4471103 |
| HoloNet - 1 - Repeater | ce705571 |
| Holston Mtn Repeater | efd63448 |
| Iron Mtn Repeater | cafe69c0 |
| KA4RLW - HOME | 01d3c0de |
| KA4RLW - NODE BLACK | de4dc0de |
| KA4RLW - NODE MOBILE | 02d3c0de |
| KA4RLW - NODE ORANGE | de4dc0de |
| KD4STT-1 TennMesh.com | 8fc0a9fc |
| KF4IVV East OR Repeater | a5df595d |
| KJ4VAD 1W Repeater | aaa9f289 |
| KJ4VAD Reems Creek | ccd10fc5 |
| KK4BYX-R1 1W | e61c49aa |
| KK4BYX-R2~TennMesh.com | d2c2cb53 |
| KK4BYX-R2~Tennmesh.com | 6d19a942 |
| KK4BYX-R3 Tennmesh.com | 49e2ba88 |
| KO4Meshcore Repeater | 3a76f358 |
| KQ4BMS RPTR | 6b03d1d3 |
| KQ4QCZ- WashCo TN Repeater | 3649bfeb |
| KR4APO MC Home | 16f8fe7a |
| KR4CMI - JC - South | 8489480b |
| KR4CMI - PF - South | ea5f7ccd |
| KR4JRM The Raft Rptr | a0053019 |
| Kj4vad - Hamburg Mtn | bbf01bca |
| KnoxCounty Observer | b9742965 |
| KnoxCounty Observer | ccb1b0dd |
| Loves Creek G2 Repeater | b347f442 |
| MC NJC Link Repeater | c1f40179 |
| MC NJC Solar Repeater | a155f151 |
| MKV Portable | 57586123 |
| MOR_OBSERVER | f68792a7 |
| Max 1W Pocket - NashMe.sh | 498e5e2e |
| Max Tree - NashMe.sh | be10ac25 |
| McMinnville Observer | 496fc7f3 |
| MeshMunkee | 54fc7f64 |
| MoTown | 1e02612e |
| Mobile Rptr | bfb5908f |
| Moore Rd \| Hawkins \| TN | 818e5cf9 |
| Music Mountain | 4bfe2576 |
| N4DBL- Allen Mountain | be2b58f0 |
| N4NNX Linville Gorge 1 | aa7b216e |
| N4NNX/R | 288ececf |
| N4PPG Portable Companion | 19c86c60 |
| N4PPG Tag 1 | e60c7e42 |
| N4ZZQ Actual | 41d9250d |
| NAVL Station G2 | caac4499 |
| OJR Repeater | 42045e29 |
| OM Base | a169bc58 |
| Oakwood - NashMe.sh | 802b262f |
| Ober Mtn Test - 78 | 0be4aee4 |
| OhmsRepeater | 06e83db8 |
| OhmsRepeater3 | 68437747 |
| Ohms_Gateway | 839ddfbb |
| Pedal Harder🚲🚴 | 26d17b32 |
| Pike Hill Repeater | 91bed618 |
| Pilot Gel Pen nashme.sh | a8d3eea9 |
| Planet Qo'noS - Nashme.sh | 271554cb |
| Pores Knob Repeater | 716ead4b |
| Project Hail Mary | 25a86a03 |
| RAK4631 Repeater | bc4ebd87 |
| RIDGECORE RPTR I | 12a40168 |
| RIDGECORE VI v4 TEST | d8ae0dba |
| RR_REP_5A57_GREENEVILLE | 5a57973f |
| RR_REP_Exit 23 I81 | efcdf782 |
| RR_SOLAR_REP_TUSCULUM | 8e021d53 |
| RR_Solar Greene Mtn TN | fd5dc863 |
| Rat Thing B782 - KR4JRM | ea098c3c |
| Richlands VA Repeater | 4b139587 |
| Richlands/Brumley Link | 23771b53 |
| SATCOM 1R 1W Uplink | cdc52e6d |
| SC-Repeater-WEHOOPER4 | 44ba7ae6 |
| SHRT Repeater | 15db023e |
| SWVA Solar Xiao+ Kit | 1e0edad8 |
| SWVA • Richlands • | ee0568b4 |
| SWVA • Richlands • | 6d208a5c |
| Site Finder | 3bef486e |
| Skuba Xiao TennMesh.com | 92906a0e |
| Sky Beam 🛸 | da9d6fc9 |
| Sky Comms | 66e2432e |
| Sky Deck ⚡ | c25e1e3e |
| Sky Indicator 🌐 | 2d9f8a73 |
| Sky Track 🚀 | 9dea8c07 |
| Sky Wiz 🛩️ | b40492c2 |
| Smalls Room Server | 1450862a |
| Spring City Repeater | cfea6e89 |
| TC² \| McMinn Observer | 6782dd40 |
| TNM150LGE N Knox RPTR | d690b48f |
| Tarheel Backhaul | c9b4f226 |
| Terrapin Station | 6d25ca28 |
| Test Repeater | 9720ebcf |
| The Nexus - nashme.sh | 07d68024 |
| TheCrowsNest | a81d9c29 |
| Timbercrest \| TNM000BSS | 69ff29c9 |
| Tree Tower Repeater | 4e3d5202 |
| Tri Star Eastcore | 388a3ddf |
| Tri-Cities Crossing Rep | 45388f27 |
| Trojan-1 RPTR | abf774cd |
| Tropo🦆TennMesh.com | 1776a6cf |
| WBRTN | a277c3f0 |
| WEHOOPER4-V4 | b573e2cb |
| WIL_RPTR_V4 | f2319130 |
| WIL_RPTR_tennmesh.com | 0dd96b6e |
| Walker Mountain Rptr | a9b22e25 |
| WhiteOak - TennMesh.com | eac676e8 |
| William T RAKer | 1e382b2f |
| Winchester R/2 | 8bd43db7 |
| Winchester-3 | d4166538 |
| WolfLair Solar Escape | 8ac06f95 |
| Yeti - 15 | cc15e955 |
| Yeti - 78 | c04eaeac |
| iGGy MC Tower 1 | 106f502b |
| iGGy MC Tower 2 | 20e9d37f |
| iGGy \| TNMesh.org | dd53af5f |
| kg4ojl Mini Rep6 | 3f62a2c9 |
| kg4ojl Rep2 | a71489f3 |
| smopuim86-PiRoom-RPT | 05ebf18c |
| west end girls | d4027da9 |
| xJCross Observer | 03593fd4 |
| xJCross TTU Observer | b90f60b4 |
| ☁️ REBEL BASE BESPI | 10c4e9e0 |
| ✌🏻KR4HNK RPTR2✌ | db0170ac |
| 🌲Cedar☀️ | de7e5d0c |
| 🌲Pine☀️ | 1499235f |
| 🌿 REBEL BASE ENDOR | 17a2c5fe |
| 🌿Elm☀️ | 80ee0286 |
| 🐐N4PPG Barn | 7f06701a |
| 👾-FETT-1 | 245d90b2 |
| 📻4CLwismesh Pocket | 3b4f7515 |
| 🚒 DFD Station 7 | 67a29ffc |
| 🚙smopuim86-Cager-RPT | a9c77b30 |
| 🪂 TNM511CLP | 81e02814 |
| 🪂 TNM512CLP | f7e72aa7 |
| 🪾Walnut | b631b970 |

---

### Repeaters Sending Only 1-Byte Adverts ⚠️ Not Confirmed via Adverts

These repeaters were observed sending only 1-byte adverts. Non-repeater devices (companions, room servers, trackers, etc.) are excluded. This may indicate firmware older than 1.14, or firmware 1.14+ with `path.hash.mode` left at the default of 0. See Method 2 to cross-reference which of these are still confirmed as 1.14+.


| Repeater Name | Public Key Prefix |
|---|---|
| -R | 9b97bd6f |
| 165 Repeater | 3f0a76a1 |
| 443a8fa54c98 | 443a8fa5 |
| 6684 MM E Link | 7c935dc6 |
| 6684 Rptr Mt. Mitchell | 628e2051 |
| 7 Oaks Swim | e92a9be0 |
| 9B | 9b2a6bc2 |
| @izzyisaac V4 Observer | cf4d1e87 |
| ADS Home Repeater | 0cd35cef |
| AG1+ Station 🏳️‍ | f249e952 |
| ag_p_sol_rep_0 | 5041409c |
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
| Bristol Va Wraith | 66dff7e4 |
| BSol Repeater | f1c1c453 |
| Buck Repeater | d0782027 |
| BWrep | c2b033cb |
| Carlyle Repeater | 1507281b |
| Cascade Falls Repeater | cf62c5c5 |
| CCB Repeater | fee9b86c |
| CCRep1 | a095bb55 |
| CDM Repeater | 22557dbd |
| Central Cherokee Repeat | a0304cf2 |
| Central High School | R | 231e1955 |
| CharlestonTN TennMesh.c | a235f348 |
| CleVegas Repeater | aec795dd |
| Countryside Home Rptr | dbd72af8 |
| COVE MT REPEATER | 4ca42e1a |
| Crabtree Valley Repeate | 5f03738d |
| Craigs Creek | f8f847dc |
| Crestwood Hills | Knox | 78f06103 |
| Cuckoo Marietta Repeate | 151ab7f5 |
| cxAttic | 11058ba3 |
| Daboo Winnipeg Ct | 90b91fab |
| DavysTech | RPT-1 | 746021d8 |
| DavysTech | RPT-2 | c77591b5 |
| Delta Flyer - nashme.sh | af574da7 |
| DeuceRepeater - TNM300P | 5ecaab39 |
| DH Hill | 4ca91412 |
| diggitydiggitydiggity | 88aa8a5a |
| DKX Repeater | 09d6ce2d |
| Doughton | 1f953b97 |
| Drews Repeater | c5eba7d0 |
| DRX1 | c9ed7099 |
| DT Somerset | 0708a44b |
| DW07AtticRpt | a684a287 |
| E London | c8de894e |
| East End Boys | cd414b80 |
| East OR  Repeater | 862fce87 |
| Eastview✝️Repeated | 58b9bd46 |
| Elizabethtown Observer | d1d5bf95 |
| Ellerbe Repeater | edbcf5a6 |
| ENCMesh 28560 DownTown | 9b2a78a8 |
| ENCMesh 28562 Hospital | b23d2fb5 |
| ENCMesh Jasper 2 | d86112a8 |
| ENCMesh LOW Grantsboro | f8cf3b6e |
| ENCMesh NewBern NE LP | 60164b08 |
| ENCMesh-Experiment | ec11b7f7 |
| ENCMesh.com 28529 | 2d67f81e |
| ENCMesh.com 28560 #4 | 518948ec |
| ENCMesh.Com Jasper | 30db2926 |
| ENCMesh.com Trenton NC | 8783734b |
| Eno-RPT1 | 23071210 |
| eTac RPTR | c49d72bf |
| Fairgarden Repeater-Sev | 2a655736 |
| Faith Repeater | 883fd210 |
| Fishers Peak Repeater | 33336074 |
| FlamingDragon2 🔥 | 25463fd5 |
| FlamingDragon3 🔥 | a3d745a6 |
| FlamingDragon4 🔥 | 97e77e92 |
| FoHi To Knox | 53146ca4 |
| Fort Sanders Repeater | c5e28f5f |
| Franklin Rptr | Knox | 9f688e71 |
| GMD_804_RPTR | e5039f8d |
| Golgi Apparatus | c2c46afe |
| GP Repeater | 3e1a9832 |
| Gray Hawk KY💧RPT | 2b66ff7d |
| Gray Repeater | 60b489a0 |
| Green Hill Backup | e377f44d |
| Green Hill Repeater | 4f9a9470 |
| Green Hills Repeater | b02bf53b |
| Green Mountain Repeater | b306c422 |
| Grub Exp Solar | 23f0fcb9 |
| GrubWXsom | 026fa27b |
| HamShackTV Repeater TNM | 2719339b |
| HarborBreeze Repeater | 68de04ed |
| Harlan Ky | f5ec1f47 |
| Heltec Repeater | 85b4722b |
| Hendrix Mtn Repeater | db9f8997 |
| Herm1R Repeater | 5c818ce1 |
| Hilltop | fa5ddd29 |
| Hood 1 Repeater | 2a6dbb5f |
| Hood 2 Repeater | 51ebf7ae |
| Hot2TrotMobile.L1 | e6322b30 |
| House Mtn TennMesh.com | 8980cc79 |
| HuntersCrossingWioRepea | edb1174a |
| Hville Repeater T114 | 3ec32622 |
| iGGy War Wagon | 27a5ab80 |
| III_MC_OR_SL | 4c2f6435 |
| Incisive-GVP | dd1dbbab |
| iX-Repeater-1 | 1bee37c3 |
| iX-Repeater-2 | 0cff1735 |
| iX-Repeater-Solar | 976e10c5 |
| Jabez KY T-114 Rpt | 281e8519 |
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
| KD4STT-3 TennMesh.com | ead9b567 |
| KE4GJG 1W Repeater | b2ecdec5 |
| KE4MH Repeater-1 | 1eda18a1 |
| Kenansville Repeater | 3791c999 |
| Kenwyn_Pass | b63a7eab |
| KF4FLY-R1 | 447b1ba0 |
| KF4IVV Mobile Repeater | 7dd73a51 |
| KF4OFI Repeater | 8c124059 |
| KF4OFI~RPTR~2 | 7517b6e5 |
| kg4ojl Rep1 | a6e802f4 |
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
| KQ4HLZ 1W Hilltop | 2a92473b |
| KQ4HLZ YAG | a6ccc2a6 |
| KQ4KXA V4 Repeater | 8fd4a69f |
| KQ4MHE Newfound | aeffc2af |
| KQ4ZMX-RPT | 9a734e8e |
| KQ4ZMX-RPT-1 | 0c56919c |
| KR4CMI - PF - North | e96b33b0 |
| KR4MT Repeater | 19239cd0 |
| KX4BE rptr | ebcf5aba |
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
| Maryville Solar 7 | 3db282b0 |
| MasRep-RAK1W | 70a2662e |
| Mckee Repeater | 8d3cf43c |
| McMesh Clan - Castle | a7f4f2b0 |
| McQuailerton Farms #2 | d925aa84 |
| mdm | 01017a58 |
| Meshugga - nashme.sh | 7b90e544 |
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
| North Durham Mesh | 8ffcd71d |
| Oakley Repeater - 1WB | 133e4c45 |
| Oakley Repeater - 1WF | 3a94dfda |
| OhmsRepeater2 | ab415cf3 |
| OhmsRepeater4 | 25947a10 |
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
| PH | Luckfox | fad95ca9 |
| PH | Station G2 | 510ceccf |
| PH | Xiao 1W | af7525aa |
| Pilot Mt Ky Rptr | ac62f405 |
| PineMtn | abcf581a |
| PNA SL RPTR | 5cdf78da |
| PORT | 2f114d49 |
| Posey Point | b0e437ad |
| PriceBase | 33d40409 |
| Prometheus LEXINGTON KY | 9964092d |
| Q University | 79e7716a |
| RAK Tag CM Repeater | 826235a3 |
| RAK4631 Repeater | 46f8d5bd |
| Raleigh.Woodcrest.02 | 59bff5f3 |
| RARSfest-IN | 73d08ab9 |
| RARSfest-OUT | 0da708db |
| RedRepeater | b3051033 |
| Rennert Repeater | cf13f290 |
| Reservoir Knob Somerset | efd38f09 |
| ReXWorld Repeater | 40df421a |
| RH-Spare | 3da46236 |
| Riceville Rd | a06c1828 |
| Richmond, Ky Repeater | 2df7ae8c |
| RIDGECORE RPTR II | 0fe4f176 |
| RIDGECORE RPTR III | 84d54fed |
| RidgeCore RPTR IV | dbbeb0e6 |
| RIDGECORE RPTR V | c0e13a14 |
| RoamingRepeater | c27f9508 |
| Roboscape ☀️ Solar | 53e61b54 |
| Rockingham NC 1W Repeat | 99cad376 |
| Routkwon | 4479a6f9 |
| RoyalPines Repeater | 07cb0e8a |
| RPTR: OptiMESH Prime | 67fcec27 |
| RR_SOLAR_Greene_Mtn2 | 549d3d4a |
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
| Sevier-78 T | cb616bac |
| Sevier-78-Prime1w | eb956ab8 |
| Sevier-Observer | 6da8ec0a |
| SG V Repeater | d6d52deb |
| sharpshout FlagPole | 6a7c068a |
| Shepherd Repeater | d7171162 |
| Sherron Mesh | bb37bba6 |
| Short Mountain | 3d9cf2bc |
| ShortBus Meshcore Repea | 6d16c503 |
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
| TNM360BXV | 1565851d |
| TNM470YLM - Rvrsde Rpt | b77bd23c |
| TNM670AVH-Eagleton | e9aafcad |
| Topsail Fire Tower RPTR | ec458837 |
| TP1 TennMesh.com | 18bee3a1 |
| Tri Star Repeater | fd88c48d |
| Trojan-2 RPTR | b34c2ea0 |
| Tropo🦆TennMesh.com | 41a4b619 |
| Turner Mountain Repeate | febc92af |
| Unkown | 796163fb |
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
| WD 20< | 025af85c |
| Weston [rdumesh.org] | 298166f1 |
| WEW_Repeater | d12775c1 |
| Williamsburg Ky | 1108c7d9 |
| Winchester R/1 | 537d40c6 |
| Winchester R/3 | 080b408e |
| WM Truck Repeater | 72fc93c3 |
| WNC ZERO | 69e396d0 |
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
| 🌳Catalpa | b5b3c316 |
| 🌺Redbud | 082151f6 |
| 🍁Sage🚫 | 04c53f9e |
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
| 📚 Ralph Ellison | 71d3fbb9 |
| 🔋BNS Rptr 🇺🇸 | e2fef8c4 |
| 😵‍💫 KQ4HLZ  1AB | 7398d66f |
| 😵‍💫 KQ4HLZ  2AB | 201792c7 |
| 😵‍💫KQ4HLZ 3AB | fecf043a |
| 🚒 DFD Station 6 | e6d29bf4 |
| 🛜Nash Square | 6b3cb25c |
| 🛜NCSU Arboretum | 26d7f7c9 |
| 🛜The Eastern (Rars.o | 9f673aef |
| 🟠ROBOSCAPE V4🟠 | ba5b0270 |
| 🥐KVR1 Daedalus | faf0122d |
| 🥨KI4OTK (rdumesh.org | 69be406f |
| 🥨Montcastle RDUMesh. | ec523858 |
| 🥨Mysterious Mustard | 86fed8a1 |
| 🥨Orange Puppet | baebd93a |

---

<h2 id="method-2">Method 2: Packet Forwarding Analysis</h2>

This method identifies repeaters confirmed to be running firmware 1.14+ by checking whether they appear in the **path of 2-byte or 3-byte packets**. Since pre-1.14 firmware silently drops multi-byte packets, any repeater observed in the forwarding path of such a packet **must** be running firmware 1.14+. This method can confirm repeaters that use `path.hash.mode=0` (1-byte adverts) but are nonetheless updated.

### Summary

| Metric | Count |
|---|---|
| Repeaters confirmed forwarding 2-byte packets | 210 |
| Repeaters confirmed forwarding 3-byte packets | 64 |
| **Total confirmed 1.14+ via forwarding** | **214** (unique) |

---

### Repeaters Confirmed Forwarding 3-Byte Packets ✅ Confirmed 1.14+

| Repeater Name | Public Key Prefix |
|---|---|
| 4Wall - NashMe.sh | 4a1156aa |
| 6684 Rptr Mt. Mitchell | 628e2051 |
| 7d92baf9dbda | 7d92baf9 |
| Athey Tower Repeater | 20ae2685 |
| Bilboa Tree | c1f021ec |
| Brumley Mtn VA - KM4HDM | dcf0e11c |
| Cane Mountain Repeater | c077331c |
| Cascade Falls Repeater | cf62c5c5 |
| Countryside Home Rptr | dbd72af8 |
| Crestwood Hills \| Knox | 78f06103 |
| Fairgarden Repeater-Sevier | 2a655736 |
| Faith Repeater | 883fd210 |
| Few SolarXiao | f09aee9c |
| Fishers Peak Repeater | 33336074 |
| House Mtn TennMesh.com | 8980cc79 |
| KA4RLW - HOME | 01d3c0de |
| KD4STT-1 TennMesh.com | 8fc0a9fc |
| KG4VCF TN QTH | f9ed2e07 |
| KG4VCF Windrock | 3a4ec6a3 |
| KJ4VAD - Grants MTN | 3825ea6c |
| KO4Meshcore Repeater | 3a76f358 |
| KR4JRM The Raft Rptr | a0053019 |
| Mint Hill Repeater | afb39b3d |
| Music Mountain | 4bfe2576 |
| N4NJM Whiterun | 0a183d72 |
| North Durham Mesh | 8ffcd71d |
| Oakwood - NashMe.sh | 802b262f |
| PCB_Rob Repeater | 41778bde |
| Peater | 17d3162e |
| Planet Qo'noS - Nashme.sh | 271554cb |
| Pores Knob Repeater | 716ead4b |
| RR_Solar Greene Mtn TN | fd5dc863 |
| SWDG-2A RPTR KE5KUP | 39055dd9 |
| Sauratown Repeater | 7fcb134e |
| SenseCap_Solar Repeater | 3e0b4b7a |
| Sevier-78 T | cb616bac |
| Sevier-78-Prime1w | eb956ab8 |
| Skuba Xiao TennMesh.com | 92906a0e |
| Tarheel Backhaul | c9b4f226 |
| Tarheel Commons | 108df987 |
| TheCrowsNest | a81d9c29 |
| TminusTwo Attic 1W 🏠 | 852a0098 |
| Tree Tower Repeater | 4e3d5202 |
| Tropo🦆TennMesh.com | 41a4b619 |
| Tropo🦆TennMesh.com | 1776a6cf |
| WA4WMD-9 Repeater | ce4b570b |
| WEW_Repeater | d12775c1 |
| WIL_RPTR_tennmesh.com | 0dd96b6e |
| Walnut Grove-NE-Sevier | cdc1bf1b |
| WolfLair Solar Escape | 8ac06f95 |
| XKO Repeater | 691c3dde |
| df85353ab65d | df85353a |
| eTac RPTR | c49d72bf |
| iGGy MC Tower 2 | 20e9d37f |
| sharpshout FlagPole | 6a7c068a |
| west end girls | d4027da9 |
| ⛰️ Skyuka Mtn. ⛰ | 2e87234d |
| 🌲Pine☀️ | 1499235f |
| 🌿Elm☀️ | 80ee0286 |
| 🐐N4PPG Barn | 7f06701a |
| 🐿️Apex High | 028f91d9 |
| 💥4CL Solar Node ncmesh.net | 0103aec5 |
| 🛜The Eastern (Rars.org) | 9f673aef |
| 🥃🏈Strong Bad | 54bff67e |

---

### Repeaters Confirmed Forwarding 2-Byte Packets ✅ Confirmed 1.14+

| Repeater Name | Public Key Prefix |
|---|---|
| -R | 9b97bd6f |
| 443a8fa54c98 | 443a8fa5 |
| 4Wall - NashMe.sh | 4a1156aa |
| 6684 Rptr Mt. Mitchell | 628e2051 |
| 7d92baf9dbda | 7d92baf9 |
| ARK West AVL | 48e7dade |
| Athey Tower Repeater | 20ae2685 |
| BUFFALO MTN - Test | 55c6834f |
| Beaverdam9 | a91bd165 |
| Beckwith Observer | b3a7b345 |
| Big-Rak test repeater | 9b14d1b0 |
| Bilboa Tree | c1f021ec |
| Blue Ridge Rd | 4d707df8 |
| BorgNet - Nashme.sh | 8cf7baeb |
| Brown Mountain Repeater | c3812702 |
| Brumley Mtn VA #2 | e061d3aa |
| Brumley Mtn VA - KM4HDM | dcf0e11c |
| Bucatini Mobile Rptr | 99b7fd94 |
| Bush Repeater | 2969672f |
| CCB Repeater | fee9b86c |
| CH Colonial Heights RPT | da10cb5b |
| Cane Mountain Repeater | c077331c |
| Cascade Falls Repeater | cf62c5c5 |
| Cedar Bluff VA Repeater | 92d7de7e |
| Christian Repeater \| Na | 3166fb16 |
| Countryside Home Rptr | dbd72af8 |
| Crestwood Hills \| Knox | 78f06103 |
| Crush 🍳 | ac29df62 |
| Danbury Repeater | 5cd26c52 |
| Delta Flyer - nashme.sh | af574da7 |
| E London | c8de894e |
| East Bristol Test Repeater | a141aa4a |
| East End Boys | cd414b80 |
| Ellerbe Repeater | edbcf5a6 |
| EnglishMtn-Prime-1W | e8cbe1b2 |
| Fairgarden Repeater-Sevier | 2a655736 |
| Faith Repeater | 883fd210 |
| Few SolarXiao | f09aee9c |
| Fishers Peak Repeater | 33336074 |
| For All Meshkind | 750a8221 |
| GFab Repeater | 6a90d2e0 |
| Golgi Apparatus | c2c46afe |
| Gray Hawk KY💧RPT | 2b66ff7d |
| HB Mobile Repeater | 36606a85 |
| HoloNet - 1 - Repeater | ce705571 |
| House Mtn TennMesh.com | 8980cc79 |
| Iron Mtn Repeater | cafe69c0 |
| Jazzy Bear Repeater | deabd535 |
| K4JAH Solar Repeater 01 | 8a510f50 |
| K4KI Repeater | eac6d52b |
| KA4RLW - HOME | 01d3c0de |
| KD4STT-1 TennMesh.com | 8fc0a9fc |
| KE4GJG 1W Repeater | b2ecdec5 |
| KE4MH Repeater-1 | 1eda18a1 |
| KF4IVV Mobile Repeater | 7dd73a51 |
| KG4VCF Home Tower | ac3f079e |
| KG4VCF TN QTH | f9ed2e07 |
| KG4VCF Windrock | 3a4ec6a3 |
| KJ4AKB Repeater | 1661f935 |
| KJ4VAD - Elk Mtn | 244e3ee6 |
| KJ4VAD - Grants MTN | 3825ea6c |
| KJ4VAD 1W Repeater | aaa9f289 |
| KJ4VAD Reems Creek | ccd10fc5 |
| KJ4VAF Repeater | 3547f7f1 |
| KK4BYX-R1 1W | e61c49aa |
| KK4BYX-R2~TennMesh.com | d2c2cb53 |
| KK4BYX-R3 Tennmesh.com | 49e2ba88 |
| KK4GGK-2 Lone Mnt | 1d9518f6 |
| KM4BLG Mobile Repeater | b58bca9f |
| KM4DNU1 | f93dbf6d |
| KO4Meshcore Repeater | 3a76f358 |
| KQ4BMS RPTR | 6b03d1d3 |
| KQ4HLZ 1W Hilltop | 2a92473b |
| KQ4HLZ YAG | a6ccc2a6 |
| KQ4KXA V4 Repeater | 8fd4a69f |
| KQ4QCZ- WashCo TN Repeater | 3649bfeb |
| KQ4ZMX-RPT-1 | 0c56919c |
| KR4CMI - JC - South | 8489480b |
| KR4CMI - PF - North | e96b33b0 |
| KR4CMI - PF - South | ea5f7ccd |
| KR4JRM The Raft Rptr | a0053019 |
| Kd4afw/R1 | 43665248 |
| Kenwyn_Pass | b63a7eab |
| Kj4vad - Hamburg Mtn | bbf01bca |
| Lions Park Raleigh | cc1b5fcf |
| MC NJC Link Repeater | c1f40179 |
| MC NJC Solar Repeater | a155f151 |
| MJL9-Swannanoa-R2 | 9a077292 |
| Max Tree - NashMe.sh | be10ac25 |
| Midtown Repeater - Nash | ee38644f |
| Mint Hill Repeater | afb39b3d |
| Mobile Rptr | bfb5908f |
| Monticello 150 | cc6ba43c |
| Mt Vernon Ky Rptr | b13ab84c |
| Museum of Life&Science | 8d78424a |
| Music Mountain | 4bfe2576 |
| N1FJB Repeater | 8fb65c9b |
| N4DBL- Allen Mountain | be2b58f0 |
| N4NJM Whiterun | 0a183d72 |
| N4NNX/R | 288ececf |
| NAVL Station G2 | caac4499 |
| NESHER R1 | 2cdcd3e9 |
| NGPeater | 68a7d8fb |
| North Durham Mesh | 8ffcd71d |
| Oakley Repeater - 1WB | 133e4c45 |
| Oakwood - NashMe.sh | 802b262f |
| Ober Mtn Test - 78 | 0be4aee4 |
| OhmsRepeater | 06e83db8 |
| OhmsRepeater2 | ab415cf3 |
| OhmsRepeater4 | 25947a10 |
| Old Fort Repeater 🏰 | 2225ef30 |
| Peater | 17d3162e |
| Pike Hill Repeater | 91bed618 |
| Pilot Gel Pen nashme.sh | a8d3eea9 |
| Planet Qo'noS - Nashme.sh | 271554cb |
| Pores Knob Repeater | 716ead4b |
| Posey Point | b0e437ad |
| Project Hail Mary | 25a86a03 |
| RARSfest-OUT | 0da708db |
| RIDGECORE RPTR I | 12a40168 |
| RIDGECORE VI v4 TEST | d8ae0dba |
| RR_SOLAR_Greene_Mtn2 | 549d3d4a |
| RR_SOLAR_REP_TUSCULUM | 8e021d53 |
| RR_Solar Greene Mtn TN | fd5dc863 |
| Richlands VA Repeater | 4b139587 |
| Richlands/Brumley Link | 23771b53 |
| RklsRxbr [rdumesh.org] | d0f7746a |
| SATCOM 1R 1W Uplink | cdc52e6d |
| SHRT Repeater | 15db023e |
| Sauratown Repeater | 7fcb134e |
| SenseCap_Solar Repeater | 3e0b4b7a |
| Sevier-78 T | cb616bac |
| Sevier-78-Prime1w | eb956ab8 |
| Skuba Xiao TennMesh.com | 92906a0e |
| South AVL Repeater | 0e12a975 |
| Spring City Repeater | cfea6e89 |
| Swan SenseCap_Solar Rep | bc5d3cef |
| TNM150LGE N Knox RPTR | d690b48f |
| Tarheel Backhaul | c9b4f226 |
| Terrapin Station | 6d25ca28 |
| Test Repeater | 9720ebcf |
| TheCrowsNest | a81d9c29 |
| TheHill TennMesh.com | bbf6fbe9 |
| TminusTwo Attic 1W 🏠 | 852a0098 |
| Todd Knob V4 | b00b1e50 |
| Tree Tower Repeater | 4e3d5202 |
| Tri Star Eastcore | 388a3ddf |
| Tri Star Repeater | fd88c48d |
| Tri-Cities Crossing Rep | 45388f27 |
| Trojan-1 RPTR | abf774cd |
| Tropo🦆TennMesh.com | 41a4b619 |
| Tropo🦆TennMesh.com | 1776a6cf |
| Turner Mountain Repeater | febc92af |
| Vango - Repeater | 9d661c89 |
| WA4WMD-9 Repeater | ce4b570b |
| WBRTN | a277c3f0 |
| WD 20< | 025af85c |
| WIL_RPTR_V4 | f2319130 |
| WIL_RPTR_tennmesh.com | 0dd96b6e |
| WNC ZERO | 69e396d0 |
| Walker Mountain Rptr | a9b22e25 |
| Walnut Grove-NE-Sevier | cdc1bf1b |
| Weston [rdumesh.org] | 298166f1 |
| WhiteOak - TennMesh.com | eac676e8 |
| Williamsburg Ky | 1108c7d9 |
| Winchester R/1 | 537d40c6 |
| WolfLair Solar Escape | 8ac06f95 |
| XKO Repeater | 691c3dde |
| Xiao_nrf52 Repeater | 270b1e8b |
| Yadkinville Repeater | eb6f37a6 |
| df85353ab65d | df85353a |
| eTac RPTR | c49d72bf |
| iGGy MC Tower 1 | 106f502b |
| iGGy MC Tower 2 | 20e9d37f |
| iGGy War Wagon | 27a5ab80 |
| iX-Repeater-1 | 1bee37c3 |
| iX-Repeater-2 | 0cff1735 |
| iX-Repeater-Solar | 976e10c5 |
| kg4ojl Mini Rep6 | 3f62a2c9 |
| kg4ojl Rep1 | a6e802f4 |
| kg4ojl Rep2 | a71489f3 |
| ota test 🚫 | 56c44225 |
| sharpshout FlagPole | 6a7c068a |
| smopuim86-PiRoom-RPT | 05ebf18c |
| west end girls | d4027da9 |
| xJCross Observer | 03593fd4 |
| xJCross-R1 TennMesh.com | 4f80e5ab |
| ☁️ REBEL BASE BESPI | 10c4e9e0 |
| ⛰️ Skyuka Mtn. ⛰ | 2e87234d |
| ✈️MX745 RDUmesh.org | 4f80eb96 |
| 🌲Pine☀️ | 1499235f |
| 🌿Elm☀️ | 80ee0286 |
| 🍏 Hendersonville | b461eeba |
| 🍯🌳Honey Oaks | 978d57e7 |
| 🏠4CL Home Rptr - ncmesh.net | aa13bb0e |
| 🐐N4PPG Barn | 7f06701a |
| 🐻 MF (Test) | 9e38fddf |
| 🐻Merrick-Moore | 8e2defb7 |
| 🐿️Apex High | 028f91d9 |
| 💥4CL Solar Node ncmesh.net | 0103aec5 |
| 🚒 DFD Station 6 | e6d29bf4 |
| 🚒 DFD Station 7 | 67a29ffc |
| 🚙smopuim86-Cager-RPT | a9c77b30 |
| 🛜Nash Square | 6b3cb25c |
| 🛜The Eastern (Rars.org) | 9f673aef |
| 🥃🏈Strong Bad | 54bff67e |
| 🪂 TNM511CLP | 81e02814 |
| 🪂 TNM512CLP | f7e72aa7 |
| 🪾Walnut | b631b970 |

---

<h2 id="conclusions">Combined Conclusions</h2>

| Status | Count | % of All Observed |
|---|---|---|
| **Confirmed firmware 1.14+** (either method) | **287** | **33.5%** |
| — Confirmed via 2-byte or 3-byte adverts | 178 | 20.8% |
| — Confirmed via forwarding multi-byte packets | 214 | 25.0% |
| — Confirmed via both methods | 105 | 12.3% |
| Sending only 1-byte adverts, not seen forwarding | 569 | 66.5% |

---

*Report generated from `meshcore.db` using packet raw_hex path hash mode analysis.*  
*Path hash mode determined from byte 1 of raw packet: bits[7:6] = mode (0=1-byte, 1=2-byte, 2=3-byte), bits[5:0] = hop count.*

  </div>
</div>
