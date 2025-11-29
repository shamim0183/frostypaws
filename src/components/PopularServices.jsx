import React, { useEffect } from "react"
import WinterServiceCard from "./WinterServiceCard"
import MyContainer from "./MyContainer"
import { Link } from "react-router"
import AOS from "aos"
import "aos/dist/aos.css"

const PopularServices = ({ services }) => {
  const preview = services.slice(0, 6) // ✅ show only first 6
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section className="py-16 bg-base-100">
      <MyContainer>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text" data-aos="fade-left">
            Popular Winter Care Services ❄️
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2" data-aos="fade-up">
            Tailored treatments to keep your pets cozy, clean, and healthy this
            season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {preview.map((service, i) => (
            <div
              key={service.serviceId}
              data-aos="zoom-out"
              data-aos-delay={i * 100}
            >
              <WinterServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn text-white btn-accent">
            Show All Services
          </Link>
        </div>
      </MyContainer>
    </section>
  )
}

export default PopularServices
