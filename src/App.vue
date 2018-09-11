<template>
  <div id="app" class="container">
    <app-header></app-header>

    <div class="contents">
      <router-view></router-view>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
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

  .contents {
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>
