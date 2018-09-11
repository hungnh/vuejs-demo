import Vue from 'vue'
import {appConstants} from '../../shared/constants'

export default {
  getAllReviews () {
    return Vue.http.get(`${appConstants.apiEndpoint}/reviews.json`)
      .then(response => response.json())
      .catch(error => console.log(error))
  },
  submitReview (productReview) {
    return Vue.http.post(`${appConstants.apiEndpoint}/reviews.json`, productReview)
      .then(response => response.json())
      .catch(error => console.log(error))
  }
}
