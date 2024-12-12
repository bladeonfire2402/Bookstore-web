

import React, { Children } from 'react'
import useAuth from '../custom-hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const {currentUser}=useAuth()
  return currentUser ? Children: <Navigate to="login"/>;
  
}

export default ProtectedRoute