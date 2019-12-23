# Using Stencil components in Vue

## New Vue App

```sh
npm i -g @vue/cli
vue create
```

---

## Install & Save Component Library

```sh
npm i -g silver-components
```

---

## index.html Changes

> Copy the directory `node_modules/silver-components` to `public`

And refer silver-components.js in index.html

```html
<script src="./silver-components/dist/silver-components.js"></script>
```

---

## Using the component

```html
<silver-card title="Hello">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
</silver-card>
```