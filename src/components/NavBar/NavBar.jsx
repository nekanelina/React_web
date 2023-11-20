import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="link navbar-link">Solar Panels</div>

      <div className="navbar-link">Energy Storage Solutions</div>

      <div className="navbar-link">EV Charging Stations</div>

      <div className="navbar-link">Energy-efficient Appliances</div>

      <div className="navbar-link">Wind Turbines</div>
    </div>
  );
};

export default NavBar;