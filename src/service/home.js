import axios from 'axios'

export const getHomeInfo = () => new Promise(async (resolve, reject) => {
  let res = await axios.get('/index.json')
  res = res.data
  if (res.ret && res.data) {
    resolve(res.data)
  } else {
    reject(res.errorMsg)
  }
})





