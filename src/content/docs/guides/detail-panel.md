---
title: Detail Panel
description: Read the full selected log line using Raw and Formatted modes, automatic JSON/XML detection, Copy and Clear.
---

Select a line to show its full content in Detail. Toggle the panel with <kbd>Ctrl+J</kbd> or its bottom-bar icon. Use **View → Results Position** to choose Auto, Right or Bottom docking. If Results and Detail share the bottom dock, select the Detail tab.

![Detail panel displaying an automatically detected JSON payload in Formatted mode](../../../assets/screenshots/detail-panel-dark.png)

| Control | Action |
| --- | --- |
| Raw | Shows the exact original log line. |
| Formatted | Detects and formats supported JSON/XML directly, preserving log text around the payload. Large payloads are processed in the background. |
| Copy | Copies the currently displayed mode: original text in Raw, formatted text in Formatted. |
| Clear | Empties Detail without closing it. |
| Close | Hides Detail. Reopen it with <kbd>Ctrl+J</kbd> or the bottom-bar icon. Results remain open independently. |

:::tip
Choose whether Detail opens in Formatted mode in **Preferences → Log Viewer**. Older JSON/XML preferences remain a fallback. The selected mode is reused for following lines; unsupported or malformed content is shown Raw and cannot enable Formatted. The panel uses the font settings from **Preferences → General**.
:::
