# Portfolio made with Vue.js + Vite 🚀

This template should help get you started developing with Vue 3 in Vite. 

The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Process to create this project with Vite 🚀

```
    npm init vite portfolio
    cd portfolio
```

#### ➡️ 1. Run the CLI tool to scan your template files for classes and build your CSS 
(first posibility 🥇)
```
    npx tailwindcss -i ./src/assets/css/index.css -o ./public/dist/output.css --watch
```

#### ➡️ 2. Install TailwindCSS with Postcss 
(the best posibility 🎖️)
```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

##### Start using Tailwind in HTML (Link to CSS - If you choose the first option 🥇)
```
    <link rel="stylesheet" href="./dist/output.css">
```

##### Start using Tailwind in JS (Link to CSS - If you choose the second option 🥈)
```
    import './assets/css/index.css'
```

##### Then: Run server 🦄 & See the page 📄
```
    npm run dev
```

## Resources that I use on this project

- [Vite JS](https://vitejs.dev/) + [Vue 3](https://vuejs.org/) 🚀
- [Tailwind CSS](https://tailwindcss.com/) 🦄
- [Package oh-vue-icons 📦 | Icons for Vue ](https://oh-vue-icons.js.org/) 😍
