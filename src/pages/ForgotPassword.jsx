import React, { useRef, useEffect, useContext } from "react"
import { useLocation } from "react-router"
import { AuthContext } from "../context/AuthContext"

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext)
  const location = useLocation()
  const emailRef = useRef()

  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email
    }
  }, [location.state])

  const handleReset = async () => {
    const email = emailRef.current?.value
    if (!email) return alert("Please enter your email")

    try {
      await resetPassword(email)
      window.location.href = "https://mail.google.com"
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-base-100">
      <div className="card w-full max-w-sm bg-base-200 shadow-xl py-8 px-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h1>
        <div className="space-y-4">
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          <button onClick={handleReset} className="btn btn-primary w-full">
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
