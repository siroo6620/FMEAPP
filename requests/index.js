import axios from 'axios'

export const api = 'http://fme.riceafrika.com/api'

const axiosClient = axios.create({
    baseURL: api,
})

let store

export const injectStore = _store => {
    store = _store
}


axiosClient.interceptors.request.use(function (config) {
    const auth = store.getState().auth

    config.headers.Authorization = auth.token ? `${auth.token}` : "";
    return config;
});

export const setUpInterceptor = (auth) => {
}

export default axiosClient