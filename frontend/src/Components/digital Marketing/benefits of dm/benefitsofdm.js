import React from "react";
import icon from '../Assesst/495435-PHOAPO-981-02.png'  
import './benefitsofdm.css'
export function Benefitsofdm(){
    return(
        <>
            <div className="container-fluid pt-5 ">
                <h3 className="text-center">Explore the Numerous Benefits of Digital Marketing</h3>
                <div className="container p-5 ">
                    <div className="d-flex flex-wrap justify-content-around ">
                        <div className="col-lg-5 col-12 bgcolordm p-3 mt-4 boderradiusdm" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="borderbuttondm d-flex   text-center">
                                <img src={icon} className="col-lg-2 col-2" />
                                <p className="text-white ms-3 mt-3 ">Save time, money and resources</p>   
                            </div>
                            <div className="borderbuttondm d-flex   text-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Build your brand across online channels</p>
                            </div>
                            <div className="borderbuttondm d-flex  text-center ">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Acquire huge ROI</p>
                            </div>
                            <div className="borderbuttondm d-flex   text-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Maximize various customer touch points</p>
                            </div>
                            <div className="borderbuttondm d-flex  text-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Track your campaign results</p>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5 bgcolordm p-3 mt-4 boderradiusdm" data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="borderbuttondm d-flex   text-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Promote greater consumer engagement</p>
                            </div>
                            <div className="borderbuttondm d-flex  text-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Adjust your strategies based on analytics</p>
                            </div>
                            <div className="borderbuttondm d-flex  text-center ">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3  ">Drive profitable long-term growth</p>
                            </div>
                            <div className="borderbuttondm d-flex  text-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Leverage precise audience targeting</p>
                            </div>
                            <div className="borderbuttondm d-flex text-center">
                                <img src={icon} className="col-lg-2 col-2"/>
                                <p className="text-white ms-3 mt-3 ">Improve your conversion rates</p>
                            </div>
                        </div>  
                    </div>
                </div>

            </div>
        </>
    );
}