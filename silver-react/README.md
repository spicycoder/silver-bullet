# Using Stencil components in React

## New React App

```sh
npx create-react-app
```

---

## Install & Save Component Library

```sh
npm i -g silver-components
```

---

## index.js Changes

```js
...
import { applyPolyfills, defineCustomElements } from "silver-components/loader/node-main";
...
applyPolyfills().then(() => {
    defineCustomElements(window);
});
```

> Copy the directory `node_modules/silver-components` to `public/static/js`

And refer `silver-components.js` in `index.html`

```html
<script src="static/js/silver-components/dist/silver-components.js"></script>
```

---