# pseudo-patch

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
-  "version": "1.29.4",
+  "version": "1.29.5",
  }
 ```