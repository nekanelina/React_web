import ArrowTop from "../../images/footerImg/arrowTop";
import Dribbble from "../../images/footerImg/dribbble";
import Facebook from "../../images/footerImg/facebook";
import Linkedin from "../../images/footerImg/linkedin";
import Twitter from "../../images/footerImg/twitter";
import LogoFooter from "../../images/footerImg/LogoFooter"
import "./Footer.css";

const Footer = () => {
    console.log('Render: Footer');
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
                <div className="group-1 box">
                    <div className="div-wrapper">
                        <div className="text-wrapper">Shop</div>
                    </div>
                    <div className="frame">
                        <div className="text-wrapper-3">Gift cards</div>
                        <div className="text-wrapper-3">Site map</div>
                        <div className="text-wrapper-3">Polka blog</div>
                        <div className="text-wrapper-3">Login</div>
                        <div className="text-wrapper-3">Sign in</div>
                    </div>
                </div>
                <div className="group-2 box">
                    <div className="group-3">
                        <div className="text-wrapper">Sell</div>
                    </div>
                    <div className="frame">
                        <div className="text-wrapper-3">Sell on Polka</div>
                        <div className="text-wrapper-3">Teams</div>
                        <div className="text-wrapper-3">Forums</div>
                        <div className="text-wrapper-3">Affiliates</div>
                    </div>
                </div>
                <div className="group-4 box">
                    <div className="group-5">
                        <div className="text-wrapper">About</div>
                    </div>
                    <div className="frame">
                        <div className="text-wrapper-3">Polka, Inc.</div>
                        <div className="text-wrapper-3">Policies</div>
                        <div className="text-wrapper-3">Investors</div>
                        <div className="text-wrapper-3">Careers</div>
                        <div className="text-wrapper-3">Press</div>
                    </div>
                </div>
                <div className="group-6 box">
                    <div className="group-7">
                        <div className="text-wrapper">Help</div>
                    </div>
                    <div className="frame">
                        <div className="text-wrapper-3">Help Center</div>
                        <div className="text-wrapper-3">Trust and safety</div>
                        <div className="text-wrapper-3">Privacy settings</div>
                    </div>
                </div>

                
            </div>
            <div className="group-bottom">
                <div className="commerce text-wrapper-3">© 2022 Commerce, Inc.</div>
                <div className="frame-4">
                    <div className="text-wrapper-3">Privacy policy</div>
                    <div className="text-wrapper-3">Terms of use</div>
                    <div className="text-wrapper-3">Cookies</div>
                </div>
                <div className="frame-5">
                    <div className="text-wrapper-6">Scroll to top</div>
                    <ArrowTop className="arrow-top" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
