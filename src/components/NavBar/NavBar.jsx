import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();

const onClickHandler1 = () => {
    navigate('/#');
};

  const onClickHandler2 = () => {
    navigate('/#');
};

const onClickHandler3 = () => {
  navigate('/ev-charges');
};

const onClickHandler4 = () => {
  navigate('/#');
};

const onClickHandler5 = () => {
  navigate('/#');
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