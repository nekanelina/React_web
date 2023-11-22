import MonoSolarPanel from "../../images/products/solar_panels/monochrystalline_solar_panels.png";

function ProductCardItem(props) {
  const { id, image, description, cost, link } = props;

  return (
    <a className="link-most-popular" href="#">
      <div className="product" key={id}>
        <div className="image-container">
          <img
            className="image"
            src={require(`../../images/products/solar_panels/${image}`)}
            alt={image}
          />
        </div>
        <div className="product-info">
          <strong>Description: </strong> {description}
        </div>
        <div className="product-card-price">
          <strong>Cost: </strong> {cost}
        </div>
      </div>
    </a>
  );
}

export default ProductCardItem;
