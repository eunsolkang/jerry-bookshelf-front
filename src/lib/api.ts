import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const getBookList= async() => {

    const res = await api.get(`/book`);

    return res.data;
    
}

export const createBook = (book: any) => api.post('/book', book)

export default api;

