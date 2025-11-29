import React from "react"
import { Link } from "react-router"
import { FaPaw } from "react-icons/fa"
import MyContainer from "./MyContainer"

const ServiceNotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-12">
      <MyContainer>
        <div className="text-center space-y-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1673641895032-1c1f2395bb57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
            alt="Lost dog in snow"
            className="mx-auto rounded-xl shadow-lg w-full max-w-md object-cover"
          />
          <h1 className="text-4xl font-bold gradient-text">
            Service Not Found
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            This pawstep led to a snowy trail with no service in sight. It might
            be missing, mistyped, or just chilling in the snow.
          </p>
          <Link to="/services" className="btn text-white btn-accent">
            Browse All Services <FaPaw className="ml-2" />
          </Link>
        </div>
      </MyContainer>
    </section>
  )
}

export default ServiceNotFound
