import TestimonialSlide from "./testimonialSlide";
import { testimonyData } from "@/data/pageData";

const Testimonial = () => {
  return (
    <div className="slider-1 py-32 bg-gray">
      <div className="container px-4 sm:px-8">
        <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
          What do users think about Pavo
        </h2>

        <div className="slider-container">
          <div className="swiper-container card-slider">
            <div className="swiper-wrapper">
              {testimonyData.map((value, index) => (
                <TestimonialSlide
                  key={index}
                  image={value.image}
                  testimony={value.testimony}
                  name={value.name}
                />
              ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
