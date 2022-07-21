---
title: Let and const in Javascript ES6
date: '2022-07-21'
tags:
  - javascript
  - es6
---

This article highlights the quirks of JavaScript's `var` statement, and the clarity that [ES6's `let` and `const` declarations](https://262.ecma-international.org/6.0/#sec-let-and-const-declarations) provide.

## Var

**Hoisted**: The declaration of the variable is moved to the top of that scope.

```js
console.log(x) // undefined (Declaration was hoisted)
console.log(y) // Uncaught ReferenceError: y is not defined
var x = 'x' // declaration
```

**Scope**: Global, or within the function scope declared

```js
var x = 1
{
  var x = 2
}
console.log(x) // 2
```

In the snippet below, the logger will log `undefined` three times because the scope of `i` isn't bound to the timeout callback.

```js
var messages = ['Lorem', 'Ipsum', 'Foobar']
for (var i = 0; i < messages.length; i++) {
  setTimeout(() => console.log(messages[i]), i * 1000)
}
```

To fix this scope issue, bind the variable using an `Array` method:

```js
var messages = ['Lorem', 'Ipsum', 'Foobar']
messages.forEach((message, i) =>
  setTimeout(() => console.log(message), i * 1000)
)
```

Here's another solution: Use `let`...

## Let

Loops with `let` declarations create bindings for each iteration:

```js
var messages = ['Lorem', 'Ipsum', 'Foobar']
for (
  let i = 0; // Change `var` to `let`
  i < messages.length;
  i++
) {
  setTimeout(() => console.log(messages[i]), i * 1000)
}
```

**Scope**: Limited to the block in which it was declared

```js
let x = 1
{
  let x = 2
  console.log(x) // 2
}
console.log(x) // 1
```

**Not hoisted**: Unlike `var`, declaration is required prior to using:

```js
console.log(x) // Uncaught ReferenceError: x is not defined
let x = 'x'
```

## Const

Like `let`, `const` variables are limited to block scope and pre-declaration. However, while `let` variables can be reassigned (though not re-declared), `const` variables must be assigned a value upon declaration, which thereafter cannot be reassigned.
