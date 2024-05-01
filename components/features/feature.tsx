import FeatureCard from "./featureCard";
import { featureData } from "@/data/pageData";

const Feature = () => {
  return (
    <div id="features" className="cards-1">
      <div className="container px-4 sm:px-8 xl:px-4">
        {featureData.map((value, index) => (
          <FeatureCard
            key={index}
            image={value.image}
            title={value.title}
            desc={value.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
