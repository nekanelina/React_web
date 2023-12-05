

const Order = ({ productName, description, price, quantity }) => {
  return (
    <li className="products-wrapper">
      <div className="ordered-product-info">
        <div className="flex-column gap-10px margin-left-10px">
          <h4>{productName}</h4>
          <p className="ordered-product-description">{description}</p>
          <p className="ordered-product-price">{`${price}$ * ${quantity} = `}<strong>{price * quantity}$</strong></p>
        </div>
      </div>
    </li>
  );
};

export default Order;
