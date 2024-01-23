// testimonial data
const TestimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper slides
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons

import { BsArrowRight } from "react-icons/bs";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[280px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {/* avatar, name, position */}
              <div>
                {/* avatar */}
                <div> avatar</div>

                 {/* name */}
                 <div> name</div>

                  {/* position */}
                <div> position</div>
              </div>

              {/* quote and message */}

<div>
  quote and message
</div>

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
