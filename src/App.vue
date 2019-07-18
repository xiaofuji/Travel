<template>
  <div id="app">
    <!--<router-link
      to='/home'
      class="home"
    >home</router-link>
    <router-link
      to='/list'
      class="list"
    >list</router-link>-->
    <router-view></router-view>
  </div>

</template>

<script>
// import List from './components/list/List'
// import Home from './components/home/Home'

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
.home {
  display: block;
}
</style>
