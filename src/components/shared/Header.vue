<template>
  <div class="header">
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand text-white font-weight-bold" @click="goToHomePage">
        VueShop
      </span>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" exact>Product</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reviews" class="nav-link" active-class="active">Reviews</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/make-a-review" class="nav-link" active-class="active">Make a Review</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goToHomePage () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .navbar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 60px;
    margin-bottom: 15px;
  }
  .navbar-brand {
    font-size: 25px;
    cursor: pointer;
  }
  .active {
    font-weight: 600;
    text-decoration: underline;
  }
  a {
    text-decoration: none;
    color: white;
  }
</style>
