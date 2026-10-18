---
title: Detail Panel
description: Read the full content of a selected line, with automatic JSON and XML prettifying, Copy and Clear.
---

Click or arrow-key to a line to show its full content in the bottom panel, which is handy
for long entries and embedded structured data.

![A log line containing a JSON payload, formatted by Auto Prettify JSON](../../../assets/screenshots/detail-panel-dark.png)

<p class="screenshot-caption">A log line containing a JSON payload, formatted by Auto Prettify JSON.</p>

| Control | Action |
| --- | --- |
| Auto Prettify JSON | Formats the embedded JSON of the shown line. Big payloads are formatted in the background so the UI stays responsive. |
| Auto Prettify XML | Same for embedded XML, including SOAP envelopes and namespaces. |
| Copy | Copies exactly what is shown (prettified or raw) to the clipboard. |
| Clear | Empties the panel without closing it. |
| Close | Hides the panel; bring it back with <kbd>Ctrl+J</kbd> or the toolbar toggle. |

:::tip
The toggles are remembered per session and are also available in
**Preferences → Log Viewer**. The panel uses the font family and size from
**Preferences → General**.
:::
