## How to Setup

If one of the dependency in the project is oudated, and you want
to upgrade that specific version, you may do so with following steps:

1. Run `npm install` first time to generate package-lock.json file
2. In `package-lock.json` update dependency to the specific version
you want.
3. Re-run `npm install --no-save`
