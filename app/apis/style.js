import apiClient from "./apiClient"

export const reqGetStyle = (params) => {
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/style?${searchParam}`);
}