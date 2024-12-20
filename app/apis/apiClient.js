'use client'

import axios from 'axios'
import { TOKEN_KEY_NAME } from '/app/constants/auth'

const apiClient = axios.create()

apiClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
apiClient.defaults.headers.common['Content-Type'] = 'application/json'
if (typeof window !== 'undefined') {
  apiClient.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(TOKEN_KEY_NAME)}`
}

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY_NAME)

    config.headers['Authorization'] = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      delete apiClient.defaults.headers.common.Authorization
      window.location.href = '/login'
    }
    else {
      let message = '';
      const { data } = error.response
      Object.keys(data).forEach((key) => {
        message += `${key}: ${data[key]}\n`
      })
      alert(message)
    }

    return Promise.reject(error)
  }
)

export default apiClient