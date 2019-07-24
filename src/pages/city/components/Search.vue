<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      placeholder="输入城市名或拼音"
    >
  </div>

</template>

<script>

export default {
  name: 'CitySearch',

}
</script>

<style scoped lang='stylus'>
@import '../../../assets/styles/varibles';

.search {
  font-size: 0.16rem;
  padding: 0 0.025rem;
  height: 0.36rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    padding: 0 0.025rem;
    width: 100%;
    height: 0.31rem;
    line-height: 0.31rem;
    text-align: center;
    color: #666;
    font-size: 0.14rem;
    border: none;
    border-radius: 0.03rem;
  }
}
</style>
