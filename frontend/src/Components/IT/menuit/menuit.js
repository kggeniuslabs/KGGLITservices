import React from "react";
import './menuit.css'
import logo from '../../Assest/GL.png';
import { Link as Sclink } from "react-scroll";
import {Link} from "react-router-dom"
export function Menuit(){
    return(
        <> 
            <nav class="navbar navbar-expand-lg bgcolor navmain">
                <div class="container-fluid">
                    <Link class="navbar-brand  col-lg-5 col-8" to="/">
                        <img src={logo} className="siz"/>
                    </Link>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-5">
                        {/* <Sclink activeClass="active" to="/" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink> */}
                        <Link to="/" className="nav-link active text-white" >Home</Link>
                        </li>
                       
                        <li class="nav-item me-5">
                        <Sclink to="aboutuspageit" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink>
                        {/* <a class="nav-link text-white " href="#">About US</a> */}
                        </li>
                          
                        <li class="nav-item me-5">
                        <Sclink to="servicesitpage" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Services</Sclink>
                        {/* <a class="nav-link text-white " href="#">About US</a> */}
                        </li>
                        {/* <li class="nav-item me-5">
                        <Sclink to="flow" spy={true} smooth={true} duration={500} className="nav-link text-white"   href="#">Flow</Sclink>
                        </li> */}
                        <li class="nav-item me-5 ">
                        <Sclink to="footerforit" spy={true} smooth={true} duration={500} className="nav-link text-white " href="#">Contact Us</Sclink>
                        </li>
                    </ul>   
                    </div>
                </div>
            </nav>
        </>
    );
}