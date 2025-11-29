import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
    <div className="w-full h-[80vh] rounded-xl overflow-hidden shadow-lg">
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
  )
}

export default HeroSlider
