import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import {
    FaClock,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa"
import { toast } from "react-toastify"
import MyContainer from "../components/MyContainer"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Thank you for contacting us! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl text-accent" />,
      title: "Email Us",
      details: "support@fostypaws.com",
      subDetails: "We reply within 24 hours",
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-accent" />,
      title: "Call Us",
      details: "+880-1234-567890",
      subDetails: "Mon-Sat: 9AM - 6PM",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-accent" />,
      title: "Visit Us",
      details: "123 Pet Care Lane, Dhaka",
      subDetails: "Bangladesh",
    },
    {
      icon: <FaClock className="text-3xl text-accent" />,
      title: "Business Hours",
      details: "Monday - Saturday",
      subDetails: "9:00 AM - 6:00 PM",
    },
  ]

  return (
    <div className="bg-base-100 min-h-screen ">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-20 pt-40">
        <MyContainer>
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions about our winter pet care services? We'd love to
              hear from you! Reach out to us and our team will respond as soon
              as possible.
            </p>
          </div>
        </MyContainer>
      </section>

      {/* Contact Info Cards */}
      <MyContainer>
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map(({ icon, title, details, subDetails }, index) => (
              <div
                key={title}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 font-medium">{details}</p>
                <p className="text-sm text-gray-600 mt-1">{subDetails}</p>
              </div>
            ))}
          </div>
        </section>
      </MyContainer>

      {/* Contact Form & Map */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
        <MyContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md border border-white/30">
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="What is this about?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea textarea-bordered w-full h-32"
                      placeholder="Tell us more..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-accent text-white w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div data-aos="fade-left">
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md border border-white/30 h-full">
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  Find Us Here
                </h2>
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000"
                    alt="FostyPaws Location"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      📍 Our Location
                    </h3>
                    <p className="text-gray-700">
                      123 Pet Care Lane, Gulshan-2
                      <br />
                      Dhaka 1212, Bangladesh
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      🚗 How to Reach Us
                    </h3>
                    <p className="text-gray-700 text-sm">
                      We're located in the heart of Gulshan, easily accessible
                      by car or public transport. Free parking is available for
                      visitors.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      ⏰ Walk-in Hours
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyContainer>
      </section>

      {/* FAQ Section */}
      <MyContainer>
        <section className="py-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div
              className="collapse collapse-plus bg-white/80 backdrop-blur-md shadow-md border border-white/30"
              data-aos="fade-up"
            >
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                Do I need an appointment?
              </div>
              <div className="collapse-content">
                <p className="text-gray-700">
                  While walk-ins are welcome, we recommend booking an
                  appointment to ensure availability and minimize wait times.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-plus bg-white/80 backdrop-blur-md shadow-md border border-white/30"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p className="text-gray-700">
                  We accept cash, all major credit cards, mobile banking (bKash,
                  Nagad, Rocket), and bank transfers.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-plus bg-white/80 backdrop-blur-md shadow-md border border-white/30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Do you offer emergency services?
              </div>
              <div className="collapse-content">
                <p className="text-gray-700">
                  For emergencies, please call our hotline immediately. We have
                  partnerships with 24/7 veterinary clinics for urgent cases.
                </p>
              </div>
            </div>
          </div>
        </section>
      </MyContainer>
    </div>
  )
}

export default Contact
