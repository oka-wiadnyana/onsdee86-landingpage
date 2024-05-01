import PricingCardList from "./pricingCardList";
const PricingCard = ({
  title,
  currency,
  price,
  frequency,
  listDesc,
  listDetail,
}: {
  title: string;
  currency: string;
  price: string;
  frequency: string;
  listDesc: string;
  listDetail: string[];
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="price">
          <span className="currency">{currency}</span>
          <span className="value">{price}</span>
        </div>
        <div className="frequency">{frequency}</div>
        <p>{listDesc}</p>

        <ul className="list mb-7 space-y-2 text-left">
          {listDetail.map((value, index) => (
            <PricingCardList key={index} list={value} />
          ))}
        </ul>
        <div className="button-wrapper">
          <a className="btn-solid-reg page-scroll" href="#download">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
