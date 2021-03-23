---
title: CSS Flexbox properties
date: '2015-07-28'
tags:
  - css
  - flexbox
  - responsive design
customHeading: <h1><a href="/blog/css-flexbox-properties" class="width-flush demo-cfp--flexcontainer demo-cfp--flexcontainer-wrap demo-cfp--styled"><span>C</span><span>S</span><span>S</span> <span>flexbox</span> <span>properties</span></a></h1>

---
I've gotten so used to using CSS hacks like positioning and [floating](http://css.maxdesign.com.au/floatutorial/) and [clearfixing](http://nicolasgallagher.com/micro-clearfix-hack/) over the years that it was at first hard for me to wrap my head around the magnificent simplicity of [CSS Flexboxes](https://drafts.csswg.org/css-flexbox-1). Here are my notes -- the properties listed and explained along with some examples that helped me understand.<!--more-->

<figure class="pop flex">
  <figcaption>Flexboxes have two components: containers and flex items. To create a flexbox, the container should be given the `display: flex;` CSS property. To display the same figure with inner floating elements, you would need a clearfix.</figcaption>

```css
.flex-container {
  display: flex;
}
```
```html
<div class="flex-container">
  <div>flex item</div>
  <div>flex item</div>
</div>
```
</figure>

## Container properties

