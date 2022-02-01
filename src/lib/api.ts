import axios from "axios";
import { Book, RequestBook } from "../models/book";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const getBookList= async() => {

    const res = await api.get(`/book`);

    return res.data;
    
}

export const createBook = (book: any) => api.post('/book', book)

export default api;

