import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { FaCamera } from "react-icons/fa"
import PhotoAlbum from "react-photo-album"
import "react-photo-album/styles.css"
import MyContainer from "../components/MyContainer"

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const galleryPhotos = [
    // Dogs in winter (10 images)
    {
      src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Happy dog in winter coat",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Dog playing in snow",
      width: 800,
      height: 1000,
    },
    {
      src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Puppy in winter sweater",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Dog with winter boots",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Dog enjoying winter walk",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Dog grooming session",
      width: 800,
      height: 600,
    },
    
    {
      src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Golden retriever puppy",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Dog in winter wonderland",
      width: 800,
      height: 1000,
    },
    {
      src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Happy dog after grooming",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Winter dog portrait",
      width: 800,
      height: 1000,
    },
    {
      src: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Adorable dog in winter",
      width: 800,
      height: 600,
    },
    
    {
      src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Pet in festive winter setting",
      width: 800,
      height: 1000,
    },
    // Cats (8 images)
    {
      src: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cute cat with winter accessories",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Fluffy cat in cozy setting",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cat enjoying warm bed",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Beautiful cat portrait",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Playful kitten",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cozy cat in winter",
      width: 600,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Sleepy cat",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cat relaxing",
      width: 800,
      height: 1000,
    },
    // Rabbits (4 images)
    {
      src: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cute bunny rabbit",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "White rabbit portrait",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Fluffy rabbit",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Adorable bunny",
      width: 800,
      height: 1000,
    },
    // Birds (4 images)
    {
      src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Colorful parrot",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Beautiful bird",
      width: 600,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cute parakeet",
      width: 800,
      height: 600,
    },
      {
     src: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
     alt: "Tabby cat portrait",
     width: 600,
     height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Tropical bird",
      width: 800,
      height: 1000,
    },
    // Hamsters & Small Pets (4 images)
    {
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cute hamster",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Adorable hamster eating",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cute guinea pig portrait",
      width: 800,
      height: 600,
    },
    // Fish & Aquatic (3 images)
    {
      src: "https://images.unsplash.com/photo-1760011456499-944a97dcd49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFxdWlydHVtJTIwZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Beautiful aquarium fish",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Colorful tropical fish",
      width: 800,
      height: 1000,
    },
    {
      src: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Goldfish in aquarium",
      width: 600,
      height: 800,
    },
    // Reptiles (3 images)
    {
      src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Pet lizard",
      width: 800,
      height: 600,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661855306675-6f3575a9f3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVydGlsZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Bearded dragon",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Turtle pet",
      width: 600,
      height: 900,
    },
    // Mixed Pet Moments (4 images)
    {
      src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cozy pet in blanket",
      width: 600,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Pet enjoying warm environment",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Pet care moment",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Cozy winter pet care",
      width: 800,
      height: 600,
    },
    // More Dogs (4 images)
    {
      src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Husky in snow",
      width: 600,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Corgi smiling",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Pomeranian fluffy",
      width: 800,
      height: 1000,
    },
    // More Cats (4 images)
    
    
    {
      src: "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Hedgehog cute",
      width: 800,
      height: 600,
    },
   
    // Exotic Pets (3 images)
  {
      src: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Siamese cat",
      width: 800,
      height: 600,
    },
  
    {
      src: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      alt: "Ferret pet",
      width: 800,
      height: 600,
    },
    
  ]

  return (
    <div className="bg-base-100 min-h-screen  ">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-20 pt-40">
        <MyContainer>
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h1 className="text-5xl font-bold gradient-text">Our Gallery</h1>
              <FaCamera className="text-5xl text-accent" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore heartwarming moments from our winter pet care services.
              See the joy, comfort, and happiness we bring to our furry friends
              during the cozy season.
            </p>
          </div>
        </MyContainer>
      </section>

      {/* Stats Section */}
      <MyContainer>
        <section className="py-12">
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">500+</h3>
              <p className="text-gray-600">Happy Pets</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">1000+</h3>
              <p className="text-gray-600">Services Provided</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">50+</h3>
              <p className="text-gray-600">Expert Staff</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">5★</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </section>
      </MyContainer>

      {/* Photo Gallery */}
      <section className="bg-linear-to-br from-[#f0f4ff] to-[#e0f7fa] py-16">
        <MyContainer>
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Moments of Joy & Comfort 🐾
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every photo tells a story of care, warmth, and happiness. Browse
              through our collection of 50+ beautiful moments featuring dogs,
              cats, rabbits, birds, hamsters, fish, reptiles, and more!
            </p>
          </div>
          <div className="px-4 sm:px-6 lg:px-8" data-aos="fade-up">
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
                    className="rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                  />
                ),
              }}
            />
          </div>
        </MyContainer>
      </section>

      {/* Call to Action */}
      <MyContainer>
        <section className="py-16">
          <div
            className="bg-white/80 backdrop-blur-md p-12 rounded-xl shadow-md border border-white/30 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Want to See Your Pet Here?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Book our winter care services today and give your furry friend the
              comfort and care they deserve. We'll capture beautiful moments
              along the way!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/services" className="btn btn-accent text-white px-8">
                Browse Services
              </a>
              <a href="/contact" className="btn btn-outline btn-accent px-8">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </MyContainer>
    </div>
  )
}

export default Gallery
