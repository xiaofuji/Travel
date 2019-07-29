import axios from 'axios'

export const getCityInfo = () => new Promise(async (resolve, reject) => {
  let res = await axios.get('/city1.json')
  res = res.data
  if (res.ret && res.data) {
    resolve(res.data)
  } else {
    reject(res.errorMsg)
  }
})







