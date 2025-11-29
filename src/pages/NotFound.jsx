import React from "react"
import { Link } from "react-router"
import MyContainer from "../components/MyContainer"

const NotFound = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] flex items-center justify-center py-12">
      <MyContainer>
        <div className="text-center space-y-6">
          <img
            src="https://images.unsplash.com/photo-1737051011199-ae68908a101a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGRvZyUyMGluJTIwc25vd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt="Cute dog in snow"
            className="mx-auto rounded-xl shadow-lg w-full max-w-md object-cover"
          />
          <h1 className="text-5xl font-bold gradient-text leading-tight">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Looks like this pawstep led to a snowy trail with no destination.
            But don’t worry — we’ll guide you back to warmth and wagging tails.
          </p>
          <Link to="/" className="btn btn-accent text-white mt-4">
            Return to Homepage
          </Link>
        </div>
      </MyContainer>
    </section>
  )
}

export default NotFound
