<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption"
      v-if="showSwiper"
    >
      <swiper-slide
        v-for='item of list'
        :key='item.id'
      >
        <img
          class="swiper-img"
          :src='item.imgUrl'
        >
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      >
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 5000,
        loop: true
      },
      // swiperList: [{
      //   id: '0001',
      //   imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a4c27b0a5fc1d9e9e620225869089b12.jpg_750x200_e4720428.jpg"
      // }, {
      //   id: '0002',
      //   imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0b0622e5b6ac5fbed3084dd2832e6f8f.jpg_750x200_895321b6.jpg"
      // }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }

}
</script>

<style scoped lang='stylus'>
.wrapper >>>.swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;

  .swiper-img {
    width: 100%;
  }
}
</style>
