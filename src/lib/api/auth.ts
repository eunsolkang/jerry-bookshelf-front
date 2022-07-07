import { RequestLogin, RequestRegister, ResponseLogin } from "../../types/auth";
import api from "./client";

const authApi = {
    register: async(user: RequestRegister) => {
        await api.post('/users/', user);
    },
    login: async (user: RequestLogin):Promise<ResponseLogin> => {
        const {data} = await api.post(`/users/login`, user);
        
        return data;
    },
    getUserInfo: async(jwt: string):Promise<void> => {
        const {data} = await api.get('/users/info');

    }
}

export default authApi;