# rfid-weight-machine-app

> An electron-vue project

#### Build Setup

``` bash

# npm need some dependency reinstall
npm install --global --production windows-build-tools (Windows)
npm install -g electron-prebuilt  

# pyrhon version need to be set over version 2.7
# node versoin need not to be 12, 10.16.0 should be ok.
sudo npm cache clean -f
sudo n 10.16.0

# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# electron rebuild for serialport setting
electron-rebuild


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
