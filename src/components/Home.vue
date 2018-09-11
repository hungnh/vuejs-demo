<template>
  <div class="home">
    <app-cart :cart="cart"></app-cart>
    <app-product :premium="premium" @add-to-cart="updateCart"></app-product>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      premium: false,
      cart: []
    }
  },
  methods: {
    updateCart (id) {
      this.cart.push(id)
    }
  }
}
</script>

<style scoped>

</style>
