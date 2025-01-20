import axios from "axios";

const request = axios.create({
    baseURL: "https://project-blog-mern-ev4e.vercel.app"
});

export default request;
