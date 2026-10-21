---
title: Updates
description: Automatic and manual update checks, background downloads, staged restarts with rollback safety, and the What's New dialog.
---

Use **Help → Check for Updates...** for a manual check, or leave the automatic options
enabled.

| Option | Behavior |
| --- | --- |
| Check for Updates Automatically | Checks in the background after start-up; a link appears in the status bar when a newer release exists. |
| Download Updates Automatically | Downloads the package in the background so the next restart can install it. |
| Update dialog | Shows the new version, the package name and size, the release notes and the download progress, with **Download**, **Skip this version**, **Later**, **Release Notes** and **Close**. |
| Applying an update | After the download, confirm the restart. The new version is staged next to the current one and activated on restart. |
| Rollback safety | Versions are installed side by side (`versions/<version>` with a `current` pointer), so a failed start can fall back to the previous version. |
| What's New | After upgrading, a dialog summarises the changes of the new version. |

:::tip
If a download fails (offline, proxy, blocked host) the installation is left untouched and
you can retry later. Nothing is replaced until a verified package has been fully
downloaded.
:::

## Upgrading to 0.9.0

The database schema remains at version 4 and existing data and credentials are retained. Older JSON/XML preferences remain a fallback for the default Formatted mode. Back up the complete data directory before manual upgrades. Tail history now uses temporary disk space; normal session close removes its spool files, while forced exits may leave them behind. Help continues to open the website.
