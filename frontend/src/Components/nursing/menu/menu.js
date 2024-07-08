import React from "react";
import './menu.css'
import logo from '../Assest/logowhitesmaill.png';
import { Link as Sclink } from "react-scroll";
import { Link } from "react-router-dom";
export function Menunursing(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bgcolor navmain">
                <div class="container-fluid">
                    <Link class="navbar-brand col-lg-5 col-8" to="/">
                        <img src={logo} className="siz1"/>
                    </Link>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item ms-4">
                        {/* <Sclink activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink> */}
                        <Link to="/" className="nav-link active text-white">Home</Link>
                        </li>
                        <li class="nav-item ms-4">
                        <Sclink to="about" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink>
                        {/* <a class="nav-link text-white " href="#">About US</a> */}
                        </li>
                        {/* <li class="nav-item ms-4 ">
                        <Sclink to="wcu" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Our Unique Edge</Sclink>
                        <a class="nav-link text-white " href="#">About US</a>
                        </li> */}
                        <li class="nav-item ms-4">
                        <Sclink to="services" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Services</Sclink>

                        {/* <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a> */}
                        {/* <ul class="dropdown-menu">
                            <li><Sclink to="itites" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Software Services and Automation</Sclink></li>
                            <li><Sclink to="E-Commerce" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">E-Commerce Solutions</Sclink></li>
                            <li><Sclink to="Corporate" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Corporate Training</Sclink></li>
                            <li><Sclink to="K-TAG" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">K-TAG</Sclink></li>
                            <li><Sclink to="kpo" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">KPO</Sclink></li>
                            <li><Sclink to="Intelligent" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Intelligent Platform for K12 Education</Sclink></li>
                        </ul> */}
                        </li>
                       
                        
                        {/* <li class="nav-item me-5">
                        <Sclink to="flow" spy={true} smooth={true} duration={500} className="nav-link text-white"   href="#">Flow</Sclink>
                        </li> */}
                        <li class="nav-item me-5 ms-4">
                        <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white " href="#">Contact Us</Sclink>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    );
}