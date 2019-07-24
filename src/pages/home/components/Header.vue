<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市／景点／游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
      </div>
    </router-link>
    <div class="iconfont arrow-icon">&#xe600;</div>

  </div>

</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style scoped lang='stylus'>
@import '../../../assets/styles/varibles';

.header {
  display: flex;
  height: 0.43rem;
  line-height: 0.43rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.32rem;

    .back-icon {
      text-align: center;
      font-size: 0.15rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.32rem;
    line-height: 0.32rem;
    margin-left: 0.1rem;
    margin-top: 0.06rem;
    padding-left: 0.1rem;
    background: #fff;
    border-radius: 0.05rem;
    font-size: 0.16rem;
    color: #ccc;
  }

  .header-right {
    width: 0.62rem;
    text-align: center;
    font-size: 0.16rem;
    color: #fff;
  }

  .arrow-icon {
    margin-left: -0.15rem;
    margin-right: 0.1rem;
    display: block;
    width: 0.2rem;
    font-size: 30px;
  }
}
</style>
