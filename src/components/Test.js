import { products } from "../models/data.js";

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      {products.solarPanels.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.cost}</p>
          <img src={require(`../images/products/solar_panels/${product.image}`)} alt={product.name} />
        </div>
      ))}
      {products.eStorageSolutions.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.cost}</p>
          <img src={require(`../images/products/energy_storage_solutions/${product.image}`)} alt={product.name} />
        </div>
      ))}
      {products.evChargeStations.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.cost}</p>
          <img src={require(`../images/products/ev_charging_stations/${product.image}`)} alt={product.name} />
        </div>
      ))}
      {products.eeApliances.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.cost}</p>
          <img src={require(`../images/products/e_efficient_appliances/${product.image}`)} alt={product.name} />
          </div>
    ))}
    {products.windTurbines.map((product) => (
        <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.cost}</p>
            <img src={require(`../images/products/wind_turbines/${product.image}`)} alt={product.name} />
            </div>
    ))}
    </div>
  );
};

export default Test;
