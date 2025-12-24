import axiosClient from './axios';

const API_URL = 'https://6946cb9bca6715d122f8eca3.mockapi.io/formsubmissions';

export async function createFormSubmission(payload) {
  const res = await axiosClient.post(API_URL, payload);
  return res.data;
}

export async function getFormSubmissions() {
  const res = await axiosClient.get(API_URL);
  return res.data;
}

export async function updateFormSubmission(id, payload) {
  const res = await axiosClient.put(`${API_URL}/${id}`, payload);
  return res.data;
}

export async function deleteFormSubmission(id) {
  await axiosClient.delete(`${API_URL}/${id}`);
  return true;
}
