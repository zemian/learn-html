## NodeJS

Explore and learn about https://nodejs.org/en/

```
npm install
node hello.js
```

## How To Install NodeJS

On MacOSX, run `brew install node` command to install. 

Usually you also want to setup `npm` along with `node` so that you can install
many of packages available to use as third party libraries. Note that `npm` 
will generate a `node_modules` folder to store these dependencies.

## How To Create a New NPM and Node based Project

```bash
npm init hello-node
cd hello-node
npm install
echo 'console.log("Hello");' > hello.js
node hello.js
```

## How to setup `node_modules` folder in different location

See https://docs.npmjs.com/files/folders

- Local install (default): puts stuff in ./node_modules of the current package root.
- Global install (with -g): puts stuff in /usr/local or wherever node is installed.
- Install it locally if you’re going to require() it.
- Install it globally if you’re going to run it on the command line.
- If you need both, then install it in both places, or use npm link.

## Quick Npm Project Setup

  mkdir hello && cd hello && npm init -y
