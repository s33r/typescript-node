# typescript-node
Perhaps futile attempt to get node, esm and typescript to work


## ts-node

By far the most popular, but it seems to be completely non-functional, at least if I follow the steps in the documentaiton. Prehaps there is an undocumented mode? Also the project's repo hasn't been updated in 6 months (as of June 2024) so... it might actually be dead.

- ❌ Without Paths
- ❌ With Paths

Always fails with a node error:

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /workspaces/typescript-node/lib/index.ts
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:160:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:203:36)
    at defaultLoad (node:internal/modules/esm/load:143:22)
    at async nextLoad (node:internal/modules/esm/hooks:866:22)
    at async nextLoad (node:internal/modules/esm/hooks:866:22)
    at async Hooks.load (node:internal/modules/esm/hooks:449:20)
    at async MessagePort.handleMessage (node:internal/modules/esm/worker:196:18) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
```

## npx

This is often suggested as a replacement for ts-node.

- ✅ Without Paths
- ✅ With Paths

## tsimp

This also gets suggested sometimes.


- ✅ Without Paths
- ❌ With Paths

Doesn't use paths to resovle module names. It would probably work if the js files are output to a dist folder in the package.
