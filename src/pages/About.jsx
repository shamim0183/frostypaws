import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { FaHeart, FaPaw, FaShieldAlt, FaSnowflake } from "react-icons/fa"
import MyContainer from "../components/MyContainer"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const values = [
    {
      icon: <FaHeart className="text-4xl text-accent" />,
      title: "Compassionate Care",
      description:
        "We treat every pet with love and kindness, ensuring they feel safe and comfortable during their time with us.",
    },
    {
      icon: <FaPaw className="text-4xl text-accent" />,
      title: "Expert Service",
      description:
        "Our team of certified professionals brings years of experience in pet grooming, training, and winter wellness.",
    },
    {
      icon: <FaSnowflake className="text-4xl text-accent" />,
      title: "Winter Specialists",
      description:
        "We specialize in seasonal care, helping pets stay warm, healthy, and happy during the coldest months.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-accent" />,
      title: "Safety First",
      description:
        "Your pet's safety is our top priority. We maintain the highest standards of hygiene and care protocols.",
    },
  ]

  return (
    <div className="bg-base-100 min-h-screen ">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-20 pt-40">
        <MyContainer>
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl font-bold gradient-text mb-6">
              About FostyPaws 🐾
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              FostyPaws is your trusted partner in winter pet care. Founded with
              a passion for animal welfare, we provide specialized services to
              keep your furry friends cozy, clean, and healthy during the chilly
              season.
            </p>
          </div>
        </MyContainer>
      </section>

      {/* Mission & Vision */}
      <MyContainer>
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional winter care services that prioritize the
                comfort, health, and happiness of every pet. We believe that
                pets deserve the same warmth and care during winter as they
                receive year-round, and we're committed to making that a
                reality for pet owners across Bangladesh.
              </p>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To become the leading pet care provider in the region,
                recognized for our expertise in seasonal wellness and our
                unwavering dedication to animal welfare. We envision a future
                where every pet enjoys optimal health and comfort, regardless of
                the weather.
              </p>
            </div>
          </div>
        </section>
      </MyContainer>

      {/* Our Values */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
        <MyContainer>
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at FostyPaws, from the
              services we offer to the way we interact with pets and their
              owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon, title, description }, index) => (
              <div
                key={title}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </MyContainer>
      </section>

      {/* Our Story */}
      <MyContainer>
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000"
                alt="Happy pets in winter"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FostyPaws was born from a simple observation: many pets struggle
                during winter months, and their owners often don't know how to
                help. Our founder, a lifelong animal lover and veterinary
                professional, decided to create a specialized service dedicated
                to winter pet care.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What started as a small grooming service has grown into a
                comprehensive winter wellness center. Today, we offer everything
                from heated bed installations to nutrition consultations,
                serving hundreds of happy pets and their grateful owners.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team has expanded to include certified groomers, trainers,
                and veterinary consultants, all united by a shared passion for
                animal welfare and winter care expertise.
              </p>
            </div>
          </div>
        </section>
      </MyContainer>

      {/* Why Choose Us */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
        <MyContainer>
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Why Choose FostyPaws?
            </h2>
            <div className="space-y-4 text-left">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  ✓ Specialized Winter Expertise
                </h3>
                <p className="text-gray-700 text-sm">
                  Unlike general pet care providers, we focus exclusively on
                  winter wellness, making us the experts in seasonal pet care.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  ✓ Certified Professionals
                </h3>
                <p className="text-gray-700 text-sm">
                  Our team holds certifications in pet grooming, training, and
                  veterinary care, ensuring top-quality service.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  ✓ Affordable Pricing
                </h3>
                <p className="text-gray-700 text-sm">
                  We believe quality pet care should be accessible to everyone.
                  Our services are competitively priced without compromising
                  quality.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  ✓ Personalized Care Plans
                </h3>
                <p className="text-gray-700 text-sm">
                  Every pet is unique. We create customized care plans tailored
                  to your pet's specific needs, breed, and health conditions.
                </p>
              </div>
            </div>
          </div>
        </MyContainer>
      </section>
    </div>
  )
}

export default About
