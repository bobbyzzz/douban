import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
// import Vant from 'vant'
import VueLazyLoad from 'vue-lazyload'
import base from './static/js/base'
import 'vant/lib/index.css'
Vue.use(base)
// Vue.use(Vant)

import { 
  NavBar,
  Icon,
  Tabs,
  Tab,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Rate,
  Card,
} from 'vant'
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Rate)
Vue.use(Card)

Vue.use(VueLazyLoad, {
  error: require('./static/img/lazyload.gif'),
  loading: require('./static/img/lazyload.gif'),
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')