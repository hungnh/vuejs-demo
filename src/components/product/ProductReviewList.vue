<template>
  <div>
    <p v-if="!reviews || !reviews.length">There are no reviews yet.</p>
    <div v-else>
      <label>
        <input type="text" v-model="searchText" placeholder="Filter reviews..."/>
      </label>
      <ul>
        <li v-for="(review, index) in filteredReviews" :key="index">
          <p>{{ review.name }} said "{{ review.review }}"; Rating: {{ review.rating }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../../event-bus'

export default {
  name: 'ProductReviewList',
  created () {
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview)
    })
  },
  data () {
    return {
      reviews: [],
      searchText: ''
    }
  },
  computed: {
    filteredReviews () {
      return this.reviews.filter(r => r.name.toLowerCase().match(this.searchText.toLowerCase()) || r.review.toLowerCase().match(this.searchText.toLowerCase()))
    }
  }
}
</script>

<style scoped>

</style>
