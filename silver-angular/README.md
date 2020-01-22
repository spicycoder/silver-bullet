# Using Stencil components in Angular

## New Angular App

```sh
npm i -g @angular/cli
ng new
```

---

## Install & Save Component Library

```sh
npm i silver-components
```

---

## index.html Changes

> Copy the directory `node_modules/silver-components` to `src/public`

And refer silver-components.js in index.html

```html
<script src="public/silver-components.js"></script>
```

---

## Using the component

```html
<silver-card title="Silver Card!">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
</silver-card>
```

---
