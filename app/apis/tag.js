import apiClient from "./apiClient"

export const reqGetTag = (params) => {
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/tag?${searchParam}`);
}