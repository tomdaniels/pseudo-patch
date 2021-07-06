# pseudo-patch [![npm version](https://badge.fury.io/js/pseudo-patch.svg)](https://badge.fury.io/js/pseudo-patch)

Edge case solve for CI/CD pipelines or lambdas/any prroject really that doesn't need to published to npm, but has some changelog formatting dependancies.

This tool assumes your projects `CHANGELOG.md` adheres to [Semantic Versioning](http://semver.org/), in the [keepachangelog](http://keepachangelog.com/) format.

## Install

- install in your project
```bash
yarn add pseudo-patch
```

- configure `package.json`:
```json
{
  "scripts": {
    "pseudo-patch": "pseudo-patch"
  }
}
```

## What it does

nothing more then increase the package.json.
Works with [version-changelog](https://www.npmjs.com/package/version-changelog) and similar changelog formatting solutions that rely on the `package.json['version']` being already icremented.
 ```diff
  {
   "name": "your-project",
-  "version": "1.0.0",
+  "version": "1.0.1",
  }
 ```