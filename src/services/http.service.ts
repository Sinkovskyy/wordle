import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export class HttpService {
  static async request<T = any>(
    axiosConfig: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.request(axiosConfig)
      return response
    } catch (e) {
      throw new Error('Axios error:' + e)
    }
  }
}
