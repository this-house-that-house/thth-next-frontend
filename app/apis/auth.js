import apiClient from "./apiClient"

export const reqAuth = (data) => {
  return apiClient.post('/auth/', data)
}