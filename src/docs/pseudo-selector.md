---
title: Pseudo Selectors
---

# Pseudo Selectors

Selector in Stylely make your code cleaner. Every selector would end
with `-`.For example,

```css
.foo {
  focus-bg: red;
}
```

would be converted into

```css
.foo:focus {
  background: red;
  margin: 10px;
}
```

and You can also combine two pseudo selectors,

```css
.foo {
  focus-after-bg: red;
}
```

would be converted into

```css
.foo:focus:after {
  background: red;
  margin: 10px;
}
```

::: tip
Note that order of pseudo selectors also maintained. For example both `focus-after-` and `after-focus` are not same.
:::

| Shorthand        | CSS Pseudo Selectors |
| ---------------- | -------------------- |
| `after-`         | `:after`             |
| `before-`        | `:before`            |
| `focus-`         | `:focus`             |
| `hover-`         | `:hover`             |
| `active-`        | `:active`            |
| `last-`          | `:last-child`        |
| `first-`         | `:first-child`       |
| `odd-`           | `:nth-child(odd)`    |
| `even-`          | `:nth-child(even)`   |
| `disabled-`      | `:disabled`          |
| `invalid-`       | `:invalid`           |
| `valid-`         | `:valid`             |
| `holder-`        | `::placeholder`      |
| `select-`        | `::selection`        |
| `firstline-`     | `::first-line`       |
| `firstletter-`   | `::first-letter`     |
| `marker-`        | `::marker`           |
| `focuswithin-`   | `:focus-within`      |
| `focusvisible-`  | `:focus-visible`     |
| `visited-`       | `:visited`           |
| `target-`        | `:target`            |
| `only-`          | `:only-child`        |
| `empty-`         | `:empty`             |
| `checked-`       | `:checked`           |
| `indeterminate-` | `:indeterminate`     |
| `default-`       | `:default`           |
| `required-`      | `:required`          |
| `outofrange-`    | `:out-of-range`      |
| `infrange-`      | `:in-range`          |
| `holdershown-`   | `:placeholdershown`  |
| `autofill-`      | `:autofill`          |
| `readonly-`      | `:readonly`          |
| `open-`          | `[open]`             |
