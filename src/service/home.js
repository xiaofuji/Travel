import axios from 'axios'
// import { mapState } from 'vuex'

export const getHomeInfo = () => new Promise(async (resolve, reject) => {
  let res = await axios.get('/index.json')
  // '/index.json?city=' + this.city
  res = res.data
  if (res.ret && res.data) {
    resolve(res.data)
  } else {
    reject(res.errorMsg)
  }
})





