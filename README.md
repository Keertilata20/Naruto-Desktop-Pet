# 🥷 Demo Ninja Desktop Pet

> A tiny, original ninja companion for your desktop and coding sessions.

[![Build](https://github.com/Keertilata20/Naruto-Desktop-Pet/actions/workflows/build.yml/badge.svg)](https://github.com/Keertilata20/Naruto-Desktop-Pet/actions/workflows/build.yml)
[![License](https://img.shields.io/badge/license-MIT-2ea44f.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows-blue.svg)](#-run-it-locally)
[![Character packs](https://img.shields.io/badge/character%20packs-replaceable-0f766e.svg)](#-character-packs)

Demo Ninja is a lightweight Electron desktop pet that stays above your other
windows, reacts to interaction, and demonstrates a replaceable character-pack
system. The public repository includes an original demo mascot so anyone can
clone it and run it without downloading proprietary artwork.

This project is based on the open-source
[TonyNa-code/desktop-pet](https://github.com/TonyNa-code/desktop-pet) foundation.
It keeps the original architecture while adding smoother animation playback,
local reactions, screenshot privacy, and a path toward coding awareness.

## ✨ What is included

- Transparent, always-on-top desktop pet window
- Dragging with directional movement
- Idle, walking, waving, jumping, and sleeping demonstrations
- Click, double-click, hover, and long-press reactions
- Cached animation frames for smoother rendering
- Replaceable character-pack format
- Original `demo-ninja` mascot included
- Runs without an API key

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

Every character is discovered from a folder under `assets/characters/<id>/`:

```text
character.json   # states, rows, frame counts, and timing
preview.png      # character picker preview
sprite.png       # transparent spritesheet
```

The included public pack is:

```text
assets/characters/demo-ninja/
```

Create your own pack by following the project’s character-pack guide and
keeping the artwork rights clear before redistributing it.

## 🔒 Naruto development pack

The Naruto character pack is used locally while developing this project, but
it is intentionally excluded from the public repository. Naruto is an
unofficial personal fan-project character and this project is not affiliated
with Naruto’s rights holders.

The local pack is ignored by Git at:

```text
assets/characters/naruto/
```

The application remains generic: if a user provides a valid local character
pack, the same discovery and animation system can load it without Naruto-
specific engine code.

## 🤝 Credit

The desktop-pet foundation comes from
[TonyNa-code/desktop-pet](https://github.com/TonyNa-code/desktop-pet). Please
review its license and asset notice when building on this project.

The public source code and original demo mascot are provided for learning and
experimentation. See [ASSET_NOTICE.md](ASSET_NOTICE.md) before redistributing
artwork or packaged builds.

## 🗺️ Roadmap

- Add richer moods and small speech reactions
- Detect coding sessions and inactivity
- Connect to VS Code events such as successful runs and errors
- Add optional chat and voice as a later companion mode
