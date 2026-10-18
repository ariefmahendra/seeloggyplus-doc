---
title: Changelog
description: Release notes for SeeLoggyPlus — the features, fixes and improvements in every release.
---

User-facing highlights of every release. Full notes and downloads live on the
[GitHub Releases](https://github.com/ariefmahendra/seeloggyplus/releases) page.

## 0.7.0

**Features**

- Animated startup splash with logo, version and startup progress.
- Adaptive log tabs that shrink proportionally as more tabs open and grow back when they close.
- Server reordering in the Locations panel: drag a server between rows to reorder, drop it onto a group to move it, or onto **Local Drive** / empty space to ungroup it.
- Clear drop feedback: a line between rows means "place here", an area highlight means "join this group".
- **New group...** from anywhere in the Locations panel — heading, empty space or favourites.
- Contact email in the About dialog as a clickable mail link.

**Fixed**

- **Clear Log View**: the toolbar Clear button now truly empties the active tab while keeping it open, so Reload (<kbd>Ctrl+R</kbd>) or Tail restores the same file.
- Remote files named `seeloggyplus-...` are no longer rejected as local copies.
- Error dialogs rewritten in plain language — login rejection, timeouts, refused connections, unknown hosts, unreadable keys and changed server identities each get their own explanation, with the raw message under **Details**.
- File Manager returns to the local location immediately when a connection fails.
- Toolbar toggle icons keep readable contrast while pressed in the Light theme.

**Improvements**

- Tail uses a terminal icon; Detail Clear and Close use distinct icons.
- Compact button density in the Detail panel, File Manager and Recent Log Files panel.
- Recent Log Files group headers show only the server name.
- Reopening a file updates its last-opened time and moves it to the top of its group, while ordinary tab switching does not rewrite history.

## 0.6.5

- **No more background terminal**: starting a legacy installation or choosing "Restart to update" no longer leaves a `cmd` window open; the app restarts itself with `javaw` and repairs old launchers that used `java.exe`.
- **Update check right after a release**: the update manifest is fetched from the GitHub latest-release endpoint with `Cache-Control: no-cache`, so a release published moments ago is detected immediately.

## 0.6.4

- **Self-update startup health**: a newly activated version confirms itself as healthy before rollback is evaluated, so the next launch from the existing root launcher stays on the updated version.
- **Legacy launcher continuity**: the unchanged, version-aware root launcher keeps resolving `current` to the latest staged JAR after an update.

## 0.6.3

- **Self-update from 0.5.x works again**: portable packages no longer ship `SeeLoggyPlus.vbs`; the app recreates the silent Windows launcher at startup when missing, so updates from 0.5.x stage and activate normally.

## 0.6.1 / 0.6.2

- First published builds of the 0.6 line with the exact 0.6.0 feature set (the 0.6.0 release workflow failed before publishing), plus CI reliability fixes.

## 0.6.0

**Features**

- **Private-key authentication** — password or private key file per server, with optional encrypted passphrase. Modern keys (ed25519, ecdsa, rsa-sha2) are supported.
- **Host-key verification** — the first time a host is contacted the app shows the key fingerprint and asks to trust it (`known_hosts`); a changed host key is always refused with a clear MITM warning.
- **Server groups in File Management** — a WinSCP/MobaXterm-style tree with New, Rename, Delete, Move to group and drag & drop. Groups persist even when empty.
- **Recent Files tree** — recent entries grouped per server under expandable nodes.
- **Clear connect errors** — failures report the real reason (missing key file, auth failure) instead of a generic message.
- **Silent Windows launcher** — `SeeLoggyPlus.vbs` starts the app without a terminal window; `launcher.bat --console` remains for diagnostics.
- **Double-click preference** — choose Open/Download (default) or Tail for files in File Management.

**Improvements**

- Buttons and dropdowns consistently follow the active theme with readable states.
- File Management left panel is compact with a collapsible Favorite folders pane.
- Reloading an active remote tail reconnects in the background.
- Server editor keeps Test Connection / Cancel / Save always visible.

## 0.5.1

- **Self-update download location**: updates are staged under the application data folder (`<data>/updates`) instead of the system temp directory.
- **No recursive folder search**: the installer finds `seeloggyplus.jar` from the known package layout.
- **Correct install root** when running from `versions/<version>`.

## 0.5.0

- **All-light theme** — a third theme with light menu bar, toolbar and status bar, selectable from **Preferences → Theme**: Graphite (default) / Light / Dark.
- Interactive states (hover / selected / pressed / focus) follow the active theme via shared accent tokens.
- **Release version fixed** — packaged builds no longer report `vDEV`.
- **Recent files** remember whether a file was last opened normally or in live tail, and reopen it the same way.
- **Remote files** already streaming are reused instead of downloaded again.

## 0.4.3

- **Log viewer keyboard navigation** — Up/Down (and PageUp/PageDown/Home/End) keys move the log viewer even when focus is not on the canvas, while text inputs, lists and the detail editor keep their own behaviour.

## 0.4.2

- Vertical scrollbar step buttons are visible again and move exactly one row.
- Horizontal scroll / Shift+wheel over the tab header is throttled so one gesture moves one tab.

## 0.4.1

- **Find in Files**: wider scrollbars; the selected preview line uses the shared selection colour with readable text in both themes.
- **Log viewer**: restored scrollbar step buttons.
- **Main view**: horizontal scroll over the tab header moves the selected tab; toolbar toggle icons keep the theme colour in every state.

## 0.4.0

- **Token-based design system** installed at scene level, so the main window, every dialog and all popups stay consistent.
- **Full dark mode** with a live toggle in Preferences.
- Enterprise, data-dense graphite visual language.
- Redesigned log canvas readability: neutral body text, subtle severity accents, row tints.
- Unified text-selection colour across canvas, search panel, detail panel and text controls.
- WCAG-oriented contrast for labels, input text, icons and status indicators.
