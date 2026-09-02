# 🥷🍥 Naruto Desktop Pet

> A tiny ninja companion for your desktop—and eventually, your coding sessions.

[![Build](https://github.com/Keertilata20/Naruto-Desktop-Pet/actions/workflows/build.yml/badge.svg)](https://github.com/Keertilata20/Naruto-Desktop-Pet/actions/workflows/build.yml)
[![License](https://img.shields.io/badge/license-MIT-2ea44f.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows-blue.svg)](#-run-it-locally)
[![Phase](https://img.shields.io/badge/phase-1%20%7C%20desktop%20pet-orange.svg)](#-roadmap)

Naruto Desktop Pet is a cute, lightweight Windows companion that lives above
your applications, reacts to clicks and movement, and brings a little ninja
energy to long coding sessions.

This project extends the open-source
[TonyNa-code/desktop-pet](https://github.com/TonyNa-code/desktop-pet) foundation
with a pet-first experience, smoother rendering, corrected animation behavior,
and a roadmap toward a coding-aware companion.

## ✨ What is working

- Transparent, always-on-top desktop pet window
- Dragging with directional running animation
- Click, double-click, hover, and long-press reactions
- Idle, waving, jumping, sleeping, thinking, and mood states
- Cached animation frames for smoother rendering
- Replaceable character-pack format
- Starts without requiring an API key

## 🚀 Run it locally

```bash
npm install
npm start
```

Run the validation suite with:

```bash
npm run check
```

## 🎨 Character packs

Every character is a replaceable pack under `assets/characters/<id>/`:

```text
character.json   # states, rows, frame counts, and timing
preview.png      # character picker preview
sprite.png       # transparent spritesheet
```

See the [character-pack guide](docs/NARUTO_CHARACTER_PACK.md) and
[manifest template](docs/naruto-character-pack.template.json).

The personal Naruto artwork used during development is intentionally not
included in this public repository. Add artwork locally only when you have the
right to use and redistribute it.

## 🗺️ Roadmap

- Create an original publishable ninja mascot
- Add richer moods and small speech reactions
- Detect coding sessions and inactivity
- Connect to VS Code events such as successful runs and errors
- Bring back optional chat and voice as a later companion mode

## 🤝 Credit

The desktop-pet foundation comes from
[TonyNa-code/desktop-pet](https://github.com/TonyNa-code/desktop-pet).
This project keeps that attribution and builds a Naruto-inspired coding-
companion experience on top of it.

Source code is released under the MIT License. See
[ASSET_NOTICE.md](ASSET_NOTICE.md) before redistributing artwork or packaged
builds.

If you build your own character pack or improve the companion behavior, feel
free to open an issue or pull request!
