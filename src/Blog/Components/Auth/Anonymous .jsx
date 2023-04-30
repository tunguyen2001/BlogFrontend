import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const Anonymous = () => {
    const token = JSON.parse(localStorage.getItem('AccessToken'))
    console.log("tokenAnonymous",token)  
  
    return (
      token ? <Navigate to="/" /> : <Outlet />
    )
}

export default Anonymous