import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

// import { useHomeStore } from '@/store/useHomeStore'
// const store = useHomeStore()

class AxiosService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string, timeout: number) {
    const config: AxiosRequestConfig = {
      baseURL,
      timeout
    }
    this.axiosInstance = axios.create(config)
    this.initInterceptors()
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance
  }

  private initInterceptors() {
    // 添加请求拦截器
    this.axiosInstance.interceptors.request.use(
      function (config: AxiosRequestConfig) {
        // 在发送请求之前做些什么
        return config
      },
      function (error: AxiosError) {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    this.axiosInstance.interceptors.response.use(
      function (response: AxiosResponse) {
        // 对响应数据做点什么
        return response
      },
      function (error: AxiosError) {
        // 对响应错误做点什么
        // store -> show & toast -> store.message + show = true
        // console.log('store show', store.show)
        // store.show = false
        // console.error('axios error:', error)
        // setTimeout(() => {
        //   console.log('store show', store.show)
        // }, 1000)
        return Promise.reject(error)
      }
    )
  }
}

const axiosService = new AxiosService(
  `${import.meta.env.VITE_BASE_URL || ''}${import.meta.env.VITE_API_PREFIX}`,
  5000
)
export default axiosService.getInstance()
