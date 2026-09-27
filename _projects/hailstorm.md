---
title: "Hailstorm: IREC 10,000 ft Competition Rocket"
category: University rocketry team
date_range: 2025 – 2026
order: 1
summary: Recovery and flight simulation for Old Dominion University's Spaceport America Cup entry, an M-class rocket built to hit 10,000 ft and carry a CubeSat payload.
role: Recovery & Simulation Lead
status: IREC 2025–2026
specs:
  - { label: Motor, value: AeroTech M1845 }
  - { label: Airframe, value: "5.2 in, carbon fiber and fiberglass" }
  - { label: Simulated apogee, value: "10,759 ft" }
  - { label: Max speed, value: "994 ft/s (Mach 0.88)" }
  - { label: Recovery, value: "24 in drogue at apogee, 100 in main at 1,500 ft" }
  - { label: Landing speed, value: "24.5 ft/s (simulated)" }
tools: [OpenRocket, Onshape]
---

## The challenge

The Spaceport America Cup's Intercollegiate Rocket Engineering Competition (IREC) scores teams on how close they get to a target apogee, in our case 10,000 ft, and on bringing the rocket and its payload back safely. As Recovery & Simulation Lead I owned two questions: **how high will it go**, and **how does it come down in one piece**.

## Flight simulation

I built and maintained the team's OpenRocket model through several redesigns, keeping component masses (avionics bay, CubeSat payload, retainers, hardware) current as the design matured. The final configuration was simulated for launch conditions at Midland, TX.

{% include hailstorm-altitude.html %}

## Recovery system

Hailstorm uses **dual deployment**:

- A **24 in drogue** at apogee keeps the descent fast enough to limit drift from 10,000 ft.
- A **100 in main** opens at **1,500 ft** to slow the rocket to a simulated **24.5 ft/s** at landing.

<!-- Add more here: parachute and shock cord selection, ejection charge sizing, ground testing, and what happened on competition day. Photos of the recovery bay and ground tests go well here. -->
