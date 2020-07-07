import axios from 'axios';

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/guess-melody`,
    timeout: 5000,
    withCredentials: true
  });

  const onSucess = (response) => {
    return response;
  };

  const onFail = (err) => {
    dispatch();
    throw err;
  };

  api.interceptors.response.use(onSucess, onFail);

  return api;
};
