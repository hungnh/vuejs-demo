<template>
  <div class="submit-review">
    <h4 class="title">Make a Review</h4>
    <hr>

    <form class="review-form"
          @submit.prevent="onSubmit">
      <div v-if="errors && errors.length" class="mb-3">
        <b>Please correct following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>

      <div class="mb-3">
        <label for="name">Name:</label>
        <input id="name" class="form-control" v-model="name">
      </div>

      <div class="mb-3">
        <label for="review">Review:</label>
        <textarea id="review" class="form-control" v-model="review"></textarea>
      </div>

      <div class="mb-3">
        <label for="rating">Rating:</label>
        <select id="rating" class="form-control"
                v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </div>

      <div>
        <input type="submit" value="Submit" class="btn btn-primary w-100">
      </div>
    </form>
  </div>
</template>

<script>
import reviewsService from '../../../shared/services/reviews.service'

export default {
  name: 'ProductSubmitReview',
  data () {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit () {
      this.errors = []

      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }

        reviewsService.submitReview(productReview)

        this.name = null
        this.review = null
        this.rating = null
      } else {
        if (!this.name) this.errors.push('Name required.')
        if (!this.review) this.errors.push('Review required.')
        if (!this.rating) this.errors.push('Rating required.')
      }
    }
  }
}
</script>

<style scoped>
  .title {
    color: rgb(64, 193, 174);
  }
  .review-form {
    width: 400px;
  }

  textarea {
    width: 100%;
    height: 60px;
  }
</style>
