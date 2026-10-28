---
title: Updates
description: Microsoft Store updates for Windows and manual portable upgrades in SeeLoggyPlus 0.10.0.
---

## Microsoft Store

Microsoft Store manages updates for the Store edition according to your Store settings and service availability.

Use **Help → Open Microsoft Store** to open the [SeeLoggyPlus product page](https://apps.microsoft.com/detail/9PDJ4N28SNT7). Opening the page does not force an immediate update.

After a Store version change, **What's New** shows the bundled release notes once. It does not open on first launch.

## Portable packages

Starting with 0.10.0, portable installations do not check for updates, show update notifications, or download and install replacements. Download newer packages manually from [GitHub Releases](https://github.com/ariefmahendra/seeloggyplus/releases/latest).

1. Close the app and back up the entire data directory.
2. Extract the new package into a new folder.
3. Copy the complete data directory and `launcher.properties`. Preserve any custom `seeloggyplus.dataDir` setting. Do not copy the old `current` pointer or `versions/` directory.
4. Launch the new package and verify settings and server profiles before removing the old installation.

See [Files, Data & Logs](/reference/data-and-logs/) for backup details. Store and portable installations use separate data locations; installing the Store edition does not automatically import portable data.
