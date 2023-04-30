import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const Protected = ({children, ...rest}) => {
  const token = JSON.parse(localStorage.getItem('AccessToken'))
  console.log("tokenProtected",token)  

  return (
    token ? <Outlet /> : <Navigate to="/" />
  )

}

export default Protected 