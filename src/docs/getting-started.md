---
title: Getting Started
---

### Getting Started

To use Stylely, You must have Node JS installed in your local machine. If you already know Postcss installation and usage, You will find this guide easier. If you don't know, Don't worry, I'll do my best to cover up things.

### Postcss Installation

Postcss is CSS parser which transpile CSS to Javascript Objects like structure and compile with some plugins and converts again into CSS. Postcss is a amazing tool for Front-End Devs.To download PostCSS. Open terminal in you projects folder and type

To initailize your project, Open your terminal in your folder and type

<CodeGroup>
  <CodeGroupItem title="YARN"  active>

```bash:no-line-numbers
yarn add -D postcss postcss-cli
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm i -D postcss postcss-cli
```

  </CodeGroupItem>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add -D postcss postcss-cli
```

  </CodeGroupItem>
</CodeGroup>

Create `postcss.config.js` in your root directory and copy paste below code.

```js
module.exports = {
  plugins: [],
};
```

For Postcss, These are basic installation. For more details, visit official PostCSS Documentation.

### Stylely Installation

To install Stylely. Again Open your terminal and type

<CodeGroup>
  <CodeGroupItem title="YARN" active >

```bash:no-line-numbers
yarn add -D stylely
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm i -D stylely
```

  </CodeGroupItem>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add -D stylely
```

  </CodeGroupItem>
</CodeGroup>

Create `style.css` in your Project folder. Add below code in your CSS file to check whether It works fine,

```css
a {
  bg: red;
  lg-bg: pink;
  focus-bg: yellow;
}
```

Change `postcss.config.js` to,

```js
module.exports = {
  plugins: [require("stylely")],
};
```

Type in your terminal

```bash:no-line-numbers
npm postcss style.css -d styles
```

Your Output css would be like,

```css
a {
  background: red;
}
a:focus {
  background: yellow;
}
@media (min-width: 1024px) {
  a {
    background: yellow;
  }
}
```

You have finally completed your installation parts.
::: warning

PostCSS Installation vary from Framework. Here I just mentioned basic installation. You can google it for your favourite Framework.

:::
