import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header-menu">
      <div className="navbar">
        <div>
          <button className="text-wrapper-4 link no-border-5-padding">
            Solar Panels
          </button>
        </div>
        <div>
          <button className="text-wrapper-4 link no-border-5-padding">
            Energy Storage Solutions
          </button>
        </div>
        <div>
          <button className="text-wrapper-4 link no-border-5-padding">
            EV Charging Stations
          </button>
        </div>
        <div>
          <button className="text-wrapper-4 link no-border-5-padding">
            Energy-efficient Appliances
          </button>
        </div>
        <div>
          <button className="text-wrapper-4 link no-border-5-padding">
            Wind Turbines
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
