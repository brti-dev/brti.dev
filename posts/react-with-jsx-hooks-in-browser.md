---
title: React with JSX Hooks quick setup for development
date: '2020-06-27'
---

Recently I had the urge to test out some of the amazing stuff I was learning in [React](https://reactjs.org) on some real data from a [side-project](http://videogamin.squarehaven.com "Videogame Site"). I wanted to use [hooks](https://reactjs.org/docs/hooks-intro.html) and [JSX](https://reactjs.org/docs/introducing-jsx.html), and I just wanted to load the React engine via `<script>` tags in the browser, then have the browser compile the JavaScript and JSX. This is obviously purely for development purposes, since the expense to compile is totally unsuitable for production.

To get __React with hooks and JSX up quickly and easily__, do the following:

1. Include the React, React-DOM, and Babel scripts in your HTML `<head>`:
```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
```
2. Enclose your JavaScript/JSX in a `script` tag. You must define the  script type as `text/babel` so the Babel engine knows to compile it.
```html
<script type="text/babel">
const element = (
    <div className="container">
        <h1>Hell O'world!</h1>
    </div>
);
ReactDOM.render(element, document.getElementById('root'));
</script>
```
3. Load your app in your browser.
4. Now that your app is running, respond with an appropriate `React`ion like glee or chest-thumping.
