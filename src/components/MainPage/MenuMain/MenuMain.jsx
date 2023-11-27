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
                        <Link  to="/energy-storage-solutions" className="top top-2">
                        <div className="top top-2">
                            <div className="gradient"><span>Energy Storage Solutions</span></div>
                        </div>
                        </Link >
                        <Link to="/ev-charges" className="top top-3">
                        <div className="top top-3">
                            <div className="gradient"><span>EV Charging Stations</span></div>
                        </div>
                        </Link>

                    </div>
                    <div className="left-bottom">
                        <Link to="/inverters" className="bottom bottom-1">
                            <div className="bottom bottom-1">
                                <div className="gradient"><span>Inverters</span></div>
                            </div>
                        </Link>
                        <Link to="/energy-efficient-appliances" className="bottom bottom-2">
                            <div className="bottom bottom-2">
                                <div className="gradient"><span>Energy-efficient Appliances</span></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="right-part">
                    <Link to="/wind-turbines" className="right-part-inner">
                        <div className="right-part-inner">
                            <div className="gradient"><span>Wind Turbines</span></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default MenuMain;