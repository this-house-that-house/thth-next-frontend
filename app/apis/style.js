import apiClient from "./apiClient"

export const reqGetStyle = (params) => {
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/style?${searchParam}`);
}

export const reqPostStyle = (data) => {
  return apiClient.post('/style/', data);
}

export const reqPutStyle = (data) => {
  return apiClient.put('/style/', data);
}
