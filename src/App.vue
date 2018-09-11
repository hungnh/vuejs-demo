<template>
  <div id="app">

    <app-header></app-header>

    <app-cart :cart="cart"></app-cart>
    <app-product :premium="premium" @add-to-cart="updateCart"></app-product>

    <app-footer></app-footer>

  </div>
</template>

<script>
export default {
  name: 'App',
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

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
