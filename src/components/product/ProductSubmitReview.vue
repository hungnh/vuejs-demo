<template>
  <form class="review-form"
        @submit.prevent="onSubmit"
        @keyup.enter="onSubmit">

    <div v-if="errors && errors.length">
      <b>Please correct following error(s):</b>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name">
    </div>

    <div>
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
    </div>

    <div>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </div>

    <div>
      <input type="submit" value="Submit">
    </div>

  </form>
</template>

<script>
import {eventBus} from '../../event-bus'

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
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }

        eventBus.$emit('review-submitted', productReview)

        this.name = null
        this.review = null
        this.rating = null
        this.errors = []
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
  .review-form {
    width: 400px;
    padding: 20px;
    margin: 40px;
    border: 1px solid #d8d8d8;
  }

  input {
    width: 100%;
    height: 25px;
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 60px;
  }
</style>
