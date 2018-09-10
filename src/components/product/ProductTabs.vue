<template>
  <div class="product-tabs">
    <div class="tab">
      <button v-for="(tab, index) in tabs" :key="index"
              @click="selectedTab = tab"
              :class="{ active: selectedTab === tab }">{{ tab }}
      </button>
    </div>

    <div v-show="selectedTab === 'Reviews'" class="tab-content">
      <app-product-review-list></app-product-review-list>
    </div>

    <div v-show="selectedTab === 'Make a Review'" class="tab-content">
      <app-product-submit-review></app-product-submit-review>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTabs',
  data () {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  }
}
</script>

<style scoped>
  .product-tabs {
    margin: 40px;
    width: 100%;
  }

  .tab {
    overflow: hidden;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
  }

  .tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 15px;
    transition: 0.3s;
    font-size: 17px;
    color: grey;
  }

  .tab button:hover {
    background-color: #ddd;
  }

  .tab button.active {
    background-color: #fff;
    color: #16C0B0;
    border-radius: 5px 5px 0 0;
    border-bottom: 3px solid #16C0B0;
  }

  .tab-content {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
</style>
