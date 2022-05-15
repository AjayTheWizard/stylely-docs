---
title: Configuration
---

# Configuration

You can customize Stylely with your own CSS Properties, Selectors or Even Variables.

## Custom CSS Properties

Edit your `postcss.config.js`

```js
const stylely = require("stylely");
// Don't use plugins:[require("stylely")]
// While configuring which may throw Error
module.exports = {
  plugins: [
    stylely({
      extends: {
        props: {
          "custom-prop": "display",
        },
      },
    }),
  ],
};
```

# Demo

```css
.foo {
  custom-prop: flex;
}
```

to

```css
.foo {
  display: flex;
}
```

`key` would be Shorthand Property while it would be converted into it's value while compiling.
::: tip
If you add already existed CSS Shorthand Property, It would be overwritten.
:::

## Custom Pseudo Selector

Edit your `postcss.config.js`

```js
const stylely = require("stylely");
// Don't use plugins:[require("stylely")]
// While configuring which may throw Error
module.exports = {
  plugins: [
    stylely({
      extends: {
        selectors: {
          // Should end with - else It won't work properly
          "focushover-": ":focus:hover",
        },
      },
    }),
  ],
};
```

# Demo

```css
.foo {
  focushover-color: red;
}
```

to

```css
.foo:focus:hover {
  color: red;
}
```

## Custom Breakpoint

Edit your `postcss.config.js`

```js
const stylely = require("stylely");
module.exports = {
  plugins: [
    stylely({
      extends: {
        breakpoints: {
          large: "4000px",
        },
      },
    }),
  ],
};
```

::: warning
Note that `breakpoint` in based on `min-width` not on `max-width`. Stylely is highly inspired by `TailwindCSS` that's why we follow their conventions.
:::

## Custom CSS Variables

```js
const stylely = require("stylely");
module.exports = {
  plugins: [
    stylely({
      extends: {
        variables: {
          primary: "#fff",
        },
      },
    }),
  ],
};
```

While using you don't need to use`var` function in CSS. You can't use it like

```css
.foo {
  bg: primary;
}
```

::: danger

```css
.foo {
  box-shadow: 0px 0px 10px 15px primary;
}
```

above won't work correctly. In Future Versions, It may available.
:::
