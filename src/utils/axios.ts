import axios from 'axios';

import { API_URL } from '../consts';

const axiosCustom = axios.create({
  baseURL: API_URL,
});

export const post = (url: string, payload: object) =>
  axiosCustom
    .post(url, payload)
    .then((res: any) => res.data)
    .catch((err: any) => Promise.reject(err));
