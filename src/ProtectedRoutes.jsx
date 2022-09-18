import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({isLogged}) => {

  if(user) {
    return <Outlet />
  } else {
    return <Navigate to='/login' />
  }
}

export default ProtectedRoutes