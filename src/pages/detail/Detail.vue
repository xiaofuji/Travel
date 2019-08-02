<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list='list'></detail-list>
    </div>
  </div>

</template>

<script>
import DetailBanner from './componemts/Banner'
import DetailHeader from './componemts/Header'
import DetailList from './componemts/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 某一连锁店销售'
          }]
        },
        { title: '成人五馆联票' }]
      },
      { title: '学生票' },
      { title: '儿童票' },
      { title: '特惠票' },
      ]
    }
  }
}
</script>

<style scoped lang='stylus'>
.content {
  height: 25rem;
}
</style>
