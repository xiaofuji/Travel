<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>

</template>

<script>
import DetailBanner from './componemts/Banner'
import DetailHeader from './componemts/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped lang='stylus'>
.content {
  height: 25rem;
}
</style>
