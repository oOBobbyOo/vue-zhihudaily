// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick

Vue.use( Vuex )
Vue.use( infiniteScroll )

const store = new Vuex.Store({
	state: {
		showSidebar: false,
		flag: false
	},
	mutations: {
		header(state, n) {
		  	if ( n ) {
		  		state.flag = true
		  	} else {
		  		state.flag = false
		  	}
		},
		toggle(state, n) {
		  	if ( n ) {
		  		state.showSidebar = true
		  	} else {
		  		state.showSidebar = false
		  	}
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
