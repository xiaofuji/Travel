<template>
  <ul class="list">
    <li
      class="item"
      v-for='(item,key) of cities'
      :key='key'
    >{{key}}</li>

  </ul>

</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped lang='stylus'>
@import '../../../assets/styles/varibles';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0.79rem;
  right: 0;
  bottom: 0;
  width: 0.2rem;
  font-size: 0.13rem;

  .item {
    line-height: 0.2rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
