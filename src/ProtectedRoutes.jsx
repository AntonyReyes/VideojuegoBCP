import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const users = useSelector(state => state.user)

  if(users) {
    return <Outlet />
  } else {
    return <Navigate to='/login' />
  }
}

export default ProtectedRoutes