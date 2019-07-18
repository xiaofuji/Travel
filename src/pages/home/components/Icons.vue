<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        >
        <p class="icon-desc">景点门票</p>
      </div>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"
        >
        <p class="icon-desc">故宫</p>
      </div>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
        >
        <p class="icon-desc">北京必游</p>
      </div>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png"
        >
        <p class="icon-desc">水上乐园</p>
      </div>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png"
        >
        <p class="icon-desc">爬长城</p>
      </div>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png"
        >
        <p class="icon-desc">古北水镇</p>
      </div>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"
        >
        <p class="icon-desc">动植物园</p>
      </div>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png"
        >
        <p class="icon-desc">北京野生动植物</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
}
</script>

<style scoped lang='stylus'>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  font-size: 0.16rem;

  .icon {
    position: relative;
    float: left;
    overflow: hidden;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.22rem;
      box-sizing: border-box;
      padding: 0.05rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      margin-top: 0.04rem;
      height: 0.22rem;
      line-height: 0.22rem;
      text-align: center;
      color: #333;
    }
  }
}
</style>
