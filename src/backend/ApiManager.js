import axios from 'axios';
import { BaseUrl } from './Config';
axios.defaults.baseURL = BaseUrl;
axios.interceptors.response.use(function (response) {
    return { ok: true, data: response?.data };
}, function (error) {
    return { ok: false, error: error?.response?.data }
});
export const ApiManager = {
    get: async (endpoint, params = {}) => {
        return axios.get(endpoint, { params });
    },
    post: async (endpoint, body, params = {}) => {
        return axios.post(endpoint, body, { params });
    },
    put: async (endpoint, body, params = {}) => {
        return axios.put(endpoint, body, { params });
    },
    patch: async (endpoint, body, params = {}) => {
        return axios.patch(endpoint, body, { params });
    },
    delete: async (endpoint, params) => {
        return axios.delete(endpoint, { params });
    },
};


/**
 * EXAMPLE USAGE
 *  const response = await ApiManager.getData(`/movies.json`) // Final url will be BaseURL + "/movies.json" due to default base url
 *  if (response?.ok)
 *    console.log(response.data);
 *  else
 *    console.log("Error", response.error)
 */
