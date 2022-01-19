import axios from 'axios';

async function apiGet(url) { 
  const apiGet = await axios.get(url);
  const resApiGet = apiGet.data;
  return resApiGet;
}

async function apiPost(url, data) {
  const apiPost = await axios.post(url, data);
  const resApiPost = apiPost.data;
  return resApiPost;
}

async function apiPut(url, data) {
  const apiPut = await axios.put(url, data);
  const resApiPut = apiPut.data;
  return resApiPut;
}

async function apiDelete(url) {
  const apiDelete = await axios.delete(url);
  const resApiDel = apiDelete.data;
  return resApiDel;
}

export { apiGet, apiDelete, apiPost, apiPut };