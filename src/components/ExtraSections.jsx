import React from "react"
import MyContainer from "./MyContainer"
import { FaSnowflake, FaPaw, FaThermometerHalf } from "react-icons/fa"

const winterTips = [
  {
    icon: <FaSnowflake className="text-accent text-xl" />,
    title: "Keep Them Warm",
    description:
      "Provide cozy bedding and indoor shelter to protect pets from cold drafts and low temperatures.",
  },
  {
    icon: <FaPaw className="text-accent text-xl" />,
    title: "Protect Their Paws",
    description:
      "Use paw balm and avoid icy sidewalks to prevent cracking, irritation, and salt burns.",
  },
  {
    icon: <FaThermometerHalf className="text-accent text-xl" />,
    title: "Monitor Outdoor Time",
    description:
      "Limit exposure to cold and watch for signs of hypothermia like shivering or sluggishness.",
  },
]

const expertVets = [
  {
    name: "Dr. Ayesha Rahman",
    specialty: "Canine Nutrition",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwaGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    bio: "Helping dogs thrive with balanced winter diets and hydration strategies.",
  },
  {
    name: "Dr. Imran Chowdhury",
    specialty: "Feline Behavior",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yJTIwaGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    bio: "Guiding cat owners through seasonal stress and indoor enrichment.",
  },
  {
    name: "Dr. Nusrat Jahan",
    specialty: "Exotic Pets",
    image:
      "https://plus.unsplash.com/premium_photo-1661551859254-7878c939ad91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvciUyMGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    bio: "Expert in reptiles, birds, and small mammals — winter care made simple.",
  },
  {
    name: "Dr. Tanvir Ahmed",
    specialty: "Emergency Care",
    image:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRvY3RvciUyMGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    bio: "Ready for winter emergencies, from frostbite to respiratory issues.",
  },
]

const ExtraSections = () => {
  return (
    <>
      {/* Winter Care Tips Section */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
        <MyContainer className="text-center">
          <h2
            className="text-3xl font-bold gradient-text mb-6"
            data-aos="fade-left"
          >
            Winter Care Tips for Pets ❄️
          </h2>
          <p
            className="text-gray-600 mb-10 max-w-xl mx-auto"
            data-aos="fade-left"
          >
            FostyPaws helps you keep your pets safe, warm, and happy during the
            chilly season.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winterTips.map(({ icon, title, description }) => (
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

      {/* Meet Our Expert Vets Section */}
      <section className="bg-base-100 py-16 border-t border-base-300">
        <MyContainer className="text-center">
          <h2
            className="text-3xl font-bold gradient-text mb-6"
            data-aos="fade-up"
          >
            Meet Our Expert Vets 🩺
          </h2>
          <p
            className="text-gray-600 mb-10 max-w-xl mx-auto"
            data-aos="fade-up"
          >
            Our team of veterinary professionals is here to guide you through
            winter wellness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertVets.map(({ name, specialty, image, bio }) => (
              <div
                key={name}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 text-left"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-60 object-cover object-top rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-accent mb-2">{specialty}</p>
                <p className="text-sm text-gray-700">{bio}</p>
              </div>
            ))}
          </div>
        </MyContainer>
      </section>
    </>
  )
}

export default ExtraSections
