---
title: Extend in Sass
date: '2015-07-27'
tags:
  - sass
  - css
---
From the [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend):

There are often cases when designing a page when one class should have all the styles of another class, as well as its own specific styles. The most common way of handling this is to use both the more general class and the more specific class in the HTML. <!--more-->For example, suppose we have a design for a normal error and also for a serious error. We might write our markup like so:

```html
<div class="error seriousError">
  Oh no! You've been hacked!
</div>
```

And our styles like so:

```css
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  border-width: 3px;
}
```

Unfortunately, this means that we have to always remember to use `.error` with `.seriousError`. This is a maintenance burden, leads to tricky bugs, and can bring non-semantic style concerns into the markup.

The `@extend` directive avoids these problems by telling Sass that one selector should inherit the styles of another selector. For example:

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

is compiled to:

```css
.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  border-width: 3px;
}
```
