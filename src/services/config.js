import axios from "axios";



const service = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

// tell to React that in every call to the api will send the token
service.interceptors.request.use((req) => {

    const token = localStorage.getItem('authToken');

    // if token exists add to the request 
    if (token ) {
        req.headers.authorization = `Bearer ${token}`
    }

    return req;

})

export default service;