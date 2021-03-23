---
title: Testing and Deploying your Node.js app with Travis-CI and Heroku
date: '2015-08-03'
tags:
  - nodejs
  - travis
  - heroku
  - testing
  - deploying
---
When pushing your app to github, it's so easy peasy to also have your app automagically tested with [Travis CI](https://travis-ci.org) and deployed to [Heroku](http://heroku.com).<!-- more-Instructions -->

## `package.json`

1. Make sure you have the `scripts["test", "start"]` properties clearly defined in your `package.json` file, as Travis runs `$ npm test` to test your app and Heroku runs `$ npm start` to run your app. See [how npm handles the "scripts" field](https://docs.npmjs.com/misc/scripts) for more.
2. Have all your module dependencies listed, as Travis and Heroku both `$ npm install` to test and deploy!

Here's my package file for this site:

```json
{
  "name": "matt-berti-blog",
  "version": "0.0.2",
  "private": true,
  "main": "server.js",
  "scripts": {
    "test": "node ./test.js",
    "start": "node ./server.js",
    "start-dev": "npm run watch-css & npm run watch-js",
    "start-test": "DEBUG=blog* nodemon -e js -x 'node ./test.js | node_modules/.bin/tap-spec'",
    "build-css": "node-sass stylesheets/ -o public/css/prebuild/ & postcss --use autoprefixer ./public/css/prebuild/*.css --dir ./public/css/",
    "watch-css": "nodemon -e scss -w stylesheets/ -x 'npm run build-css'",
    "watch-js": "NODE_ENV=development DEBUG=blog* nodemon -e js ./server.js"
  },
  "engines": {
    "node": "0.12.x"
  }
}
```

As you can see, I use don't use any task runners like Gulp or Grunt. Instead I use [NPM as a](http://substack.net/task_automation_with_npm_run) [build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) with watchers like [nodemon](https://github.com/remy/nodemon) to watch for changes, build CSS from Sass, or restart the server when changes happen.

## Travis CI

Once you've signed in at [Travis CI](http://travis-ci.com) and linked your account to Github, go to your Travis account page and sync the Github repositories you'd like to deploy.

### Setup `.travis.yaml`

Set up your [YAML](https://en.wikipedia.org/wiki/YAML) file to tell Travis what to test with. You can do this automatically with the [Travis client](https://github.com/travis-ci/travis.rb) by running `$ travis setup heroku`. You'll need to include the `language`, `node_js` versions, and some deploy properties, like so:

```yaml
language: node_js
node_js:
  - "0.12"
  - "0.11"
deploy:
  skip_cleanup: true
  provider: heroku
  app: mattbertiblog
  api_key:
    secure: "Gdee7Yv+GWsGkwi..."
```

You can (and should!) run your YAML file through Travis's linting app to check for errors. There's both a [command line tool](http://docs.travis-ci.com/user/travis-lint/) and a [web app](http://lint.travis-ci.org/) that can do that.

## Push to Github

Keep in mind that you __don't need to stage any of your `./node_modules`__ as Travis and Heroku install all your dependencies after pushing your files to Github.

You can also add `[ci skip]` to your commit message to skip testing & deployment. I.e.: `$ git commit -m "updated readme [ci skip]"`

When you've committed your git snapshot, push it to Github:

```bash
$ git push origin master
```

Travis will then automatically run the test script and, if it passes...

<img src="http://i.giphy.com/xTiTnJl3DaHGWMcwJW.gif" alt="DUANG~" title="DUANG~" width="326">

...your app will be deployed to Heroku!

<img src="http://i.giphy.com/3o85xrj6vADDjr5SYU.gif" alt="DUANGING" title="Duanging" width="326">

You can check your app's test results on Travis's web app.
