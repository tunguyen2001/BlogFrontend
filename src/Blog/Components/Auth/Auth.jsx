import React from "react";
import { useNavigate } from "react-router-dom";

export function loggedIn () {
    const item = JSON.parse(localStorage.getItem('AccessToken'))
    const token = item?.accessToken

    console(token ? true : false)
    return token ? true : false;
}

export function Logout () {
    const navigate = useNavigate();
    localStorage.removeItem("AccessToken");
    navigate('/');
}

export function Auth(){
    return(
        <></>
    )
}

