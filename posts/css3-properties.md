---
title: CSS3 properties
date: '2015-08-07'
tags:
  - css
  - css3
---
CSS hacks...

<img alt="#sick of your shit" src="/img/posts/sickofyourshit-daenerys.gif" style="width:400px; max-height:calc(272px*(4/5));">

CSS3 FTW!

<img alt="applause for css3" src="/img/posts/applause-renly.gif" style="width:400px; max-height:calc(272px*(4/5)); object-fit:cover; object-position:0 10%;">

&nbsp;<!-- more:CSS3 properties -->

## Properties

`box-sizing`

:  `content-box` (initial): The width and height properties are measured including only the content, but not the padding, border or margin.
:  `border-box`: The width and height properties include the padding and border, but not the margin.
:  ~~`padding-box`~~: The width and height properties include the padding size, and do not include the border or margin.

<figure class="flex pop">
  <figcaption>It's considered <a href="https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/">good practice</a> to set all components to `border-box` by default:</figcaption>

```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
</figure>

`width: *-content`

:  `max-content`: The element width grows with the width of the content similar to an inline element like &lt;span&gt;
:   `min-content`: The width of the element contracts to the narrowest possible width the content allows
:  `fit-content`: The larger of: <sup>1</sup>the intrinsic minimum width, and <sup>2</sup>the smaller of the intrinsic preferred width and the available width

<figure class="flex pop">
  <figcaption>`max-content` "shrinkwraps" the content while `min-content` contracts the content to its narrowest possible width.</figcaption>
  <div class="figure">

```html
<blockquote class="width-max-content">
  A girl gives a man his own name?
</blockquote>
<blockquote class="width-min-content">
  The Lannisters send their regards.
</blockquote>
```
```css
.width-max-content {
  width: max-content;
}
.windth-min-content {
  width: min-content;
}
```
<blockquote class="demo-css3--widthmaxcontent">A girl gives a man his own name?</blockquote>
<blockquote class="demo-css3--widthmincontent">The Lannisters send their regards.</blockquote>
  </div>
</figure>

### Objects

Properties for objects: __images__, __videos__, and __embeds__.

`object-fit`

:  Determines how objects fit within their defined with/height or container.
:  `fill` (default): fill the entire space, ignore aspect ratio<div class="demo-css3--object object-fit--fill"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"></div>
:  `contain`: expand or contract the image, maintaining aspect ratio.<div class="demo-css3--object object-fit--contain"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"></div>
:  `cover`: expand or contract until it covers the width and hight while maintaining aspect ratio<div class="demo-css3--object object-fit--cover"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"></div>
:  `none`: ignore the box width and hight<div class="demo-css3--object object-fit--none"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"></div>
:  `scale-down`: Scale the image until it either fits within the box size (`contain`) or reaches its original size (`none`)...<div class="demo-css3--object object-fit--scale-down"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/8inchesofsnow.jpg" alt="8-9 inches of snow"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"><img src="/img/posts/doesntmatter-sm.jpg" alt="Doesn't matter"></div>

`object-position`

:  Position the object within the box
:  Accepts a [`<position>`](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) coordinate like `top`, `bottom right`, `10px 20px`, `50% 10%`, etc. The initial `object-position` is `50% 50%`.

<figure class="demo-css3--crop-cover">
  <figcaption>Using `object-fit:cover` to nicely crop an awkwardly-sized image.<br>(Via <a href="https://medium.com/@chrisnager/center-and-crop-images-with-a-single-line-of-css-ad140d5b4a87">Chris Nager</a>; "joffrey" &copy; <a href="http://lamwin.deviantart.com/art/joffrey-316381780">lamwin@deviantart</a>)</figcaption>
    <img src="/img/posts/joffrey.jpg" alt="Joffrey">
    <img src="/img/posts/joffrey.jpg" alt="Joffrey">
</figure>



## Values and Units

[`calc()`](http://www.w3.org/TR/css3-values/#calc)

:  Mathematical expressions with addition, subtraction, multiplication, and division

<figure class="flex pop">
  <figcaption>The following sets the `font-size` so that exactly 40em fits within the viewport, ensuring that roughly the same amount of text always fills the screen no matter the screen size. If the rest of the design is specified using the ‘rem’ unit, the entire layout will scale to match the viewport width.</figcaption>

```css
:root {
  font-size: calc(100vw / 40);
}
```
</figure>

[`toggle()`](http://www.w3.org/TR/css3-values/#toggle)

:  Allows descendant elements to cycle over a list of values instead of inheriting the same value.

<figure class="flex pop">
  <figcaption>The following example makes &lt;em&gt; elements italic in general, but makes them normal if they're inside something that's italic:</figcaption>

```css
em { font-style: toggle(italic, normal); }
```
</figure>
<figure class="flex pop">
  <figcaption>`toggle()` accepts more than two values so that nested elements proceed through the values, then repeat. The following example cycles markers for nested lists, so that a top level list has disc-shaped markers, but nested lists use circle, then square, then box, and then repeat through the list of marker shapes, starting again (for the 5th list deep) with disc.</figcaption>

```css
ul { 
  list-style-type: disc;
}
ul ul {
  list-style-type:
    toggle(disc, circle, square, box);
}
```
</figure>

[~~`attr( attribute-name <type-or-unit>? [, <fallback> ]? )`~~]()

:  Applies the value of an HTML or XML attribute such as [data-*](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes).
:  ლ(ಠ益ಠლ) Meager browser support ([polyfill](http://codepen.io/FWeinb/pen/Dsdkr))

<figure class="flex pop">
  <figcaption>Use of `attr()` to visually illustrate data in an XML file:</figcaption>

```xml
<stock>
  <wood length="12"/>
  <wood length="5"/>
  <metal length="19"/>
  <wood length="4"/>
</stock>
```
```css
stock::before {
  display: block;
  content: "The lengths of materials are:";
}
stock > * {
  display: block;
  width: attr(length em); /* default 0 */
  height: 1em;
  border: solid thin;
  margin: 0.5em;
}
wood {
  background: orange url(wood.png);
}
metal {
  background: silver url(metal.png);
}
```
</figure>