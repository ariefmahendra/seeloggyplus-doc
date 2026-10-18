---
title: Selecting & Copying Text
description: Select exact characters across lines in the log viewer and copy them with Ctrl+C or the right-click menu.
---

The log viewer supports precise selection, so you can copy part of a line instead of the
whole entry.

| Action | Result |
| --- | --- |
| Click a line | Selects the whole line and shows it in the Detail panel. |
| <kbd>Shift</kbd>+click | Extends the selection by whole lines. |
| Drag | Selects the exact characters under the pointer, including partial first and last lines. |
| <kbd>Ctrl+C</kbd> | Copies the selected text to the clipboard. |
| Right-click | Opens **Copy Selection**. Right-clicking outside the selection selects the clicked line first. |

:::tip
The status bar reports the selection size (for example *Selected: 3 lines, 120 chars*).
For very large selections only the line count is shown. Multi-line copies use the
platform line separator, so pasting into an editor or spreadsheet keeps the lines
separate.
:::
