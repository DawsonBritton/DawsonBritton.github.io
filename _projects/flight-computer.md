---
title: Dual-Deploy Rocket Flight Computer
category: Personal project
date_range: 2026
order: 2
summary: A custom Arduino-based flight computer that detects launch, burnout, and apogee, fires drogue and main recovery charges, and logs the flight to SD.
role: Sole designer (hardware, firmware, and testing)
status: Bench-verified; will fly in my Level 2 rocket
specs:
  - { label: Processor, value: Arduino Nano (ATmega328P) }
  - { label: Sensors, value: "ICM-20649 IMU (±30 g), BMP280 barometer" }
  - { label: Outputs, value: "Drogue and main pyro channels, buzzer" }
  - { label: Loop rate, value: "20 Hz, measured over 104 s" }
  - { label: Velocity noise, value: "0.14 m/s (filtered, at rest)" }
  - { label: Flash used, value: "30,456 of 30,720 bytes (99%)" }
tools: [C++, Arduino, I²C / SPI, Serial debugging, Multimeter]
card_image: /assets/img/flight-computer/avionics-sled-card.jpg
---

## What it does

The flight computer runs a state machine: **pad → boost → coast → drogue descent → main descent → landed**. It detects launch from the accelerometer, burnout from the acceleration zero-crossing, and apogee from the filtered barometric velocity. Then it fires the drogue charge at apogee and the main charge at a set altitude on the way down. Every flight is logged to an SD card, and a buzzer reports status on the pad with beep codes.

## Hardware

<div class="pair">
{% include figure.html src="/assets/img/flight-computer/avionics-sled.jpg" caption="Built on its avionics sled: Arduino Nano, IMU and barometer breakouts, SD module, buzzer, and pyro terminals." %}
{% include figure.html src="/assets/img/flight-computer/schematic.png" caption="Schematic: two MOSFET-switched pyro channels, the ICM-20649 IMU, BMP280 barometer, and SD card." %}
</div>

{% include figure.html src="/assets/img/flight-computer/pcb-layout.png" caption="PCB layout for the next revision, replacing the hand-wired breakout boards with a single board." %}

## Tested on real hardware

Reasoning about the code missed real defects that only measurement caught, so every result below was **measured on the actual board**:

| Check | Result |
|---|---|
| Launch → boost → coast on real accelerometer thresholds | Burnout detected at 0.93 s |
| Drogue backup timer | Fired at 30.16 s against a 30.000 s spec |
| Main-deploy safety inhibit | Held: main did not fire with the board at ground level |
| Both pyro outputs | Confirmed driving, by multimeter |
| Recovery after a watchdog reset | Resumed mid-flight state from EEPROM, calibration restored exactly |
| Control loop | 20.00 Hz over 104 s |
| False launch detection on the bench | None in 104 s |

The safety inhibit matters most. The previous version of my firmware would have fired **both** charges on a desk, because its main-deploy check was "below 500 ft," and a desk is at 0 ft. Rev 6 requires real, filtered descent before the main can fire.

## Problems I had to solve

**A sensor library bug that hid itself.** The accelerometer library writes one 16-bit register in the wrong byte order, so the library's *default* setting left the accelerometer updating about once every 4 seconds. Reading the value back couldn't reveal it, because the read swaps bytes the same way. I found it by measuring actual output rates, and worked around it with the one setting the byte swap can't affect.

**Stale data after a range change.** After switching the accelerometer's range, the sensor kept serving data at the *old* scale for about 850 ms, reading 8× too high. The firmware now waits for physically plausible readings instead of trusting a fixed delay.

**Fitting in 30 KB.** The flight build uses 99% of the Nano's flash. To make it fit I replaced `sprintf()` with manual digit assembly (≈1.3 KB saved) and replaced `pow()` in the barometric altitude formula with a 4-term series approximation (≈1 KB saved). The approximation is accurate enough because every threshold is a *relative* altitude.

## What's next

- A real apogee-detection test with genuine altitude change
- Fitting and testing the buzzer and beep codes
- First flight in my [Level 2 rocket]({{ '/projects/level-2-rocket/' | relative_url }})

<!-- Add photos: the board, wiring, avionics sled, and bench test setup. -->
