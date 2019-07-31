<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list
      :cities='cities'
      :hot='hotCities'
      :letter='letter'
    ></city-list>
    <city-alphabet
      :cities='cities'
      @change='handleLetterChange'
    ></city-alphabet>
  </div>

</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { getCityInfo } from '../../service/city'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
    },
    getCityInfoSucc (data) {
      this.cities = data.cities
      this.hotCities = data.hotCities
    }
  },
  async mounted () {
    try {
      const cityInfo = await getCityInfo()
      this.getCityInfoSucc(cityInfo)
    } catch (e) {
      console.log(e)
      // alert(e || e.msg)
    }

  }

}
</script>

<style scoped>
</style>
