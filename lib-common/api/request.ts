import axios from 'axios';

const service = axios.create({
    // baseURL: '/',
    timeout: 5000,
});

service.interceptors.request.use((config) => {
    console.log(config);
    return config;
});

service.interceptors.response.use(
    (response) => {
        console.log(response);
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// export default service;
export default axios;
