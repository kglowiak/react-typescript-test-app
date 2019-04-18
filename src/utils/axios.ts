import axios from 'axios';

import { API_URL } from '../consts';

const axiosCustom = axios.create({
  baseURL: API_URL,
});

export const get = (url: string) =>
  axiosCustom
    .get(url)
    .then((res: any) => res.data)
    .catch((err: any) => Promise.reject(err));
