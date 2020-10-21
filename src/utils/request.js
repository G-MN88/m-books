function createFly() {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}
function handleError(err) {
  console.log('err', err)
}
// 处理get请求
export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(err => {
        console.log(err)
        handleError(err)
        reject(err)
      })
    })
  }
}
// 处理post请求
export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(err => {
        console.log(err)
        handleError(err)
        reject(err)
      })
    })
  }
}
