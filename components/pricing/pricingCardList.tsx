const PricingCardList = ({ list }: { list: string }) => {
  return (
    <li className="flex">
      <i className="fas fa-chevron-right"></i>
      <div>{list}</div>
    </li>
  );
};

export default PricingCardList;
