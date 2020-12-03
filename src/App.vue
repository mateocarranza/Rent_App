<template>
  <div id="app">
    <div id="nav">
      <navigation />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/layout/Navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>
  
<style lang="scss">
  @import './scss/App.scss';
</style>