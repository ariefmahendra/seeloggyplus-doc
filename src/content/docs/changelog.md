---
title: Changelog
description: Release notes for SeeLoggyPlus — the features, fixes and improvements in every release.
---

User-facing highlights of every release. Full notes and downloads live on the
[GitHub Releases](https://github.com/ariefmahendra/seeloggyplus/releases) page.

## 0.9.0

See the [0.9.0 highlights](/release-highlights/) for screenshots and workspace guidance.

**Overview**

SeeLoggyPlus 0.9.0 adds an adaptable log workspace, simpler structured-log formatting and clearer interaction states. It also improves startup feedback, search ownership and memory handling for long-running Tail sessions.

**Features**

- Results and Detail can dock automatically, on the right, or at the bottom. Shared bottom panels use tabs, and the selected layout is remembered.
- Raw and Formatted modes detect embedded JSON/XML directly. Copy follows the displayed mode, and large payloads format in the background.
- The Resources menu provides heap and session information in the bottom status bar.

**Improvements**

- Toolbar actions are grouped into Open/Servers, search and Tail/Follow. Recent Files and Detail toggles move to the bottom-left corner; Ctrl+B and Ctrl+J remain available.
- Button icons turn blue on hover, press, selection and keyboard focus, with neutral gray interaction backgrounds in Light and Dark themes.
- Splash branding renders at display resolution, including high-DPI scaling. The splash starts before workspace preparation, while animation frames load in the background. JVM startup time still depends on the computer.
- Tail history keeps a bounded hot cache and stores cold content in temporary disk segments without reducing the existing history limit. Some indexing/search workloads remain slower than the previous baseline; memory improvements are workload-dependent.
- Search and line reading reduce temporary allocations and retain complete long result lines.

**Fixed**

- Stale search jobs cannot replace newer queries, another tab's results, or a cleared result view.
- Long text selections and result scrollbars remain visible inside rounded panels.
- Resources text fits without clipping or overlapping its arrow.
- Memory-status updates reuse their tooltip, preventing popup resources from accumulating during long sessions.
- Old formatting jobs cannot overwrite a newly selected line or repopulate a cleared Detail panel.

**Tests**

- Headless regression coverage for workspace layouts, startup, theme contrast, search races, formatting, selection, Tail history and file reading.
- Self-update checks cover package whitelists, checksum rejection, download/staging, activation, health confirmation and rollback.
- Release packaging gates verify Windows and Linux portable variants with the released 0.7.0 updater.
- Bilingual documentation checks cover production builds, links and desktop/mobile browser layouts.

**Upgrade notes**

- No database migration is required from 0.8.0; the schema remains at version 4. Existing servers, credentials, history and preferences are retained.
- Older JSON/XML formatting preferences remain a fallback for the new default Formatted mode.
- Reload and Clear Log View are available from the log tab's context menu. F5 and View > Refresh continue to reload the active file.
- Tail spooling uses temporary disk space. Normal session close removes its files; a forced exit or crash may leave temporary files behind.
- Back up the complete data directory, including seeloggyplus.db, .keystore and known_hosts, while the application is closed.
- For a manual upgrade, extract into a new writable folder and copy the complete data directory and launcher.properties. Do not overwrite the new installation with an older current pointer or versions directory.
- Online Help remains available at https://seeloggyplus-doc.vercel.app/. Local log viewing works offline.

**Full changelog:** [0.8.0...0.9.0](https://github.com/ariefmahendra/seeloggyplus/compare/0.8.0...0.9.0)

## 0.8.0

**Features**

- Responsive folder breadcrumbs with subfolder menus and hidden-parent navigation.
- Character-level log selection and copying, with consistent selection highlights.
- Shared server groups between Server Management and the File Manager.
- Online Help at https://seeloggyplus-doc.vercel.app/, with English and Indonesian guides.

**Improvements**

- Refreshed Light and Dark palettes, compact controls, rounded panels, readable icons and input fields.
- Preferences organized into General, Log Viewer and SSH pages.
- Theme-aware startup splash, dialogs, file browser menus and window decorations.
- Recent files load in the background to keep the interface responsive.
- Portable packages use clean launcher defaults instead of workspace-specific Java or memory settings.

**Fixed**

- Long log lines remain readable and searchable beyond the previous read window.
- View Refresh reloads the active file, and search reports when the scan limit truncates match counts.
- Remote locations restore after their dependencies are ready; file table keyboard navigation remains available.
- Subfolder menus, download directory fields and breadcrumb arrows follow the selected theme.
- Linux launchers resolve relative data and settings from the installation directory.
- Windows launchers accept an empty Java override and Java paths containing spaces. Known older launcher scripts are repaired after upgrade without overwriting user configuration.
- Linux launchers and bundled runtimes retain executable permissions after installation and update.

**Upgrade notes**

- No database schema change is required from 0.7.0: the schema remains at version 4.
- Existing servers, groups, favourites, history, parsing configurations and supported preferences are retained.
- The retired Graphite preference becomes Light; existing Light and Dark preferences remain unchanged.
- Keep the entire data directory together, including seeloggyplus.db, .keystore and known_hosts. Close the app before making a backup.
- For a manual upgrade, extract into a new writable folder and copy the complete data directory and your launcher.properties into it before starting. Do not copy the old current pointer or versions directory over the new package.
- Packages no longer include offline HTML help. F1 / Help Contents opens the website and needs internet; local log viewing remains available offline.
- Windows and Linux packages are available with a bundled runtime or without one (Java 21 or newer required).
- If an automatic download fails verification, the active installation remains unchanged.


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
