---
title: Installation
description: Install SeeLoggyPlus from the portable packages, run the packaged app on Windows or Linux, or build it from source.
---

SeeLoggyPlus ships as a **portable package** — there is no installer. Unzip it and run the
launcher. Two variants are published for Windows and Linux:

| Package | Notes |
| --- | --- |
| Portable package with JRE | Runs as-is; no Java installation required. |
| Portable package without JRE | Smaller; needs Java 21 or newer on the machine. |

Download the latest packages from the [GitHub Releases](https://github.com/ariefmahendra/seeloggyplus/releases/latest) page.

## Running the packaged application

**Windows**

1. Run `launcher.bat` once. On first start the application creates `SeeLoggyPlus.vbs` next to it.
2. After that, double-click `SeeLoggyPlus.vbs` to start the app without a console window.
3. For diagnostics, run `launcher.bat --console` to keep a console attached.

**Linux**

Run `./launcher.sh`.

## Java and memory

Java is selected in this order: `java.home` in `launcher.properties`, then the bundled
`jre/` folder, then `JAVA_HOME`, then `java` on `PATH`. The maximum heap size is set with
`max.memory.gb` in `launcher.properties` (default: 4 GB) or through
**Settings → Preferences → General**.

## Running from source

Java 21 or newer is required.

```bash
git clone https://github.com/ariefmahendra/seeloggyplus.git
cd seeloggyplus

# Windows
.\gradlew.bat --no-daemon runDev

# Linux/macOS
./gradlew --no-daemon runDev
```

## Online help in 0.8.0

**Help → Help Contents** or **F1** opens the [documentation website](https://seeloggyplus-doc.vercel.app/). Packages no longer include offline HTML help. Reading local logs does not require internet.
