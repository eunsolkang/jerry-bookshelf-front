import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const getBookList = () => api.get(`/book`);

export const createBook = (book: any) => api.post('/book', book)

export default api;

