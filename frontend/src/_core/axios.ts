import axios, {InternalAxiosRequestConfig} from "axios";
import {cookies} from "next/headers";
import {parseCookies} from "nookies";

axios.defaults.baseURL = 'http://localhost:3001'

axios.interceptors.request.use((config:any) => {
    if (typeof window !== "undefined") {
        //const _token = cookies().get('_token')
         const { _token } = parseCookies();

        config.headers.Authorization = "Bearer " + _token;
    }

    return config;
});

export default axios