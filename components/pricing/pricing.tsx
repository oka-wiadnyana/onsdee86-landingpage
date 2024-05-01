import PricingCard from "./pricingCard";
import { pricingData } from "@/data/pageData";

const Pricing = () => {
  return (
    <div id="pricing" className="cards-2">
      <div className="absolute bottom-0 h-40 w-full bg-white"></div>
      <div className="container px-4 pb-px sm:px-8">
        <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
          Pricing options for all budgets
        </h2>
        <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
          {" "}
          Our pricing plans are setup in such a way that any user can start
          enjoying Pavo without worrying so much about costs. They are flexible
          and work for any type of industry{" "}
        </p>

        {pricingData.map((value, index) => (
          <PricingCard
            key={index}
            title={value.title}
            currency={value.currency}
            price={value.price}
            frequency={value.frequency}
            listDesc={value.listDesc}
            listDetail={value.listDetail}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
