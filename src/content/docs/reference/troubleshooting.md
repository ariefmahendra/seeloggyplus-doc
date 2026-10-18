---
title: Troubleshooting
description: Fixes for garbled characters, missing search hits, tail problems, memory pressure, SSH fingerprints and more.
---

## Characters look garbled (mojibake)

Log files are decoded as UTF-8. Files written in another encoding (for example
Windows-1252 or Shift-JIS) show broken characters. Convert the file to UTF-8, or open a
converted copy.

## One very long line is cut off

Lines are read up to 256 KB for safety; anything beyond that is clipped so a single
enormous entry cannot stall the viewer. Split the file, or use **Find in Files** / the
File Manager preview to inspect the raw content.

## A term I can see is not found

- Check the **Regex** and **Case Sensitive** toggles — they are remembered per session.
- Boolean operators must be uppercase (`AND`, `OR`, `NOT`); a lowercase `and` is searched as text.
- In a regex, escape characters such as `.`, `[`, `(` or the pattern fails to compile and nothing matches.
- The term may sit beyond the 256 KB line limit described above.

## The match counter says "50000+ matches"

Counting stops after 50 000 matching lines so the UI stays responsive. The result panel
lists everything found so far — narrow the search for an exact number.

## Searching a very large file feels slow

Search runs in parallel chunks with a progress overlay; you can cancel it any time. Plain
text and boolean searches are much faster than complex regex, and a narrower term scans
just as fast but produces less to display.

## Tail mode shows no new lines

- For local files, verify the file is still being written and has not been rotated or moved. Press <kbd>Ctrl+R</kbd> to reload, then enable Tail again.
- For remote files, check that the SSH connection is still alive; reconnecting restores the stream.
- Confirm **Smart Follow** is enabled (or that you are scrolled to the bottom) so the view keeps up.

## Tailing stops and the view empties

That is the **Clear** action: it stops tailing and releases the file but keeps the tab.
Open it again with **Reload** (<kbd>Ctrl+R</kbd>) or by pressing **Tail**.

## A remote file will not open or download

- Check free space in the download directory and open it with **Preferences → SSH → Open Folder**.
- Use **Clean Downloads** if the folder holds many old copies.
- Raise **Connection Timeout** for slow links, and verify the server is still reachable with **Test Connection**.

## SSH asks for a fingerprint, or refuses the connection

An unknown host key is shown once for confirmation; a **changed** key is always refused.
Verify the fingerprint with the server's administrator. If the host was deliberately
rebuilt, remove its entry from `known_hosts` in the data directory and trust the new key.

## Out of memory with a huge file

- Raise **Max Memory** in **Preferences → General** and restart the application.
- Use Tail mode or filter the view instead of scrolling through millions of lines.
- Close tabs you no longer need — each open file keeps its index — and use the **GC** button to release memory.

## Preferences do not seem to apply

- Settings apply after **Save**; **Cancel** discards the changes.
- **Max Memory** only takes effect after restarting the application.
- Theme and font changes are applied immediately, including to already open dialogs.

## A panel disappeared

Panels toggle with <kbd>Ctrl+B</kbd> (Recent Log Files), <kbd>Ctrl+J</kbd> (Detail) or the
two toolbar toggles; the View menu has the same entries. Split dividers are draggable and
remember their position per session.

## Double-clicking a file in the File Manager does not open it

The double-click action can be set to **Open/Download** or **Tail** in
**Preferences → General**. Folders always open. The footer buttons (**Preview**, **Tail**,
**Open**) and <kbd>Enter</kbd> use the configured action.

## Update check or download fails

The dialog reports the reason (no network, proxy, blocked host, checksum mismatch).
Downloads are verified before they are staged and a failure leaves the current
installation untouched; retry from **Help → Check for Updates...**.

## Reporting a problem

Open an issue on the [GitHub issue tracker](https://github.com/ariefmahendra/seeloggyplus/issues)
and include the app version (**Help → About**), your operating system, what you did, and
the files from the `logs/` folder. For SSH problems mention the authentication method and
the error text under **Details** — never your password.
