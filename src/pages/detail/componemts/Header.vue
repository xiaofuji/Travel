<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }

}
</script>

<style scoped lang='stylus'>
@import '../../../assets/styles/varibles';

.header-abs {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.4);

  .header-abs-back {
    color: #fff;
    font-size: 0.2rem;
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.32rem;
  line-height: 0.32rem;
  text-align: center;
  font-size: 0.16rem;
  color: #fff;
  background: $bgColor;

  .header-fixed-back {
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
