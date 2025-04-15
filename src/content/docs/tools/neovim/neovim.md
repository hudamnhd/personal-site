---
title: Introduction
description: About Neovim and tutorial install in Linux
---

Neovim is a refactor, and sometimes redactor, in the tradition of Vim (which itself derives from Stevie). It is not a rewrite but a continuation and extension of Vim. Many clones and derivatives exist, some very clever—but none are Vim. Neovim is built for users who want the good parts of Vim, and more.

## How to install in Linux

The [Releases](https://github.com/neovim/neovim/releases) page provides pre-built binaries for Linux systems.

```sh
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz
sudo rm -rf /opt/nvim
sudo tar -C /opt -xzf nvim-linux-x86_64.tar.gz
```

Then add this to your shell config (`~/.bashrc`, `~/.zshrc`, ...):

    export PATH="$PATH:/opt/nvim-linux-x86_64/bin"

<https://github.com/neovim/neovim/blob/master/INSTALL.md>

