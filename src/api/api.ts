import axios, { AxiosRequestConfig } from 'axios';

const api = () => {
    const config: AxiosRequestConfig = {
        baseURL: 'https://rickandmortyapi.com/api',
        timeout: 60 * 1000,
    };

    return axios.create(config);
};

export default api();
