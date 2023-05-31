# pseudo-patch [![npm version](https://badge.fury.io/js/pseudo-patch.svg)](https://badge.fury.io/js/pseudo-patch)

this was an edge case solve for a ci pipeline that had formatting dependancies on a `CHANGELOG.md` where the package.json file had to be updated first, published here so I can easily reuse, but hey.. it might be helpful to someone else out there ¯\\\_(ツ)\_/¯

## Install

- install in your project

```bash
yarn add pseudo-patch
```

- configure `package.json`:

```json
{
  "scripts": {
    "pseudo-patch": "node ./node_modules/pseudo-patch"
  }
}
```

# Usage

```
npm run pseudo-patch [opts]
```

## What it does

nothing more then increase the package.json, default is `patch` though supports `-t` flag if you need `major` or `minor` for whatever reason.

```diff
 {
  "name": "your-project",
-  "version": "1.0.0",
+  "version": "1.0.1",
 }
```

### Options

```
$ pseudo-patch
    -s, --spacing <number>        Preferred JSON file indent spaces (defaults to 2)
    -p, --path <string>           path to package.json (if not <projectRoot>/package.json)
    --major                       force increment as a major change
    --minor                       force increment as a minor change
```
