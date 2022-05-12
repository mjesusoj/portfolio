# My Portfolio made with Vue 3 + Vite 🚀

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Config Project with Vite (Process)
```
    npm init vite portfolio
    cd portfolio
```

#### Run the CLI tool to scan your template files for classes and build your CSS
```
    npx tailwindcss -i ./src/assets/css/index.css -o ./public/dist/output.css --watch
```

##### Start using Tailwind in HTML (Link to CSS)
```
    <link rel="stylesheet" href="./dist/output.css">
```

###### Finally: Run server
```
    npm run dev
```