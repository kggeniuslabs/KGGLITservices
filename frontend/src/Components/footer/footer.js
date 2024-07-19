import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faInstagram,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import kgisllogo from '../Assest/kgisl-logo.png'
import { Link as Sclink } from "react-scroll";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import './footer.css'
export function Footer(){
    return(
        <>
           
            <div className="container-fluid bgcolor text-white " id="footer">
                <div className="row">
                    <div className="col-lg-3 pt-5">
                        <h5><b>Quick View</b></h5>
                        <p> <Sclink activeClass="active" to="/" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink></p>
                        <p><Sclink to="aboutpage" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink></p>
                        <p> <Sclink to="servicepage" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Services</Sclink> </p>
                        <p> <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white " href="#">Contact Us</Sclink></p>
                        
                    </div>
                    <div className="col-lg-6 pt-5 mt-5">
                        <h5 className="ms-2"><b>Contact Us</b></h5>
                        <div className="container-fluid">
                            <div className="row">
                                <p className="col-lg-6">
                                    <p>
                                        <span class="city">
                                            <b>Coimbatore</b>                          
                                        </span>
                                        <br/>
                                            KGISL Campus, <br/>
                                            365 Thudiyalur Road,<br/>
                                            Saravanampatti,<br/>
                                            Coimbatore – 641035, <br/>
                                            Tamil Nadu, India.
                                    </p>
                                </p>
                                <p className="col-lg-6">
                                    <p>
                                            <span class="city">
                                            <b>Dubai</b>   
                                            </span>
                                        <br/>
                                            Ideaspace Business Center, <br/>
                                            Millennium Executive Tower,<br/>
                                            Sheikh Zayed Road,<br/>
                                            Dubai-United Arab Emirates
                    
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="pt-3 d-flex justify-content-between col-lg-6 mb-4">
                        <a href="tel:9363466093"><FontAwesomeIcon icon={faPhone} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="mailto:info@kggeniuslabs.com"><FontAwesomeIcon icon={faEnvelope} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/kggeniuslabs/"><FontAwesomeIcon icon={faInstagram} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/kg-genius-labs-3a73152a8/"><FontAwesomeIcon icon={faLinkedin} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.facebook.com/people/KG-Geniuslabs/pfbid02QCbE8JcAes9juSSiChZ9NevWgGuUAhWjch68nJ8XSUCsSEfJBcadSXZ44EirVJY4l/"><FontAwesomeIcon icon={faFacebook} className="hoverani text-white"></FontAwesomeIcon></a>
                        </div>
                        <p>A Division of</p>
                        <a href="https://www.kgisl.com/"><img src={kgisllogo}  className="col-lg-6 col-6 "/></a>
                        
                    </div>
                </div>
                <hr/>
                <p className="text-center">Copyright © 2024  KGGL. All Right Reserved.</p>
            </div>
        </>
    );
}