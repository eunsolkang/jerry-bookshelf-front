import { useEffect, useState } from "react"
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import authApi from "../../lib/api/auth";
import { RequestLogin, ResponseLogin } from "../../types/auth";

export default function useAuth(){
    const checkUserAuth = (): boolean => {
        const loggedIn = localStorage.getItem('loggedin');

        if( loggedIn === 'true'){
            return true;
        }else{
            return false;
        }
    }

    return  {checkUserAuth};
}