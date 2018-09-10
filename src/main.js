import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Product from './components/product/Product'
import Cart from './components/product/Cart'
import ProductSubmitReview from './components/product/ProductSubmitReview'
import ProductReviewList from './components/product/ProductReviewList'
import ProductTabs from './components/product/ProductTabs'
import {uppercase} from './filter/uppercase.filter'
import {color} from '@/directive/color.directive'
import {textGreen} from '@/directive/text-green.directive'
import {textColor} from '@/directive/text-color.directive'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)

// Component registrations
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-cart', Cart)
Vue.component('app-product', Product)
Vue.component('app-product-submit-review', ProductSubmitReview)
Vue.component('app-product-review-list', ProductReviewList)
Vue.component('app-product-tabs', ProductTabs)

// Custom directives
Vue.directive('text-green', textGreen)
Vue.directive('text-color', textColor)
Vue.directive('color', color)

// Filter registrations
Vue.filter('uppercase', uppercase)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
