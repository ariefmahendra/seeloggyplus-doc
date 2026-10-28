---
title: Installation
description: Install SeeLoggyPlus from Microsoft Store on Windows, use portable packages on Windows or Linux, or build from source.
---

SeeLoggyPlus is available on **Microsoft Store** for Windows. Portable packages remain available for Windows and Linux.

## Windows: Microsoft Store

1. Open [SeeLoggyPlus on Microsoft Store](https://apps.microsoft.com/detail/9PDJ4N28SNT7) and install the app.
2. Launch **SeeLoggyPlus** from the Start menu. Java is included.
3. Microsoft Store manages updates according to your Store settings. **Help → Open Microsoft Store** opens the product page; it does not force an immediate update.

Store and portable installations use separate data locations. Installing the Store edition does not automatically import a portable profile. See [Files, Data & Logs](/reference/data-and-logs/) before moving or backing up data.

## Portable packages: Windows and Linux

Extract the entire ZIP and run its launcher. Two variants are available:

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

## Java and memory for portable packages

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
