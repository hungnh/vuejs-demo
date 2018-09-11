import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Home from './components/Home'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'
import ProductSubmitReview from './components/product/reviews/ProductSubmitReview'
import ProductReviewList from './components/product/reviews/ProductReviewList'
import {uppercase} from './filter/uppercase.filter'
import {color} from '@/directive/color.directive'
import {textGreen} from '@/directive/text-green.directive'
import {textColor} from '@/directive/text-color.directive'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {appConstants} from '@/shared/constants'

Vue.config.productionTip = false

// Use VueResource plugin to make API call
Vue.use(VueResource)
Vue.http.options.root = appConstants.apiEndpoint
Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-Custom-Header', 'Custom Header Demo')
  console.log('Request: ', request)

  next(response => {
    console.log('Response: ', response)
  })
})

// Add VueRouter to handle the routing in the application
Vue.use(VueRouter)

// Component registrations
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-home', Home)
Vue.component('app-cart', Cart)
Vue.component('app-product', Product)
Vue.component('app-product-submit-review', ProductSubmitReview)
Vue.component('app-product-review-list', ProductReviewList)

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
