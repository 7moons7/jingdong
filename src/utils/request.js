/* eslint-disable */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/b72133bc067845bab6395de5111a5fd6/jingdong',
  timeout: 10000
})
// 封装axios的请求 创建一个设置好的promise去发axios请求
export const post = (url, data = {}) => {
  return new Promise((resolve, rejext) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/jason'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
// 发送get请求
export const get = (url, prarams = {}) => {
  return new Promise((resolve, rejext) => {
    instance.post(url, { prarams }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
