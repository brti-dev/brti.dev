---
title: NPM tricks
date: '2014-07-22'
tags:
  - npm
  - nodejs
---
Here are some sweet NPM tricks. <!-- more-Show me the tricks! -->They might seem pretty obvious to some people. If you're one of them, check out [more NPM tricks at devthought.com](http://www.devthought.com/2012/02/17/npm-tricks/).

__To quickstart a project and build package.json:__

````bash
$ npm init
````

__Start node using the package.json "start" file__ (defaults to `$ node server.js`)

````bash
$ npm start
````

You can also define `scripts` in the package file:

````json
"scripts": {
    "test": "mocha mytest.js",
    "build": "uglify mycode.js
}
````
Then run them like this:

````bash
$ npm run-script test
$ npm run-script build
$ npm test # shortcut for `run-script test`
````

__View package details:__

````bash
$ npm view <packagename> [detail(ie 'version')]
````

__Bump package:__

````bash
$ npm version 1.2.3
````

It’ll open up your package.json file, change the version to 1.2.3, git add it, git commit it, and git tag v1.2.3 it.

__Rebuild a package:__

````bash
$ npm rebuild <packagename>
````

This is useful when you install a new version of node, and must recompile all your C++ addons with the new binary. For example, the `hiredis` package is compiled from C, and if node is updated it will need to be rebuilt.
