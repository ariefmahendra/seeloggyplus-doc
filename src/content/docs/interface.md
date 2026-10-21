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
| Toolbar | Open/Servers, the search field with **Regex** / **Case Sensitive**, match navigation, and Tail/Follow. Reload and Clear Log View are in the log tab context menu. |
| Recent Log Files | Previously opened files, grouped by source. Toggle with <kbd>Ctrl+B</kbd>. |
| Log viewer | Canvas-rendered lines with line numbers, severity-colored text, character selection and search highlights. |
| Search Result Panel | Lists matches in the configured Auto/Right/Bottom dock. Click a result to jump to its line. |
| Detail panel | Full content of the selected line with Raw/Formatted modes and Copy. Toggle with <kbd>Ctrl+J</kbd>. |
| Status bar | Panel toggles, current line and total, selection size, Resources, and heap usage with a colour-coded bar. |

Choose **View → Results Position → Auto / Right / Bottom** to place Results and Detail. In a shared bottom dock, switch between their tabs. **View → Reset Layout** restores the default layout.

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
| **Panel icons** | Toggle Recent Files and Detail, using blue active icons on gray backgrounds. |
| **Resources** | Opens heap and session details. Use Diagnostics > Run Garbage Collection when needed. |
| **Memory** | Used / total heap with a bar that turns amber above 60% and red above 85%. |
| **Update notice** | A clickable link appears when a newer release is available. |
