import React, { useEffect } from "react"
import MyContainer from "./MyContainer"
import { FaSnowflake, FaPaw, FaThermometerHalf } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

const tips = [
  {
    icon: <FaSnowflake className="text-accent text-xl" />,
    title: "Keep Them Warm",
    description:
      "Use cozy blankets, heated beds, and indoor shelter to protect pets from cold drafts.",
  },
  {
    icon: <FaPaw className="text-accent text-xl" />,
    title: "Protect Their Paws",
    description:
      "Avoid icy sidewalks and use paw balm to prevent cracking or salt irritation.",
  },
  {
    icon: <FaThermometerHalf className="text-accent text-xl" />,
    title: "Monitor Temperature",
    description:
      "Limit outdoor time and watch for signs of hypothermia like shivering or lethargy.",
  },
]


const WinterCareTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200, // trigger when 100px into viewport
      easing: "ease-in-out",
    })
  }, [])
  return (
    <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
      <MyContainer className="text-center">
        <h2
          className="text-3xl font-bold gradient-text mb-6"
          data-aos="flip-left"
        >
          Winter Care Tips for Your Furry Friends ❄️
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          FostyPaws is here to help you keep your pets safe, warm, and happy
          during the chilly season.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  )
}

export default WinterCareTips
