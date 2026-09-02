# Naruto character-pack template

This folder contains the manifest template for a local, user-provided Naruto character pack.

When artwork is ready, create:

```text
assets/characters/naruto/
  character.json
  preview.png
  sprite.png
```

Copy `naruto-character-pack.template.json` to that folder as `character.json`.
The spritesheet must be 8 columns wide, with 768 x 832 pixels per frame. The template uses 9 rows:

1. idle
2. runningRight
3. runningLeft
4. waving
5. jumping
6. sleeping
7. failed
8. running
9. review

Do not place this manifest inside `assets/characters/` until `sprite.png` and `preview.png` are present. The asset validator expects every character folder there to be complete.
