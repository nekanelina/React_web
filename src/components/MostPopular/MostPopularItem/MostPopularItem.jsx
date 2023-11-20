import { products } from "../../../models/data";
import homeBatteryPack from "../../../images/products/energy_storage_solutions/home_battery_pack.png";

function MostPopularItem(props) {
  const { id, image, description, cost } = props;

  return (
    <div className="product" key={id}>
      <div className="image-container">
        <img className="image" src={homeBatteryPack} alt={image} />
      </div>
      <div className="product-info">
        <strong>Description: </strong> {description}
      </div>
      <div className="product-price">
        <strong>Cost: </strong> {cost}
      </div>
    </div>
  );
}

export default MostPopularItem;
