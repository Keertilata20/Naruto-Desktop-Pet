# Naruto Desktop Pet

A cute Windows desktop companion built by extending the open-source
[TonyNa-code/desktop-pet](https://github.com/TonyNa-code/desktop-pet) foundation.

The current focus is a lightweight animated pet that works without an API key.
Chat and voice features remain available in the underlying application for a
future phase.

## Our contribution

- Pet-first startup without forced chat setup.
- Replaceable, documented character-pack workflow.
- Smoother animation timing with `requestAnimationFrame`.
- Cached frame rendering to reduce visible lag.
- Corrected spritesheet alignment and transparent rendering issues.
- Click, hover, drag, jumping, waving, sleeping, and expression behavior.

## Run locally

```bash
npm install
npm start
```

Validate the project with:

```bash
npm run check
```

## Character packs

Each pack lives under `assets/characters/<id>/` and contains:

```text
character.json
preview.png
sprite.png
```

See [the character-pack guide](docs/NARUTO_CHARACTER_PACK.md) and the
[manifest template](docs/naruto-character-pack.template.json).

The personal Naruto artwork used during development is intentionally excluded
from this public repository. Users can add their own legally obtained artwork
locally using the documented pack format.

## Roadmap

- Original publishable mascot
- More moods and pet interactions
- Coding-session awareness
- VS Code reactions to successful runs and errors
- Optional companion chat

## Credit and license

The desktop-pet foundation is by
[TonyNa-code/desktop-pet](https://github.com/TonyNa-code/desktop-pet).
This project preserves that foundation and adds the changes described above.

Source code is released under the MIT License. See [ASSET_NOTICE.md](ASSET_NOTICE.md)
before redistributing artwork or packaged builds.
