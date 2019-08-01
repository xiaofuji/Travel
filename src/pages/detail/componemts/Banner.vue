<template>
  <div>
    <div
      class="banner"
      @click='handleBannerClick'
    >
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg"
      >
      <div class="banner-info">
        <div class="banner-title">北京欢乐谷(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe601;</span>27</div>
      </div>
    </div>
    <common-gallery
      :imgs='imgs'
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>

</template>

<script>
import CommonGallery from '../../../../src/common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery

  },
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_350x240_dd696261.jpg',
        'http://img1.qunarzz.com/sight/p0/1906/e8/e88430aafb498100a3.img.jpg_350x240_cc778652.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style scoped lang='stylus'>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 0.3rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

    .banner-title {
      flex: 1;
      padding: 0 0.1rem;
      font-size: 0.16rem;
    }

    .banner-number {
      margin-top: 0.08rem;
      padding: 0 0.2rem;
      height: 0.16rem;
      line-height: 0.16rem;
      border-radius: 0.1rem;
      background: rgba(0, 0, 0, 0.4);
      font-size: 0.12rem;
    }

    .banner-icon {
      font-size: 0.12rem;
    }
  }
}
</style>
