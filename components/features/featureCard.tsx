import Image from "next/image";

const FeatureCard = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          src={`asset/images/${image}`}
          alt="alternative"
          width={100}
          height={100}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="mb-4">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
