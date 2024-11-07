import apiClient from "./apiClient"

export const reqGetChecklist = (params) => {
  const id = params?.id ? params.id : ''
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/checklist/${id ? `${id}` : ''}?${searchParam}`);
}

export const reqPostChecklist = (data) => {
  return apiClient.post(`/checklist/`, data);
}

export const reqPatchChecklist = (data) => {
  return apiClient.patch(`/checklist/${data.id}/`, data);
}