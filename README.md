# pseudo-patch

node script to update package json
## What it does

nothing more then increase the package.json.
 ```diff
  {
   "name": "your-project",
-  "version": "1.0.0",
+  "version": "1.0.1",
  }
 ```

 ### TODO
 Solve semantic-formatting. it only handles x.x.x versions at the moment and is broken for double digits