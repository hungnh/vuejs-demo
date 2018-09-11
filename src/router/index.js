import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import ProductReviewList from '../components/product/reviews/ProductReviewList'
import ProductSubmitReview from '../components/product/reviews/ProductSubmitReview'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', component: Home },
    { path: '/reviews', component: ProductReviewList },
    { path: '/make-a-review', component: ProductSubmitReview },
    { path: '*', redirect: '/' }
  ]
})
