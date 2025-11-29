import { useContext, useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router"
import { Bounce, toast } from "react-toastify"
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from "../context/AuthContext"

const SignIn = () => {
  const { login, loading, error, handleSubmit, googleLogin } =
    useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const [showPassword, setShowPassword] = useState(false)
  const emailRef = useRef()

  
  const from = location.state?.from?.pathname || location.state?.from || "/"

  const onSignIn = async (e) => {
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    await login(email, password)
    navigate(from, { replace: true })
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleLogin()
      toast.success("Signed in with Google!", {
        position: "top-right",
        autoClose: 1500,
        transition: Bounce,
      })
      navigate(from, { replace: true }) 
    } catch (err) {
      toast.error(err.message)
    }
  }

  const handleForgotPassword = () => {
    const email = emailRef.current?.value || ""
    navigate("/auth/forgot-password", { state: { email } })
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-base-100">
      <div className="card w-full max-w-sm bg-base-200 shadow-xl py-8 px-6">
        <h1 className="text-3xl font-bold text-center gradient-text mb-6">
          Sign In to FostyPaws 🐾
        </h1>
        <form
          onSubmit={(e) => handleSubmit(e, onSignIn, "🦄 Login Successfully!")}
        >
          <fieldset className="space-y-4">
            <label className="label font-semibold">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />

            <label className="label font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10"
                placeholder="Enter your password"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-accent z-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-sm mt-2">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="link link-hover text-primary"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-accent hover:text-white w-full mt-2"
              disabled={loading}
            >
              <FcGoogle size={24} />
              Sign In with Google
            </button>

            {error && <p className="text-error text-sm mt-2">{error}</p>}

            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/auth/signup"
                className="link link-hover text-primary font-medium"
              >
                SignUp
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default SignIn