[`flex-flow`](https://drafts.csswg.org/css-flexbox-1/#flex-flow-property)
:  `<flex-direction> || <flex-wrap>`
:  Shorthand for setting the flex-direction and flex-wrap properties described below.

[`flex-direction`](https://drafts.csswg.org/css-flexbox-1/#flex-direction-property)
:  `row | row-reverse | column | column-reverse`

[`flex-wrap`](https://drafts.csswg.org/css-flexbox-1/#flex-wrap-property)
:  `nowrap | wrap | wrap-reverse`
:  Controls whether the flex container is single-line or multi-line, and the direction of the [cross-axis](https://drafts.csswg.org/css-flexbox-1/#cross-axis), which determines the direction new lines are stacked in.

`align-items`
:  `flex-start | flex-end | center | baseline | stretch`
:  Sets the default alignment for all of the flex container’s items. This value can be overwidden on each individual flex item with `align-self`.

<figure>
  <img alt="align-items" src="/img/posts/flex-align.svg">
  <figcaption>An illustration of the five align-items keywords and their effects on a flex container with four colored items.</figcaption>
</figure>

[`justify-content`](https://drafts.csswg.org/css-flexbox-1/#justify-content-property)
:  `flex-start | flex-end | center | space-between | space-around`
:  Horizontally aligns content __after__ any flexible lengths and any auto margins have been resolved; Helps distribute extra free space.

<figure>
  <img alt="justify-content" src="/img/posts/justify-content.svg">
  <figcaption>An illustration of the five justify-content keywords and their effects on a flex container with three colored items.</figcaption>
</figure>

[`align-content`](https://drafts.csswg.org/css-flexbox-1/#align-content-property)
:  `flex-start | flex-end | center | space-between | space-around | stretch`
:  Vertical (cross-axis) alignment for milti-line (more than one row of flex items) flex containers

<figure>
  <img alt="align-content" src="/img/posts/align-content.svg">
  <figcaption>An illustration of the align-content keywords and their effects on a multi-line flex container.</figcaption>
</figure>

## Flex Item (children) properties

[`order`](https://drafts.csswg.org/css-flexbox-1/#order-property)
:  `<integer>`

[`flex`](https://drafts.csswg.org/css-flexbox-1/#flex-property)
:  `initial | auto | none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’> ]`
:  Default: `0 1 auto`
:  `initial` &rArr; `0 1 auto` -- Sizes the item based on the width/height properties. 
:  `auto` &rArr; `1 1 auto` -- Sizes the item based on the width/height properties, but makes them fully flexible, so that they absorb any free space along the main axis.
:  `none` &rArr; `0 0 auto` -- sizes the item according to the width/height properties, but makes the flex item fully inflexible. This is similar to initial, except that flex items are not allowed to shrink, even in overflow situations.
:  Specifies the components of a flexible length.
:  When a box is a flex item, `flex` is consulted instead of the main size property to determine the main size of the box.
:  Authors are encouraged to control flexibility using the `flex` shorthand rather than with its longhand properties directly (below), as the shorthand correctly resets any unspecified components to accommodate common uses^[[W3C Editor's Draft: CC Flexbox Module](https://drafts.csswg.org/css-flexbox-1/#flex-components)]

<figure class="pop">
  <figcaption>Milti-line flex containers with `flex: initial` and `flex: auto`.</figcaption>
  <div class="demo-cfp--figure">
    <div class="demo-cfp--flexcontainer demo-cfp--flexcontainer-wrap demo-cfp--styled w-small">
      <div>foo</div>
      <div>bar</div>
      <div>fuuu</div>
      <div>baaa</div>
    </div>
  </div>
  <div class="demo-cfp--figure">
    <div class="demo-cfp--flexcontainer demo-cfp--flexcontainer-wrap demo-cfp--styled demo-cfp--flexlines-width-auto w-small">
      <div>foo</div>
      <div>bar</div>
      <div>fuuu</div>
      <div>baaa</div>
    </div>
  </div>

```html
<div class="flex-container">
  <div>foo</div>
  <div>bar</div>
  <div>fuuu</div>
  <div>baaa</div>
</div>
<div class="flex-container
  flex-auto">
  <div>foo</div>
  <div>bar</div>
  <div>fuuu</div>
  <div>baaa</div>
</div>
```
```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
  width: 170px;
}

.flex-container > * {
  flex: initial;
  min-width: 50px;
}

.flex-auto > * {
  flex: auto;
}
```
</figure>

`flex-grow`
:  `<number>`
:  Default: `1`
:  Determines how much the flex item will grow relative to the rest of the flex items in the flex container.

`flex-shrink`
:  `<number>`
:  Default: `1`
:  Determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed.
:  By default, flex items won’t shrink below their minimum content size (the length of the longest word or fixed-size element). To change this, set the `min-width` or `min-height` property.

`flex-basis`
:  `auto | content | <width>`
:   The initial main size of the flex item.

<figure>
  <img src="/img/posts/rel-vs-abs-flex.svg">
  <figcaption>A diagram showing the difference between "absolute" flex (starting from a basis of zero) and "relative" flex (starting from a basis of the item’s content size). The three items have flex factors of `1`, `1`, and `2`, respectively: notice that the item with a flex factor of `2` grows twice as fast as the others.</figcaption>
</figure>

`align-self`
:  `auto | flex-start | flex-end | center | baseline | stretch`
:  Individual flex item property that overrides the default value set by the flex container's `align-items` property.

## Aligning

### Aligning with `auto` margins on flex items

One use of auto margins in the main axis is to separate flex items into distinct "groups". The following example shows how to use this to reproduce a common UI pattern - a single bar of actions with some aligned on the left and others aligned on the right.

<figure class="pop">
  <div class="demo-cfp--figure" style="width:100%;">
    <ul class="demo-cfp--flexcontainer demo-cfp--nav-styled">
      <li><a href=/about>About</a>
      <li><a href=/projects>Projects</a>
      <li><a href=/interact>Interact</a>
      <li id="login"><a href=/login>Login</a>
    </ul>
  </div>
  <div>

```html
<nav>
  <ul>
    <li><a href=/about>About</a></li>
    <li><a href=/projects>Projects</a></li>
    <li><a href=/interact>Interact</a></li>
    <li id="login"><a href=/login>Login</a></li>
  </ul>
</nav>
```
```css
nav > ul {
  display: flex;
}
nav > ul > li {
  min-width: min-content;
  /* Prevent items from getting too small for their content. */
}
nav > ul > #login {
  margin-left: auto;
}
```
  </div><!--/.demo-cfp--styled-codes-->
</figure>


## Examples

<figure>
  <figcaption>Using `order` to manipulate visual presentation while leaving source order intact. The Article is given a `min-width` value while the side content, Nav and Aside, are fixed. A media query arranges content into columns on small screens.</figcaption>
  <iframe width="100%" height="300" src="//jsfiddle.net/mrberti/c7t0fbb8/3/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</figure>

<figure>
  <figcaption>A right-aligned navigation that centers and then wraps into rows on medium and smaller screens (via <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks: A Complete Guide to Flexboxes</a> which is much more complete than this guide):</figcaption>

```css
/* Large */
.navigation {
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: flex-end;
}

/* Medium screens */
@media all and (max-width: 800px) {
  .navigation {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    justify-content: space-around;
  }
}

/* Small screens */
@media all and (max-width: 500px) {
  .navigation {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
```
</figure>


## Additional resources

- [Solved by Flexbox: Cleaner, hack-free CSS](https://philipwalton.github.io/solved-by-flexbox/)
- [Udacity: Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)