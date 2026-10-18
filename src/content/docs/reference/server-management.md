---
title: Server Management
description: Add, edit, clone and remove SSH servers, organise them into groups, and test connections before saving.
---

Add, edit, clone and remove SSH servers with **Settings → Server Management...**
(<kbd>Ctrl+M</kbd>).

![The server list with groups on the left and details for the selected server](../../../assets/screenshots/server-management.png)

<p class="screenshot-caption">The server list with groups on the left and details for the selected server.</p>

| Control | Action |
| --- | --- |
| Add Server | Opens the form below with the fields empty. |
| Edit / Clone | Edit changes the selected server; Clone duplicates it (handy for a second user or port). |
| Delete | Removes the server. Recent entries that pointed at it explain how to relocate them. |
| Search / Clear | Filter the list by name, host, group or username. |
| Columns | Name, Group, Host, Port, Username, Default Path and Last Used. |
| Server groups | The tree on the left mirrors the File Manager groups: **New group...**, **Rename...**, **Delete group** and **Move selected server...**. Deleting a group ungroups its servers instead of deleting them. |
| Server Details | Read-only summary of the selected server, including when it was created and last used. |

![The add/edit form with password authentication selected](../../../assets/screenshots/server-edit.png)

<p class="screenshot-caption">The add/edit form with password authentication selected.</p>

## Add / Edit Server form

| Field | Description |
| --- | --- |
| Server Name | Label shown in the File Manager, the Recent panel and the tab title. |
| Host / Port | Hostname or IP address and the SSH port (22 by default). |
| Username | The SSH account used for browsing, downloading and tailing. |
| Authentication | **Password** or **Private Key**. For passwords you can reveal the field with the eye button; for keys choose the key file and, if it is encrypted, its passphrase. |
| Save password / passphrase | Stores the secret encrypted in the local keystore. Leave it unchecked to be prompted on every connection. |
| Default Path | The folder the File Manager opens for this server, for example `/var/log`. |
| Test Connection | Verifies host, credentials and host key before you save. |
