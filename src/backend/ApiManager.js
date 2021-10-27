import axios from 'axios';
import { BaseUrl } from './Config';
axios.defaults.baseURL = BaseUrl;
axios.interceptors.response.use(function (response) {
    return { ok: true, data: response?.data };
}, function (error) {
    return { ok: false, error: error?.response?.data }
});
export const ApiManager = {
    getData: async (endpoint, params = {}) => {
        return axios.get(endpoint, { params });
    },
    postData: async (endpoint, data, params = {}) => {
        return axios.post(endpoint, data, { params });
    },
    putData: async (endpoint, data, params = {}) => {
        return axios.put(endpoint, data, { params });
    },
    patchData: async (endpoint, data, params = {}) => {
        return axios.patch(endpoint, data, { params });
    },
    deleteData: async (endpoint, params) => {
        return axios.delete(endpoint, { params });
    },
};


/**
 *  const response = await ApiManager.getData(`/movies.json`) // Final url will be BaseURL + "/movies.json" due to default base url
 *  if (response?.ok)
 *    console.log(response.data);
 *  else
 *    console.log("Error", response.error)
 */
