import axios from 'axios';
import { BaseUrl } from './Config';
axios.defaults.baseURL = BaseUrl;
axios.interceptors.response.use(function (response) {
    console.log(response)
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export const ApiManager = {
    getData: async (endpoint, params = {}) => {
        let res;
        try {
            res = await axios.get(endpoint, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            return { ok: false, error: error.response.data };
        }
    },
    postData: async (endpoint, data, params = {}) => {
        let res;
        try {
            res = fetch(BaseUrl + endpoint, JSON.stringify(data));
            res = await axios.post(endpoint, data, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: null };
        } catch (error) {
            return { ok: false, error: error.response.data };
        }
    },
    putData: async (endpoint, data, params = {}) => {
        let res;
        try {
            res = await axios.put(endpoint, data, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            return { ok: false, error: error.response.data };
        }
    },
    patchData: async (endpoint, data, params = {}) => {
        let res;
        try {
            res = await axios.patch(endpoint, data, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            return { ok: false, error: error.response.data };
        }
    },
    deleteData: async (endpoint, params) => {
        let res;
        try {
            res = await axios.delete(endpoint, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            return { ok: false, error: error.response.data };
        }
    },
};
