import axios from 'axios';
import { getToken } from './helpers';

let Authorization;
if (getToken()) {
  Authorization = { Authorization: getToken() };
}

export const http = axios.create({
  // attach api base url here
  baseURL: 'https://staging.odio.com.ng/v1',
  headers: { ...Authorization },
});
