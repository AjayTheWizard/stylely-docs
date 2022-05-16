---
title: Introduction
---

### What is Stylely

- Inline Media Queries
- Inline Pseudo Selectors
- Shorthand Syntax
  Stylely is an another powerful Postcss Plugin but It's more than a Plugin and CSS framework. It's not a CSS Preprocessors like SASS, SCSS and so on.

### How differ from CSS Preprocessors

Stylely differ from CSS Preprocessors in only one ways.Those CSS Preprocessors adds new Features to CSS. But Stylely makes easier to write Existing CSS. And also You can enjoy other PostCSS Plugins like AutoPrefixer along with PostCSS for your productionready Web Application. Stylely is currently maintained only by me ( Author of Stylely ). I need some Contributors to develop. I have lot of future plans including `JS in CSS` don't confuse with `CSS in JS` like Emotion. Let's see an simple code to see how Stylely does magic.

Here my `style.css`

```css
.foo {
  bg: grey;
  color: #fff;
  hover-bg: #fff;
  hover-color: grey;
  lg-bg: yellow;
  mg-bg: blue;
  xl-bg: blue;
}
```

Above CSS is like If CSS was created by Kid. Yeah Stylely also created by 16 years old Kid ;) Me.

Stylely converts above into,

```css
.foo {
  background: grey;
  color: #fff;
}
.foo:hover {
  background: #fff;
  color: grey;
}
@media (min-width: 1024px) {
  .foo {
    background: yellow;
  }
  .foo {
  } /* Empty is little bug Don't worry I'll fix it soon. */
  .foo:hover {
    background: pink;
  }
}
@media (min-width: 768px) {
  .foo {
    background: blue;
  }
}
@media (min-width: 1280px) {
  .foo {
    background: blue;
  }
}
```

Wow! Did you see this? Inline Selectors, Inline Media Queries and Shorthand CSS Properties. That's why Styley is better than any CSS Processors. If you do same thing in Sass, Scss or any other CSS Processor, You have write full css with Selectors and Media Queries.

### Future Ideas

I have many ideas but I am currently busy in Examination. Some of future Plans. I'm not sure It will be in future Versions. I just want to tell some,

#### Nested Responsive Syntax

Yeah Custom Function would be fun. For Example,

```css
.foo {
  mx: {
    md: 15px;
    lg: 20px;
  }
}
```

#### Inline Custom Selectors

I can asure It would be included soon after my exams.Currently Stylely support only Inline Pseudo Selectors,

```css
.foo{
  [> bar]-bg: red;
  [-bar]-bg: pink;
  [. bar]-bg: green;
}
```

to

```css
.foo > bar {
  background: red;
}
.foo-bar {
  background: pink;
}
foo . bar {
  background: green;
}
```

#### Custom CSS Functions

Custom Functions is just a idea for Newer Versions. But might be hard to imagine Code.
