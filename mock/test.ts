// test.ts

import type { MockMethod } from 'vite-plugin-mock'
import path from 'node:path'
import fs from 'node:fs'
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
    response: ({ body }) => {
      console.log('POST 请求被调用')
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
  },
  {
    url: '/api/text',
    method: 'get',
    rawResponse: async (_req: any, res: any) => {
      try {
        const imagePath = path.resolve(__dirname, './demo.png')
        console.log('尝试读取图片:', imagePath)
        const data = await fs.promises.readFile(imagePath)
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200
        res.end(data)
      } catch (err) {
        console.error('读取图片失败:', err)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/plain')
        res.end('Error: Unable to read image file. ' + err.message)
      }
    }
  }
] as MockMethod[]



