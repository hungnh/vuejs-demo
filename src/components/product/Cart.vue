<template>
  <div class="cart"
       v-color:background.delayed="'#54C69D'"
       v-color:text.delayed="'white'"
       v-color:border="'#54C69D'">
    <p>Cart({{ cart.length }})</p>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
  }
</style>
