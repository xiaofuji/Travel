<template>
  <div>
    <div class="search">
      <input
        v-model='keyword'
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
      >
    </div>
    <div
      class="search-content"
      ref='search'
      v-show="keyword"
    >
      <ul>
        <li
          class='search-item'
          v-for="item of list"
          :key='item.id'
          @click='handleCityClick(item.name)'
        >
          {{item.name}}
        </li>
        <li
          class='search-item'
          v-show="hasNoData"
        >
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
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

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 0.7rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    padding-left: 0.1rem;
    line-height: 0.31rem;
    background: #fff;
    font-size: 0.16rem;
    color: #666;
  }
}
</style>