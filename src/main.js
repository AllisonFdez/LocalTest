// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import Highcharts from 'highcharts'
import VueHighcharts from 'vue-highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import Highcharts from 'highcharts/highstock'

highchartsMore(Highcharts)
Vue.use(VueHighcharts, {Highcharts})

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
