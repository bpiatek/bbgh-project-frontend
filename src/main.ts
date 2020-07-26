import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CoreuiVue from '@coreui/vue'
import icons from './assets/icons/icons'
import ApiService from '@/api/ApiService'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

// init env things
ApiService.init(process.env.VUE_APP_API_HOST)

// Vue
Vue.use(CoreuiVue)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  icons,
  render: h => h(App)
}).$mount('#app')

// types
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    icons?;
  }
}
