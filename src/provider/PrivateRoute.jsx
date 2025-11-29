import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router"
import { AuthContext } from "../context/AuthContext"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 space-y-4 animate-pulse">
          <div className="skeleton h-48 w-full rounded"></div>
          <div className="skeleton h-6 w-3/4 rounded"></div>
          <div className="space-y-2">
            <div className="skeleton h-4 w-full rounded"></div>
            <div className="skeleton h-4 w-11/12 rounded"></div>
            <div className="skeleton h-4 w-10/12 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (user && user.email) {
    return children
  }

  return <Navigate to="/auth/signin" state={{ from: location }} replace />
}

export default PrivateRoute
