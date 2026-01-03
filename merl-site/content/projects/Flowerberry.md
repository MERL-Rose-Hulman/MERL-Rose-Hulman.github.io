+++
title       = "Flowerberry Project Intro"
date        = "2025-10-31T14:00:00-04:00"
lastmod     = "2025-10-31T14:00:00-04:00"
draft       = false
tags        = ["flowerberry", "embedded systems", "robotics", "measurement", "reproducibility", "git", "drivers", "hal"]
categories  = ["documentation", "overview"]
description = "Flowerberry is a modular teaching-and-research stack for real hardware labs, light simulation, and reproducible data workflows, built for embedded, robotics, and measurement courses."
images      = ["/images/flowerberry-hero.jpg"]
slug        = "flowerberry-project-intro"
type        = "page"
aliases     = ["/docs/intro/"]
keywords    = ["flowerberry", "runtime", "embedded", "robotics", "education", "measurement", "data logging", "ci", "hal"]

[params.og]
title       = "Flowerberry — Project Intro"
description = "A modular stack for real hardware labs, light simulation, and reproducible data workflows in embedded systems, robotics, and measurement."
image       = "/images/flowerberry-hero.jpg"
+++

**Master repository:** [https://github.com/MERL-Rose-Hulman/Flowerberry-Runtime](https://github.com/MERL-Rose-Hulman/Flowerberry-Runtime)

## What is Flowerberry?

Flowerberry is a modular teaching-and-research stack that unifies **real hardware labs**, **lightweight simulation**, and **reproducible data workflows**. It targets embedded systems, robotics/control, measurement science, and systems/OS topics.

### Design pillars

- **Reproducible labs:** templates, calibration, uncertainty, plots, and machine-readable metadata  
- **Extensible drivers:** HAL/board packs; capability traits (e.g., `Motor`, `Distance`, `IMU`, `Display`)  
- **Git-native workflows:** PR reviews, CI, and automated docs/artifacts  
- **Local-first privacy:** offline/on-prem friendly; optional private mirrors

## Architecture overview

- **Core Runtime:** Drivers + HAL for Pi/ESP32/STM32/RISC-V; unified I/O (I²C/SPI/UART/PWM/ADC) and capability traits  
- **Experiment Kits:** Course/lab templates with calibration steps, datasheets, plotting scripts, and error models  
- **Data & Tools:** Structured logging (CSV/JSON), plotting, and report export (Markdown/Notion/LaTeX adapters)  
- **DevOps:** GitHub Actions for builds, linting, firmware packaging, and documentation previews/releases  
- **Adapters/Plugins:** Board packages, instrument bridges (DMM/PSU/scope), and peripheral bundles

> Example layout (subject to repository structure):  
> `/runtime/` `/boards/` `/drivers/` `/examples/` `/course-kits/` `/tools/` `/docs/`

## Example workflows

### A. First hardware bring-up
1. Pick a target board (ESP32/STM32/RPi/RISC-V) and install the board pack.  
2. `flowerberry init` to scaffold a sample project and lab template.  
3. `flowerberry flash` and `flowerberry logs` to verify serial and sensor I/O.  
4. `flowerberry record` to capture CSV + metadata (timestamp, board, firmware version).  
5. Commit and open a PR; CI runs build/static checks and publishes a docs preview.

### B. Measurement-ready lab
1. Choose a kit from `course-kits/` (e.g., temperature, light, motor control, closed-loop control).  
2. Fill calibration and uncertainty templates; connect instruments (optional).  
3. Record data; plotting scripts render figures (PNG/SVG).  
4. Export a report/handout (Markdown/Notion/LaTeX).

> Command names are illustrative; refer to the repository tools for the actual CLI.

## Course alignment

- **Intro to Embedded Systems:** GPIO, PWM, I²C/SPI, sensor drivers  
- **Robotics/Controls:** feedback loops, filtering, log analysis, tuning  
- **Measurement & Data:** calibration, uncertainty, reproducible experiments  
- **Systems/OS (optional):** driver abstractions, RTOS/microkernel concepts

## Reproducibility & data workflow

- Standardized file trees for raw data, processed data, and figures  
- Machine-readable metadata (board, firmware, environment, instrument settings)  
- CI checks to validate dataset completeness and plot regeneration

## Roadmap (short)

- [ ] **v0.1:** Minimal HAL + 2–3 experiment kits + logging tools  
- [ ] **v0.2:** Driver/board pack ecosystem, instrument bridges, stable plotting  
- [ ] **v0.3:** Course template library, on-prem deployment guide, classroom examples

## Contributing

- Please read `CONTRIBUTING.md` and style guides before submitting an issue/PR.  
- Documentation: keep examples runnable and include sample datasets.  
- Drivers/board packs: include a minimal reproducible lab and tests.

## Links

- Master repository: [Flowerberry Runtime](https://github.com/MERL-Rose-Hulman/Flowerberry-Runtime)  
- Organization page for related modules and examples

## License

See the repository `LICENSE`.
