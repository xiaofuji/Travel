<template>
  <div
    class="list"
    ref="wrapper"
  >
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang='stylus'>
.list {
  overflow: hidden;
  position: absolute;
  top: 0.68rem;
  right: 0;
  bottom: 0;
  left: 0;

  /* list此处的定位是为了来引用better-scroll */
  .title {
    padding-left: 0.1rem;
    line-height: 0.27rem;
    background: #eee;
    font-size: 0.13rem;
    color: #ccc;
  }

  .button-list {
    overflow: hidden;
    padding: 0.05rem 0.3rem 0.05rem 0.05rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.05rem;
        padding: 0.05rem 0;
        font-size: 0.13rem;
        text-align: center;
        border: 0.01rem solid #ccc;
        border-radius: 0.03rem;
      }
    }
  }

  .item-list {
    .item {
      padding-left: 0.1rem;
      line-height: 0.38rem;
      font-size: 0.13rem;
      border-bottom: 0.01rem solid #eee;
    }
  }
}
</style>
