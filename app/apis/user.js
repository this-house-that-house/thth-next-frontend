import apiClient from "./apiClient"

export const reqGetUser = (params) => {
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/user?${searchParam}`);
}