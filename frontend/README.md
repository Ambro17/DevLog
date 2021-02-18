# Starter App - Vue.js with Tailwind

<img width="1164" alt="Example Screenshot" src="homepage.png">

[✨ Demo](https://dreamy-lumiere-c0033c.netlify.app/)

## Credits

Tutorial adapted from this [great post](https://dev.to/vonagedev/using-tailwind-css-with-vue-js-b1b)
Using Ghostwind template from [here](https://github.com/tailwindtoolbox/Ghostwind)

## TODO
 [x] Create Header and Footer vue components
 [x] Implement internationalization (Spanish + English)
 [x] Enable dark mode
 [ ] Migrate posts data to use graphql+strawberry (django? flask?)

## Improvements
 [x] Fine-tune site performance with lighthouse - Score of 95+
 [ ] Make lead layout finish before about page with some css property
 [ ] Auto detect user language and adjust accordingly
 [ ] Use flag svgs instead of emojis to have consistent ui over different fonts on language switcher
 [ ] Make header sticky

## Hacks
 [ ] Replace margin with div and border bottom to create extended space with background color


## Project setup
Install nvm to manage node & npm versions
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm install node
```
>Tested with `node v15.8.0` and `npm 7.5.1`

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```