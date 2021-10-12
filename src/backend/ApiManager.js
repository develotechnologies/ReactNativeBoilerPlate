import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { BaseUrl } from './Config';
axios.defaults.baseURL = BaseUrl;

export const ApiManager = {
    getData: async (endpoint, params = {}, showErrorAlert = true) => {
        let res;
        try {
            res = await axios.get(endpoint, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            // if (showErrorAlert) showAlert(true, error.message)
            return { ok: false, error: error.response.data };
        }
    },
    postData: async (endpoint, data, params = {}, showErrorAlert = true) => {
        let res;
        try {
            res = fetch(BaseUrl + endpoint, JSON.stringify(data));
            res = await axios.post(endpoint, data, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: null };
        } catch (error) {
            if (showErrorAlert) {
                if (error.response.status == 400)
                    showMessage({
                        message: "Error",
                        description: "Invalid Parameters!",
                        type: "danger",
                    })
                else
                    showMessage({
                        message: "Error",
                        description: "Something went wrong!",
                        type: "danger",
                    })
            }
            return { ok: false, error: error.response.data };
        }
    },
    putData: async (endpoint, data, params = {}, showErrorAlert = true) => {
        let res;
        try {
            res = await axios.put(endpoint, data, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            // if (showErrorAlert) showAlert(true, error.message)
            return { ok: false, error: error.response.data };
        }
    },
    patchData: async (endpoint, data, params = {}, showErrorAlert = true) => {
        let res;
        try {
            res = await axios.patch(endpoint, data, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            // if (showErrorAlert) showAlert(true, error.message)
            return { ok: false, error: error.response.data };
        }
    },
    deleteData: async (endpoint, params, showErrorAlert = true) => {
        let res;
        try {
            res = await axios.delete(endpoint, { params });
            if (res?.status === 200) {
                return { ok: true, data: res.data };
            } else return { ok: false, data: [] };
        } catch (error) {
            // if (showErrorAlert) showAlert(true, error.message)
            return { ok: false, error: error.response.data };
        }
    },
};
