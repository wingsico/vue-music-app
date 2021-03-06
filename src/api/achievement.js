import axios from 'axios'

export function getAchievement (xh) {
  const url = `/api/getAchievement/${xh}`

  return axios({
    url: url,
    method: 'get',
    timeout: 10000
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function getName (token) {
  let url = '/api/getName'

  let headers = {
    'Authorization': `passport ${token}`
  }
  return axios({
    url: url,
    method: 'get',
    headers: headers,
    timeout: 10000
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}