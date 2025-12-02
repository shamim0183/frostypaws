import "animate.css"
import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router"
import ExtraSections from "../components/ExtraSections"
import HeroSlider from "../components/HeroSlider"
import MyContainer from "../components/MyContainer"
import WinterCareTestimonials from "../components/WinterCareTestimonials.jsx"
import WinterServiceCard from "../components/WinterServiceCard"
import WinterServiceSkeleton from "../components/WinterServiceSkeleton"


const Home = () => {
  const services = useLoaderData()
  const preview = services?.slice(0, 6)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // ⏳ 1 second delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-base-100 text-neutral min-h-screen mt-12">
      <MyContainer>
        <HeroSlider />

        <section className="text-center mb-8 mt-12">
          <h2 className="text-3xl font-bold gradient-text " data-aos="fade-right">
            Popular Winter Care Services ❄️
          </h2>
          <p
            className="text-gray-600 max-w-xl mx-auto mt-2"
            data-aos="fade-left"
          >
            Tailored treatments to keep your pets cozy, clean, and healthy this
            season.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <WinterServiceSkeleton key={i} />
              ))
            : preview.map((service) => (
                <WinterServiceCard key={service.serviceId} service={service} />
              ))}
        </section>

        <div className="text-center my-10">
          <Link
            to="/services"
            className="btn text-white btn-accent animate__animated animate__bounceIn"
          >
            Show All Services
          </Link>
        </div>
      </MyContainer>
      <ExtraSections />
      <WinterCareTestimonials />
    </div>
  )
}

export default Home
