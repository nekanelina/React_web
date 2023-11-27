import "./NavBar.css";
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();

const onClickHandler1 = () => {
    navigate('/solar-panels');
};

  const onClickHandler2 = () => {
    navigate('/energy-storage-solutions');
};

const onClickHandler3 = () => {
  navigate('/ev-charges');
};

const onClickHandler4 = () => {
  navigate('/inverters');
};

const onClickHandler5 = () => {
  navigate('/energy-efficient-appliances');
};



  return (
    <div className="navbar">
      <button onClick={onClickHandler1}><div className="link navbar-link">Solar Panels</div></button>

      <button onClick={onClickHandler2}><div className="navbar-link">Energy Storage Solutions</div></button>

      <button onClick={onClickHandler3}><div className="navbar-link">EV Charging Stations</div></button>

      <button onClick={onClickHandler4}><div className="navbar-link">Energy-efficient Appliances</div></button>

      <button onClick={onClickHandler5}><div className="navbar-link">Wind Turbines</div></button>
    </div>
  );
};

export default NavBar;