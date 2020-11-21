import axios from 'axios';

const URL = `https://5.react.pages.academy/six-cities`;
const TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const createApi = (onAuthorized) => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onError = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onAuthorized();
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
