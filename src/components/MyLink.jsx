import React from "react"
import { NavLink } from "react-router"

const MyLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md transition-all duration-300 font-bold ${
          isActive
            ? "bg-accent text-white shadow-md font-bold"
            : "text-gray-700 hover:text-accent hover:bg-base-200"
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default MyLink
