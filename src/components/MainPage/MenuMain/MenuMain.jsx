import "./menuMain.css";
import { Link } from "react-router-dom";

const MenuMain = () => {
    return (
        <div className="menu-container">
            <div className="menu">
                <div className="left-part">
                    <div className="left-top">
                        <Link to="/solar-panels" className="top top-1">
                        <div className="top top-1">
                            <div className="gradient"><span>Solar panels</span></div>
                        </div>
                        </Link>
                        <a href="#fake" className="top top-2">
                        <div className="top top-2">
                            <div className="gradient"><span>Energy Storage Solutions</span></div>
                        </div>
                        </a>
                        <Link to="/ev-charges" className="top top-3">
                        <div className="top top-3">
                            <div className="gradient"><span>EV Charging Stations</span></div>
                        </div>
                        </Link>

                    </div>
                    <div className="left-bottom">
                        <a href="#fake" className="bottom bottom-1">
                            <div className="bottom bottom-1">
                                <div className="gradient"><span>Inverters</span></div>
                            </div>
                        </a>
                        <a href="#fake" className="bottom bottom-2">
                            <div className="bottom bottom-2">
                                <div className="gradient"><span>Energy-efficient Appliances</span></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="right-part">
                    <a href="#fake" className="right-part-inner">
                        <div className="right-part-inner">
                            <div className="gradient"><span>Wind Turbines</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default MenuMain;