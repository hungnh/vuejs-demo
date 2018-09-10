<template>
  <div class="product">
    <div class="product-image">
      <img :src="image"/>
    </div>

    <div class="product-info">
      <h1 v-text-green>{{ title | uppercase }}</h1>
      <p>Shipping: {{ shipping }}</p>

      <p v-if="inStock" v-color:text="'#56B484'">In Stock</p>
      <p v-else v-text-color="'red'">Out of Stock</p>

      <h2>Details</h2>
      <ul>
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
      </ul>

      <h3>Colors:</h3>
      <div class="color-box-wrapper">
        <div class="color-box"
             v-for="(variant, index) in variants"
             :key="variant.variantId"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(index)">
        </div>
      </div>

      <button :class="[inStock ? 'btn-primary' : 'disabledButton']"
              class="btn"
              @click="addToCart"
              :disabled="!inStock">
        Add to Cart
      </button>
    </div>

    <app-product-tabs></app-product-tabs>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: '#56B484',
          variantImage: '/static/images/vmSocks-green.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: '#4C617A',
          variantImage: '/static/images/vmSocks-blue.jpg',
          variantQuantity: 0
        }
      ]
    }
  },
  methods: {
    addToCart () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct (variantIndex) {
      this.selectedVariant = variantIndex
    }
  },
  computed: {
    title () {
      return this.brand + ' ' + this.product
    },
    image () {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock () {
      return this.variants[this.selectedVariant].variantQuantity > 0
    },
    shipping () {
      if (this.premium) {
        return 'Free'
      } else {
        return '2.99$'
      }
    }
  }
}
</script>

<style scoped>
  .product {
    display: flex;
    flex-flow: wrap;
    padding: 1rem;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }

  .product-image {
    width: 80%;
  }

  .product-image,
  .product-info {
    margin-top: 10px;
    width: 50%;
  }

  .color-box-wrapper {
    display: flex;
    margin-bottom: 20px;
  }

  .color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
    border-radius: 5px;
  }

  .color-box:nth-child(n+2) {
    margin-left: 5px;
  }

  .disabledButton {
    background-color: #d8d8d8;
  }
</style>
