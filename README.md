# Basic project starter
This repo is my attempt to move from gulpjs to webpack. In time, it will probably replace this [little fella](https://github.com/jrelgin/prototype-template-fe) in time.


## Install dependencies

```
npm install
```


## Develop locally with webpack-dev-server
1. Run

```
npm run dev
```

2. In your browser, navigate to: [http://localhost:2000/](http://localhost:2000/)
## For bundled output

```
npm run build
```

## For production-ready output

```
npm run build:prod
```

## Loaders and Plugins used in this boilerplate

### Loaders
* babel-loader
* html-loader
* sass-loader
* css-loader
* style-loader
* file-loader

### Plugins
* clean-webpack-plugin
* extract-text-webpack-plugin
* html-webpack-plugin


Tons of help from [this article](https://medium.com/@nirjhor123/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a)


### Todos
* Add handlerbars.js
