import apiClient from "./apiClient"

export const reqGetHouse = (params) => {
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/house?${searchParam}`);
}