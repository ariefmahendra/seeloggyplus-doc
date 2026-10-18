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
- The portable package can be moved to another folder or machine; keep the `help/`, `current`, `versions/` and launcher files together.
