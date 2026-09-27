---
title: "Hailstorm: IREC 10,000 ft Competition Rocket"
category: University rocketry team
date_range: 2025 – 2026
order: 1
summary: Recovery and flight simulation for the Old Dominion University Rocketry Club's IREC entry, an M-class rocket built to hit 10,000 ft with a reaction-wheel payload.
role: Recovery & Simulation Lead, Team 40
status: IREC 2025–2026
image: /assets/img/irec/launch.jpg
image_alt: Hailstorm lifting off the launch rail at IREC
card_image: /assets/img/irec/launch-card.jpg
specs:
  - { label: Motor, value: "AeroTech M1845NT (98 mm)" }
  - { label: Vehicle, value: "101 in long, 5 in diameter, 50.7 lb loaded" }
  - { label: Stability, value: "2.5 cal" }
  - { label: Simulated apogee, value: "10,755 ft" }
  - { label: Max speed, value: "994 ft/s (Mach 0.88)" }
  - { label: Recovery, value: "24 in drogue at apogee, 100 in main at 1,000 ft" }
tools: [OpenRocket, Onshape]
gallery:
  - { src: /assets/img/irec/on-the-rail.jpg, caption: "Hailstorm on the rail at IREC" }
  - { src: /assets/img/irec/team-at-pad.jpg, caption: "The team at the pad before launch" }
  - { src: /assets/img/irec/team-recovery.jpg, caption: "After recovering Hailstorm in the desert" }
  - { src: /assets/img/irec/team-booth.jpg, caption: "Team 40 at the competition expo" }
  - { src: /assets/img/irec/inspection.jpg, caption: "Pre-flight inspection" }
  - { src: /assets/img/irec/poster.jpg, caption: "The team's technical poster" }
---

## The challenge

The Intercollegiate Rocket Engineering Competition (IREC) scores teams on how close they get to a target apogee, in our case 10,000 ft, and on bringing the rocket and its payload back safely. Hailstorm was the Old Dominion University Rocketry Club's second IREC entry. It had a student-built carbon fiber and fiberglass airframe, a reaction-wheel payload on a custom PCB, and a spring-mounted livestream camera.

As Recovery & Simulation Lead I owned two questions: **how high will it go**, and **how does it come down in one piece**.

## Flight simulation

I built and maintained the team's OpenRocket model through several redesigns, keeping component masses (avionics bay, payload, retainers, hardware) current as the design matured, and simulated it for launch conditions at Midland, TX. The final design simulated to **10,755 ft** with a **2.5 caliber** stability margin and a **96 ft/s** rail exit speed.

{% include hailstorm-altitude.html %}
<p class="chart-note">From the February 2026 design iteration, when main deployment was set at 1,500 ft. The final configuration opens the main at 1,000 ft AGL.</p>

## Recovery system

Hailstorm uses **dual deployment** with redundant electronics:

- A **24 in drogue** at apogee keeps the descent fast enough to limit drift from 10,000 ft.
- A **100 in main** opens at **1,000 ft AGL** for a gentle landing.
- Each parachute is deployed by a **black powder ejection charge**: 4.0 g for the drogue and 4.5 g for the main, fired by the primary flight computer (Altus Metrum TeleMega).
- A **larger backup charge** for each event (4.5 g drogue, 5.0 g main) fires on a delay from an independent secondary computer (EasyMini).
- An **asymmetric shear pin** layout keeps the main from deploying early when the drogue separation happens.

<!-- Add: how the flight went on competition day (altitude reached, how recovery performed) and what you'd change. -->
