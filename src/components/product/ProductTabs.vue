<template>
  <div class="product-tabs">
    <span class="tab"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab = tab"
          :class="{ activeTab: selectedTab === tab }">{{ tab }}</span>

    <div v-show="selectedTab === 'Reviews'">
      <app-product-review-list></app-product-review-list>
    </div>

    <div v-show="selectedTab === 'Make a Review'">
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
  }

  .tab {
    cursor: pointer;
  }

  .tab:nth-child(n+2) {
    margin-left: 20px;
  }

  .activeTab {
    color: #16C0B0;
    text-decoration: underline;
  }
</style>
