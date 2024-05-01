import Image from "next/image";

const TestimonialSlide = ({
  image,
  testimony,
  name,
}: {
  image: string;
  testimony: string;
  name: string;
}) => {
  return (
    <div className="swiper-slide">
      <div className="card">
        <Image
          className="card-image"
          src={`/asset/images/${image}`}
          alt="alternative"
          width={100}
          height={100}
        />
        <div className="card-body">
          <p className="italic mb-3">{testimony}</p>
          <p className="testimonial-author">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
