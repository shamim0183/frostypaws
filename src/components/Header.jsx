import "animate.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";


// Public navigation links (visible to everyone)
const publicNavLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
]

// Private navigation links (only visible when logged in)
const privateNavLinks = [
  { label: "My Profile", to: "/my-profile" },
]

const Header = () => {
  const { user, logout, loading } = useContext(AuthContext)
  const [showName, setShowName] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/auth/signin", { replace: true })
  }

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <MyContainer className="navbar px-4 flex items-center justify-between">
        {/* Left: Logo + Mobile Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* Public links - always visible */}
              {publicNavLinks.map(({ label, to }) => (
                <li key={label}>
                  <MyLink to={to}>{label}</MyLink>
                </li>
              ))}
              {/* Private links - only visible when logged in */}
              {user && privateNavLinks.map(({ label, to }) => (
                <li key={label}>
                  <MyLink to={to}>{label}</MyLink>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            className="md:text-xl font-bold gradient-text animate__animated animate__fadeInDown"
          >
            FostyPaws 🐾
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
            {/* Public links - always visible */}
            {publicNavLinks.map(({ label, to }) => (
              <li key={label}>
                <MyLink to={to}>{label}</MyLink>
              </li>
            ))}
            {/* Private links - only visible when logged in */}
            {user && privateNavLinks.map(({ label, to }) => (
              <li key={label}>
                <MyLink to={to}>{label}</MyLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Auth Buttons or Avatar */}
        <div className="navbar-end gap-4">
          {loading ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : user ? (
            <>
              <div
                className="relative"
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
              >
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer object-cover"
                />
                {showName && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-base-200 text-sm px-3 py-1 rounded shadow whitespace-nowrap">
                    {user.displayName}
                  </div>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline hover:text-white btn-primary animate__animated animate__bounceIn"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/auth/signin"
              className="btn btn-primary px-4 py-2 font-semibold rounded-full hover:scale-105 transition-transform duration-300 "
            >
              Sign In
            </Link>
          )}
        </div>
      </MyContainer>
    </header>
  )
}

export default Header
