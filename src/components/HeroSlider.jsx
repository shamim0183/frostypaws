import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const slides = [
  {
    image:
      "https://petscare-assets-prod.s3.amazonaws.com/media/original_images/siberian-husky-red-coat-blue-boots-48293.webp",
    caption: "Snuggle Season: Cozy Coats for Cold Paws",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/fashion-portrait-cat-wearing-knitting-hat-scarf-snowy-winter-fashion-portrait-cat-wearing-knitting-hat-scarf-405706474.jpg",
    caption: "Frosty Fashion: Stay Warm, Stay Stylish",
  },
  {
    image:
      "https://a.storyblok.com/f/152976/1183x887/6c638c0d05/istock-1030294600.jpg/m/fit-in/3072x0/filters:format(jpeg):quality(75)",
    caption: "Winter Wellness Starts with Warmth",
  },
]

const HeroSlider = () => {
  return (
    <div className="relative">
      <div className="w-full h-[65vh] rounded-xl overflow-hidden shadow-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                    {slide.caption}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white drop-shadow-lg">
          <span className="text-sm font-medium">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
