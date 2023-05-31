# pseudo-patch [![npm version](https://badge.fury.io/js/pseudo-patch.svg)](https://badge.fury.io/js/pseudo-patch)

this was a silly edge case solve and an excuse to learn something new, published here so I can easily reuse, and hey.. it might be helpful to someone else out there ¯\\\_(ツ)\_/¯

## Install

```bash
yarn add pseudo-patch
```

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

nothing more then increase the package.json, by default and design it will be a `patch` update. But I later extended it out of bordem to support `--major` and `--minor` flags should anyone out there actuall want, or need it.

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
