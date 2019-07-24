<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont city-back">&#xe624;</div>
    </router-link>

  </div>

</template>

<script>

export default {
  name: 'CityHeader',

}
</script>

<style scoped lang='stylus'>
@import '../../../assets/styles/varibles';

.header {
  position: relative;
  overflow: hidden;
  font-size: 0.16rem;
  height: 0.32rem;
  line-height: 0.32rem;
  text-align: center;
  background: $bgColor;
  color: #fff;

  .city-back {
    position: absolute;
    left: 0.08rem;
    top: 0.06rem;
    width: 0.2rem;
    height: 0.22rem;
    line-height: 0.22rem;
    text-align: center;
    font-size: 0.18rem;
    color: #fff;
  }
}
</style>
