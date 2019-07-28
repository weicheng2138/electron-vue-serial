import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import { createPersistedState, createSharedMutations } from "vuex-electron"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(require('bootstrap-vue/dist/bootstrap-vue.common.min')); 
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')


