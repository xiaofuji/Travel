<template>
  <div id="app">
    <About />
    <Home1 />
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link
            to='/about'
            class="list-group-item"
          >About</router-link>
          <router-link
            to='/home1'
            class="list-group-item"
          >Home</router-link>
          <!--<a href="#/about" class="list-group-item router-link-exact-active activeClass">About</a>
        <a href="#/home" class="list-group-item">Home</a>-->
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <router-view></router-view>
              <!--<div>
              <h2>about组件</h2>
              <p>接收外部数据： atguigu</p><input type="text">
            </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home1 from './views/Home1'
import About from './views/About'

export default {
  name: 'app',
  components: {
    Home1,
    About
  }
}
</script>

<style>
</style>
