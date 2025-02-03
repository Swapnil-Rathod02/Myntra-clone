import { useSelector } from "react-redux";

const BagSummary = () => {
  const items = useSelector((store) => store.item);
  const bagitem = useSelector((store) => store.bag);

  const finalItem = items.filter((item) => {
    const indexitem = bagitem.indexOf(item.id);
    return indexitem >= 0;
  });
  let totalMRP = 0;
  const totalItem = finalItem.length;
  let totalDiscount = 0;
  let finalPayment = 0;
  finalItem.forEach((item) => {
    totalMRP += item.current_price;
    totalDiscount = item.original_price - item.current_price;
    finalPayment = totalMRP - totalDiscount;
  });
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItem}</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
