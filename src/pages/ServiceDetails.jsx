import React, { useContext, useEffect, useState } from "react"
import {
  useParams,
  useNavigate,
  useLocation,
  useLoaderData,
} from "react-router"
import { AuthContext } from "../context/AuthContext"
import { toast } from "react-toastify"
import MyContainer from "../components/MyContainer"
import { FaStar, FaCheckCircle } from "react-icons/fa"
import ServiceNotFound from "../components/ServiceNotFound"
import PhotoAlbum from "react-photo-album"
import "react-photo-album/styles.css"
import AOS from "aos"
import "aos/dist/aos.css"
import "animate.css"

const ServiceDetails = () => {
  const { id } = useParams()
  const { user, loading } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const services = useLoaderData()
  const [form, setForm] = useState({ name: "", email: "" })

  const service =
    location.state?.service || services.find((s) => String(s.serviceId) === id)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth/signin", { state: { from: `/services/${id}` } })
    }
  }, [user, loading, id, navigate])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    )
  }

  if (!service) {
    return <ServiceNotFound />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Service booked successfully!")
    setForm({ name: "", email: "" })
  }

  const galleryPhotos = [
    {
      src: "https://media.istockphoto.com/id/2198840957/photo/young-caucasian-woman-with-dog-at-veterinary-clinic.webp?a=1&b=1&s=612x612&w=0&k=20&c=UQtTCdIBjCQPh-sI6cg4Nhtt1zkvtqej1L3KJcNdP-A=",
      alt: "Pet grooming",
      width: 800,
      height: 600,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663040477032-0cb4ee5402bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Pet grooming",
      width: 800,
      height: 600,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1665296634767-68b1b07fa652?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNhdCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Winter care",
      width: 800,
      height: 600,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663047910718-c8758a6785e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Gentle handling",
      width: 800,
      height: 600,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663045519945-6e3d06b9123f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBldCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1739421968032-e6d1ab3c6665?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJvc3R5JTIwY2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1571324524859-899fbd151860?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyb3N0eSUyMGNhdCUyMGFuZCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 1000,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1670886336187-91d3a6dc6172?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZyb3N0eSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 600,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1606695279641-ff0f2445bb03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxmcm9zdHklMjBjYXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1520066592498-348cf9b6374a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZyb3N0eSUyMGxvdmViaXJkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1669673986444-3d8d63f74ab3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb3N0eSUyMG1hY293fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1623922283366-236225ce24d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZyb3N0eSUyMG1hY2F3fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 600,
      height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1580505734922-7a4de5b3eee0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZyb3N0eSUyMG1vbmdvb3NlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1555899822-2b26aa96b0c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyb3N0eSUyMGJ1bm55fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1743611146088-3675aa067790?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZyb3N0eSUyMGd1aW5lYSUyMHBpZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Warm bath",
      width: 800,
      height: 600,
    },
  ]

  return (
    <section className="bg-[#fefefe] text-gray-800">
      <title>{service.serviceName}</title>
      {/* Hero Section */}
      <div className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
        <MyContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl font-bold mb-4">
                Providing Compassionate Pet Care Services
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We understand that your pets are family, and we treat them with
                the same love and care.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Service: {service.serviceName}</li>
                <li>Category: {service.category}</li>
                <li>Provider: {service.providerName}</li>
                <li>Email: {service.providerEmail}</li>
                <li>Slots Available: {service.slotsAvailable}</li>
              </ul>
              {service.rating && (
                <div className="flex items-center gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(service.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-600">
                    {service.rating.toFixed(1)} out of 5
                  </span>
                </div>
              )}
            </div>
            <div data-aos="fade-left">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </MyContainer>
      </div>

      {/* Service Highlights */}
      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 text-center">
          {galleryPhotos.slice(0, 3).map((img, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold">
                {["Pet Boarding", "Pet Grooming", "Pet Training"][i]}
              </h3>
              <p className="text-sm text-gray-600">
                {
                  [
                    "Experience the best pet care with cozy winter boarding.",
                    "Grooming with love and warmth during chilly months.",
                    "Build a stronger bond with expert-led training programs.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </MyContainer>

      {/* Booking Form */}
      <div className="bg-[#f0f4ff] py-16">
        <MyContainer>
          <div
            className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-accent" />
              Book This Service
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <button
                type="submit"
                className="btn text-white btn-accent w-full animate__animated animate__pulse animate__slow"
              >
                Book Now
              </button>
            </form>
          </div>
        </MyContainer>
      </div>

      {/* Testimonials */}
      <MyContainer>
        <div className="py-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">
            Best Decision Of Our Lives
          </h3>
          <blockquote className="text-lg italic text-gray-700 max-w-2xl mx-auto">
            “FostyPaws gave our pup the warmest winter grooming ever. The team
            was gentle, professional, and full of love.”
          </blockquote>
          <div className="mt-4 text-sm text-gray-500">— A Happy Pet Parent</div>
        </div>
      </MyContainer>

      {/* Gallery */}
      <MyContainer>
        <div className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Your Pet’s Cozy Moments 🐾
          </h3>
          <PhotoAlbum
            layout="masonry"
            photos={galleryPhotos}
            spacing={16}
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1
              if (containerWidth < 1024) return 2
              return 4
            }}
            render={{
              image: (props) => (
                <img
                  {...props}
                  className="rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />
              ),
            }}
          />
        </div>
      </MyContainer>
    </section>
  )
}

export default ServiceDetails
