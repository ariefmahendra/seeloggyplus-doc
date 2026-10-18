---
title: Find in Files (SSH)
description: Search a keyword across every file under a remote folder, preview the matches with context, then open or tail the file.
---

Searches a keyword inside every file under a remote folder — useful when you do not know
which log contains the error yet. The button is enabled only while a remote server
location is selected; local folders are searched from the command line for now.

![Matches across a remote folder with surrounding context in the preview](../../../assets/screenshots/find-in-files-dark.png)

<p class="screenshot-caption">Matches across a remote folder with surrounding context in the preview.</p>

| Control | Action |
| --- | --- |
| Folder / Keyword | The remote folder to scan (defaults to the current path) and the text to look for. |
| Regex / Case sensitive | Switch to extended regular expressions, and/or match case exactly. |
| Search / Stop | Starts the scan with a progress indicator; **Stop** cancels it. |
| Results | File, line number and content per match, with the keyword highlighted. Click a row to load its context below. |
| Context | Number of surrounding lines shown in the preview; the matched line is marked. |
| Footer | **Copy Path**, **Copy Line**, **Tail** (recommends a jump window) and **Open & Jump**. |

:::tip
Scans stop after a large number of matches so the result list stays usable. Narrow the
folder (for example `/var/log/nginx`) or use a more specific regex when a scan returns
too much.
:::
