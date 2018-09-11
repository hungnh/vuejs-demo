<template>
  <div class="product-reviews mt-3 mb-3">
    <h4 class="title">Product Reviews</h4>
    <hr>
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
import reviewsService from '../../../shared/services/reviews.service'

export default {
  name: 'ProductReviewList',
  created () {
    this.getAllReviews()
  },
  methods: {
    getAllReviews () {
      reviewsService.getAllReviews()
        .then(response => {
          this.reviews = []
          for (let key in response) {
            this.reviews.push(response[key])
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
  .title {
    color: rgb(64, 193, 174);
  }
</style>
