<template>
  <div class="mt-3 mb-3">
    <div v-if="!reviews || !reviews.length">There are no reviews yet.</div>
    <div v-else>
      <input type="text" class="form-control w-50 mb-3"
             v-model="searchText" placeholder="Filter reviews..."/>
      <ul>
        <li v-for="(review, index) in filteredReviews" :key="index">
          <p>{{ review.name }} said "{{ review.review }}"; Rating: {{ review.rating }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../../shared/event-bus'
import reviewsService from '../../shared/services/reviews'

export default {
  name: 'ProductReviewList',
  created () {
    this.getAllReviews()

    eventBus.$on('review-submitted', () => {
      this.getAllReviews()
    })
  },
  methods: {
    getAllReviews () {
      reviewsService.getAllReviews()
        .then(data => {
          this.reviews = []
          for (let key in data) {
            this.reviews.push(data[key])
          }
        })
    }
  },
  data () {
    return {
      reviews: [],
      searchText: ''
    }
  },
  computed: {
    filteredReviews () {
      return this.reviews.filter(
        r => r.name.toLowerCase().match(this.searchText.toLowerCase()) ||
          r.review.toLowerCase().match(this.searchText.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>

</style>
