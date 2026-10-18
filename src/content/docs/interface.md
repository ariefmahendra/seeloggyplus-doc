---
title: Main Interface
description: Tour of the SeeLoggyPlus workspace — panels, tabs, the log viewer and the status bar.
---

The workspace is organised into several areas. Every panel can be hidden and comes back
with its shortcut.

![Layout overview: recent files, log viewer, search results and detail panel](../../assets/screenshots/interface-overview-dark.png)

<p class="screenshot-caption">Layout overview: recent files, log viewer, search results and detail panel.</p>

| Area | Purpose |
| --- | --- |
| Menu bar | File, View, Settings and Help commands. Menu accelerators work whenever the window is focused. |
| Toolbar | Panel toggles, the search field with **Regex** / **Case Sensitive**, the match navigator, Reload, Tail, Smart Follow and Clear. |
| Recent Log Files | Previously opened files, grouped by source. Toggle with <kbd>Ctrl+B</kbd>. |
| Log viewer | Canvas-rendered lines with line numbers, severity colours, a left accent bar and a soft tint for WARN/ERROR/FATAL, plus search highlights. |
| Search Result Panel | Appears on the right while a search is active. Lists matched lines; click one to jump to it. |
| Detail panel | Full content of the selected line with JSON/XML prettify and Copy. Toggle with <kbd>Ctrl+J</kbd>. |
| Status bar | Current line and total, the selection size, a GC button, and heap usage with a colour-coded bar. |

## Tabs

- Every opened file gets its own tab. Tab headers shrink as more tabs open and grow back as they close (<kbd>Ctrl+Tab</kbd> / <kbd>Ctrl+Shift+Tab</kbd> to switch, <kbd>Ctrl+W</kbd> to close).
- A green dot marks tabs that are tailing; unread streamed lines are counted in the title (capped at 999).
- Drag a tab header to reorder tabs. Scrolling over the tab header moves the selection.
- Right-click a tab for **Close**, **Close Tabs to the Right**, **Close Other Tabs**, **Close All Tabs**, **Reload**, **Copy File Path** and **Show in File Explorer**.

## Status bar

| Element | Meaning |
| --- | --- |
| **Line: 143 / 175 (81.1%)** | Top visible line, total lines in the current view and the scroll position. Click it to open **Go To Line** (<kbd>Ctrl+G</kbd>). |
| **Selected: 3 lines, 120 chars** | Appears while text is selected; see [Selecting & Copying Text](/guides/selection/). |
| **GC** | Runs a garbage collection — useful when a large file has just been closed or cleared. |
| **Memory** | Used / total heap with a bar that turns amber above 60% and red above 85%. |
| **Update notice** | A clickable link appears when a newer release is available. |
