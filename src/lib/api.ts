import axios from "axios";
import { Book } from "../models/book";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const getBookList= async() => {

    const res = await api.get(`/book`);

    return res.data;
    
}

export default api;

