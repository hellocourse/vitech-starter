// test.ts

import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
        // 在终端显示
      console.log('GET 请求被调用')
      return {
        code: 0,
        data: {
          name: 'vben',
          age: 25
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 1000,
    response: ({ body, method }) => {
      console.log('POST 请求被调用')
      console.log('请求方法:', method)
      console.log('请求数据:', body)
      return {
        code: 0,
        data: {
          message: '这是 POST 请求的响应',
          receivedData: body,
          serverTime: new Date().toISOString()
        }
      }
    }
  }
] as MockMethod[]

