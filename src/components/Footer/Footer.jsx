
import React from "react";
import ArrowTop from "../../images/footerImg/arrowTop";
import Dribbble from "../../images/footerImg/dribbble";
import Facebook from "../../images/footerImg/facebook";
import Linkedin from "../../images/footerImg/linkedin";
import Twitter from "../../images/footerImg/twitter";
import LogoFooter from "../../images/footerImg/LogoFooter"
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="group-top">
                <div className="group-0">
                <LogoFooter className="logo" alt="Logo"/>
                <div className="cricklewood-london">
                    Cricklewood,London
                    <br />
                    NW2 6qg, Uk
                </div>
                <div className="social">
                    <Facebook className="icon-instance-node" />
                    <Twitter className="icon-instance-node" />
                    <Linkedin className="icon-instance-node" />
                    <Dribbble className="icon-instance-node" />
                </div>
            
                </div>
                    <div className="groups-wrapper">
                        <div className="group-1 box">
                            <div className="div-wrapper">
                                <div className="text-wrapper">Shop</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-4">Gift cards</div>
                                <div className="text-wrapper-4">Site map</div>
                                <div className="text-wrapper-4">Polka blog</div>
                                <div className="text-wrapper-4">Login</div>
                                <div className="text-wrapper-4">Sign in</div>
                            </div>
                        </div>
                        <div className="group-2 box">
                            <div className="group-3">
                                <div className="text-wrapper">Sell</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-4">Sell on Polka</div>
                                <div className="text-wrapper-4">Teams</div>
                                <div className="text-wrapper-4">Forums</div>
                                <div className="text-wrapper-4">Affiliates</div>
                            </div>
                        </div>
                        <div className="group-4 box">
                            <div className="group-5">
                                <div className="text-wrapper">About</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-4">Polka, Inc.</div>
                                <div className="text-wrapper-4">Policies</div>
                                <div className="text-wrapper-4">Investors</div>
                                <div className="text-wrapper-4">Careers</div>
                                <div className="text-wrapper-4">Press</div>
                            </div>
                        </div>
                        <div className="group-6 box">
                            <div className="group-7">
                                <div className="text-wrapper">Help</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-4">Help Center</div>
                                <div className="text-wrapper-4">Trust and safety</div>
                                <div className="text-wrapper-4">Privacy settings</div>
                            </div>
                        </div>
                    </div>

                
            </div>
            <div className="group-bottom">
                <div className="commerce text-wrapper-4">© 2022 Commerce, Inc.</div>
                <div className="frame-4">
                    <div className="text-wrapper-4">Privacy policy</div>
                    <div className="text-wrapper-4">Terms of use</div>
                    <div className="text-wrapper-4">Cookies</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;