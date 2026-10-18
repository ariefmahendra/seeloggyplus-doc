---
title: SSH Security
description: How SeeLoggyPlus stores credentials, verifies host keys against known_hosts, and explains connection problems.
---

## Credentials

- Passwords and key passphrases are only stored when you tick **Save password** / **Save passphrase**, and are then kept encrypted in the application keystore (`.keystore` in the data directory).
- Without the "save" option the app asks for the secret each time it connects (a password prompt appears before browsing or tailing).
- Private keys stay where they are on disk — only the path and, optionally, the passphrase are stored.

## Host keys

- Every server's host key is checked against `known_hosts` in the data directory.
- **First connection:** the fingerprint is shown and you decide whether to trust it. Verify it with your server administrator if you are unsure.
- **Changed key:** the connection is always refused with a warning. This is how the app protects you from man-in-the-middle attacks.
- If a server was legitimately rebuilt, delete its stale entry from `known_hosts` (or from the data directory) and trust the new key on the next connection — do this deliberately, never blindly.

## Connection problems

Failures are explained in plain language with the raw error under **Details**:

| Message | Meaning |
| --- | --- |
| Login rejected | Wrong username/password, or the key/passphrase does not match the configured authentication method. |
| Timeout | The host did not answer in time — check the network, VPN or firewall, or raise the timeout in **Preferences → SSH**. |
| Connection refused / unknown host | Wrong host or port, or the SSH service is not running. |
| Private key unusable | The file is missing, unreadable, or not in a supported format (RSA, ECDSA and Ed25519 keys are supported). |
