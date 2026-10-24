---
title: Privacy Policy
description: How SeeLoggyPlus handles local log files, SSH credentials, diagnostics, updates and support information.
---

Last updated: 25 October 2026

SeeLoggyPlus is a desktop log viewer published by **Arief Mahendra**. This policy
explains how the application handles information on your device and when it
connects to services you use.

## Log files and local information

You choose the files and folders that SeeLoggyPlus opens. Log contents are read
and processed on your device. The application does not automatically upload your
log contents, saved settings or SSH credentials to the publisher.

The application stores preferences, recent file paths, server profiles, trusted
host keys and file metadata locally. Downloaded SSH files and temporary working
files can contain copies of log contents. Application diagnostics can contain
file paths, server addresses and error details. Review these files before sharing
them, because your own logs and paths may contain personal or confidential data.

SeeLoggyPlus does not include advertising or an application analytics service.

## SSH connections and credentials

When you connect to an SSH server, the application sends authentication and file
requests to the server you selected. The server and its operator may record
connection information according to their own policies.

Passwords and key passphrases are saved only when you choose the corresponding
save option. Saved secrets are encrypted using local key material kept in the
application data directory, including `.keystore`. Private key files stay in the
location you selected and are read when needed for authentication. Trusted server
host keys are stored in `known_hosts`.

See [SSH security](/reference/ssh-security/) and
[files, data and logs](/reference/data-and-logs/) for operational details.

## Updates and external services

Update behavior depends on the installed version and distribution. Microsoft
Store installations use Microsoft's installation and update services. Older
portable releases may check for or download updates from GitHub; portable
releases without an updater require a manual download. These connections expose
normal request information, such as your IP address, to the service provider.
They do not upload your log contents or SSH secrets to the publisher.

Opening documentation, support links or the Store launches an external service.
The documentation website is hosted on Vercel. Those providers handle website,
download and account information under their own policies:

- [Microsoft privacy statement](https://privacy.microsoft.com/privacystatement)
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [Vercel privacy policy](https://vercel.com/legal/privacy-policy)

## Retention and your choices

Local information remains on your device until you remove it. You can remove
saved profiles and history through the application and delete downloaded files
or the application data directory when they are no longer needed. Close the
application before deleting its data. Removing the data directory also removes
settings and key material needed to access saved credentials.

Uninstalling a distribution may leave files outside its managed installation
directory, including manually selected downloads or portable data. Removing
local copies does not remove the original files on an SSH server.

## Support and contact

If you send email, diagnostic files or a GitHub issue, you choose what information
to share. GitHub issues are public. Remove credentials and sensitive log contents
before sending a report. Support information is used to respond to the request
and investigate the reported problem; it is not sent automatically by the app.

For privacy questions or requests concerning information you sent to the
publisher, contact **Arief Mahendra** at
[mahend.arief@gmail.com](mailto:mahend.arief@gmail.com). The publisher cannot
remotely access or delete files stored only on your device or SSH servers.

This page will be updated when the application's handling of information changes.
