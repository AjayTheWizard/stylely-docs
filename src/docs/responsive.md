---
title: Responsive Selectors
---

# Responsive Selectors

Responsive CSS in Stylely would be exactly like Pseudo Selectors in Stylely.
.For example,

```css
.foo {
  lg-bg: red;
}
```

to

```css
@media (min-width: 1024px) {
  .foo {
    background: red;
  }
}
```

::: warning
Order of Responsive and Selectors also still maintained. This would led to some issues.This is the only known bug in Stylely.
:::

| Shorthand | Inline Media Queries |
| --------- | -------------------- |
| `sm`      | `640px`              |
| `md`      | `768px`              |
| `lg`      | `1024px`             |
| `xl`      | `1280px`             |
| `2xl`     | `1536px`             |
