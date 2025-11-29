import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router"
import WinterServiceCard from "../components/WinterServiceCard"
import WinterServiceSkeleton from "../components/WinterServiceSkeleton"
import MyContainer from "../components/MyContainer"
import AOS from "aos"
import "aos/dist/aos.css"

const Services = () => {
  const services = useLoaderData()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // ⏳ 1 second delay
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <title>Winter Care Services</title>
      <MyContainer>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold gradient-text" data-aos="fade-up">
            All Winter Care Services ❄️
          </h2>
          <p
            className="text-gray-600 max-w-xl mx-auto mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our full range of cozy, curated services to keep your pets
            warm, safe, and happy this season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <WinterServiceSkeleton key={i} />
              ))
            : services.map((service) => (
                <WinterServiceCard key={service.serviceId} service={service} />
              ))}
        </div>
      </MyContainer>
    </section>
  )
}

export default Services
