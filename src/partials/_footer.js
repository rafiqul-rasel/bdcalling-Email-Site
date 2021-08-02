import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../assets/images/footer-logo.png";
function Footer(props){
    return(
        <React.Fragment>
        <div className="container-fluid footer-bg">
            <div className="row">
            <div className="container text-color-white">

                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col text-align-left">
                                    <img alt={"bdcalling logo"} src={logo} height={50} width={150}/>
                                </div>
                            </div>
                            <div className="row text-align-left">
                                <div className="col">What brings innovation to everything we do is collaboration. We help each other develop, solve issues we face, and enjoy sweet talks. We shape up each other’s ideas to bring the best out of them.</div>
                            </div>
                        </div>
                        <div className="col text-align-left">
                            <div className="row">
                                <div className="col"><h4>Contact Us</h4></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={['fab', 'apple']} />
                                    01671 587446
                                    <br/>
                                    info@bdcalling.com
                                    <br/>
                                    House 11-13, Road 5, Block C, Banasree Dhaka, Bangladesh
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col"><h4>Open Hours</h4></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Our Support Available to Help You 24 Hours a Day Seven Days a Week.
                                        <br/>
                                    Saturday – Thursday 9 AM to 6 PM
                                </div>
                            </div>
                        </div>

                    </div>
                <div className="row ">
                    <div className="col"><hr className="footer-hr"/></div>
                </div>
                <div className="row ">
                    <div className="col">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center text-white">
                            <span>Copyright © 2021 bdCalling IT Ltd All Rights Reserved  </span><a
                            href="https://learn.bdcalling.com/" className="text-tomato">bdCalling</a>.
                        </div></div>
                </div>
            </div>

            </div>

        </div>
        </React.Fragment>
    );
}
export default Footer;
