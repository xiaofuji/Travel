<template>
  <div>
    <home-header :city='city'></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icons :list='iconList'></home-icons>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='recommendLists'></home-weekend>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { getHomeInfo } from '../../service/home'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      recommendLists: []

    }
  },
  methods: {
    getHomeInfoSucc (data) {
      this.city = data.city
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.recommendLists = data.recommendLists
    }
  },
  async mounted () {
    try {
      const homeInfo = await getHomeInfo()
      this.getHomeInfoSucc(homeInfo)
    } catch (e) {
      console.log(e)
      // alert(e || e.msg)
    }
  }
}

</script>

<style scoped>
</style>
