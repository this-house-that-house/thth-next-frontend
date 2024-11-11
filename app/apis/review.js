import apiClient from "./apiClient"

export const reqGetReview = (params) => {
  const id = params.id;
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/review${id ? `/house/${id}` : ''}?${searchParam}`);
}

export const reqGetReviewDetail = (params) => {
  const id = params.id;
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/review/${id}/?${searchParam}`);
}

export const reqGetReviewStyle = (params) => {
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/review/style?${searchParam}`);
}

export const reqPostReview = (data) => {
  return apiClient.post(`/review/`, data);
}

export const reqPatchReview = (data) => {
  const id = data.id;
  return apiClient.patch(`/review${id ? `/${id}/` : '/'}`, data);
}