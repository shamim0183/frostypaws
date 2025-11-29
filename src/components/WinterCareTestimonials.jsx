import React, { useEffect } from "react"
import MyContainer from "./MyContainer"
import AOS from "aos"
import "aos/dist/aos.css"

const testimonials = [
  {
    name: "Maya Rahman",
    location: "Dhaka, Bangladesh",
    pet: "Bella the Labrador",
    quote:
      "Last winter, Bella struggled with joint pain. FostyPaws' heated beds and paw balm made a huge difference. She was cozy and pain-free all season!",
    avatar:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRzaG90JTIwZmVtYWxlJTIwZG9jdG9yfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    name: "Arif Chowdhury",
    location: "Chattogram, Bangladesh",
    pet: "Snowy the Persian Cat",
    quote:
      "Snowy used to hate cold mornings. Thanks to FostyPaws' winter grooming tips, she now enjoys her warm fur and snuggly naps!",
    avatar:
      "https://images.unsplash.com/photo-1612523138351-4643808db8f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhlYWRzaG90JTIwbWFsZSUyMGRvY3RvcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    name: "Nadia Islam",
    location: "Sylhet, Bangladesh",
    pet: "Rocky the Husky",
    quote:
      "Rocky loves the snow but his paws used to crack. FostyPaws' paw care guide saved us! No more limping, just happy zoomies.",
    avatar:
      "https://images.unsplash.com/photo-1652549210729-68bbd206ae3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxoZWFkc2hvdCUyMGZlbWFsZSUyMGRvY3RvcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
]

const WinterCareTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
      <MyContainer>
        <h2
          className="text-3xl font-bold gradient-text text-center mb-6"
          data-aos="zoom-in"
        >
          Cozy Winter Stories from Pet Parents ❄️
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
          Hear how FostyPaws helped pets stay warm, safe, and happy during the coldest months.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, location, pet, quote, avatar }) => (
            <div
              key={name}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full object-cover shadow-md mb-4"
              />
              <p className="italic text-gray-700 mb-4">“{quote}”</p>
              <h4 className="text-sm font-bold text-gray-800">{name}</h4>
              <p className="text-xs text-gray-500">{location} • {pet}</p>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  )
}

export default WinterCareTestimonials
