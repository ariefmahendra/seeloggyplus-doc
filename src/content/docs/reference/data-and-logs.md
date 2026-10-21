---
title: Files, Data & Logs
description: Where SeeLoggyPlus keeps its data directory, application logs, downloads and how to back it all up.
---

## Data directory

Settings and history live in the **data directory**: `.data` next to the application by
default, or the folder given by the `seeloggyplus.dataDir` system property (used by the
test suite and by portable installs).

| Item | Contents |
| --- | --- |
| `seeloggyplus.db` | SQLite database: recent files, servers, groups, favourites, preferences and log metadata. |
| `.keystore` | Encrypted SSH passwords and key passphrases. |
| `known_hosts` | Trusted SSH host keys. |
| `updates/` | Staging area for downloaded update packages. |

## Application logs

- `logs/seeloggyplus.log` records what the app did; `logs/seeloggyplus-error.log` keeps warnings and errors.
- Attach both files when reporting a problem — they contain the version, the failing operation and the underlying exception.
- Logs are plain text and safe to inspect; they do not contain stored passwords.

## Downloads

- Remote files opened from the File Manager are downloaded to the configured directory (system temp by default) and reopened from there.
- The download name gets a temporary `seeloggyplus-<timestamp>-` prefix; the tab title and copy actions use the original file name and path.
- **Preferences → SSH → Clean Downloads** removes the downloaded copies once you no longer need them.

## Backup and portability

- Back up servers, groups, favourites and recent files by copying the data directory.
- The portable package can be moved to another folder or machine; keep the `current`, `versions/` and launcher files together.

## Safe upgrade to 0.9.0

The database schema remains at version 4. Close the application before copying the complete data directory, including the database, .keystore and known_hosts. Copying only the database loses access to encrypted credentials without the original keystore.

For manual upgrades, extract the package into a new folder, copy the entire data directory and launcher.properties, then run the new launcher. Do not copy the old current pointer or versions directory into the new package. If using a custom data directory, preserve the same seeloggyplus.dataDir setting. Retain the old installation and backup until the upgrade is verified.
