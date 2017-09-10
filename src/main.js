// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import PubSub from 'pubsub-js'

Vue.prototype.$PubSub = PubSub;
Vue.config.productionTip = false

Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
