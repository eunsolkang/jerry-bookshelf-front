
export type RequestLogin = {
    email: string;
    password: string;
}

export type ResponseLogin = {
    jwt: string;
}

export type RequestRegister = {
    email: string;
    password: string;
    name: string;
}