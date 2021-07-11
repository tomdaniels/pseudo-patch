# pseudo-patch [![npm version](https://badge.fury.io/js/pseudo-patch.svg)](https://badge.fury.io/js/pseudo-patch)

This tool assumes your projects `CHANGELOG.md` adheres to [Semantic Versioning](http://semver.org/), in the [keepachangelog](http://keepachangelog.com/) format.

Works with  [version-changelog](https://www.npmjs.com/package/version-changelog) and [changelog-version](https://www.npmjs.com/package/changelog-version), I think it will work with any changelog formatting tool other then semantic-release, that rely on the `package.json['version']` being already icremented to format your changelog.

_this was an edge case solve for some lambda pipelines that had the formatting dependancies, published so I can easily reuse, but hey.. it might be helpful to someone else out there /shrug_

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
npm run pseudo-patch
```

## What it does

nothing more then increase the package.json.
 ```diff
  {
   "name": "your-project",
-  "version": "1.0.0",
+  "version": "1.0.1",
  }
 ```

 ### Options

```bash
$ pseudo-patch
    -s, --spacing <number>        Preferred JSON file indent spaces (defaults to 2)
```

 