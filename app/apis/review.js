import apiClient from "./apiClient"

export const reqGetReview = (params) => {
  const id = params.id;
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/review${id ? `/house/${id}` : ''}?${searchParam}`);
}