
import React, { useRef, useState } from 'react'
import Carousel from '../Utils/Carousel.js'
import NavbarBg from '../images/bg-logo.png'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarsStaggered, faMagnifyingGlass, faGreaterThan
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from '../images/logo.png';
import CircleLines from "../images/circlelines.png";

function Navbar() {
    const [isSearch, setIsSearch] = useState(false);

    const openNav = () => {
        if (
            document.getElementById("mySidenav")
        ) {
            document.getElementById("mySidenav").style.width = "100%";
        }
    };
    const closeNav = () => {
        if (
            document.getElementById("mySidenav")
        ) {
            document.getElementById("mySidenav").style.width = "0";
        }
    };
    return (
        <>
            <div className="container-fluid px-0">
                <Carousel>
                    <div className="carousel-div"><img className="img" src={img1} alt="img1" /></div>
                    <div className="carousel-div"><img className="img" src={img2} alt="img2" /></div>
                    <div className="carousel-div"><img className="img" src={img3} alt="img3" /></div>
                    <div className="carousel-div"><img className="img" src={img4} alt="img3" /></div>
                    <div className="carousel-div"><img className="img" src={img5} alt="img3" /></div>
                    <div className="carousel-div"><img className="img" src={img6} alt="img3" /></div>
                    <div className="carousel-div"><img className="img" src={img7} alt="img3" /></div>
                </Carousel>
                <div class="card-img-overlay d-flex justify-content-center"></div>
                <h1 className="heading-1">Discover</h1>
                <h1 className="heading-2">Arts & Antiques</h1>
                <div id="mySidenav" className="sidenav">
                    <button type='submit' className="closebtn pe-5" onClick={() => { closeNav() }} >⟵</button>
                    <ul className='navbar-ul list-unstyled text-start'>
                        <li><a className="fs-1" href="/">Home &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <li><a className="fs-1" href="">About  &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <li><a className="fs-1" href="">Board Members  &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <li><a className="fs-1" href="/CollectionMain">Collection  &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <li><a className="fs-1" href="/service">Services  &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <li><a className="fs-1" href="">Events  &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <li><a className="fs-1" href="">News  &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <li><a className="fs-1" href="">Contact  &nbsp; <FontAwesomeIcon className="greater-icon" icon={faGreaterThan} /></a></li>
                        <img src={NavbarBg} className="img-fluid navbar-bg-img"></img>
                    </ul>
                    <div className='news-notification-list'>
                        <h3 className="news-heading text-white">News</h3>
                        <ul className='card news-ul border-0'>
                            <li className="d-flex gap-3 notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">lorem Ipsum lorem ipsum dolor sit amet<br />lorem Ipsum lorem ipsum dolor sit amet</p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">lorem Ipsum lorem ipsum dolor sit amet<br />lorem Ipsum lorem ipsum dolor sit amet</p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">lorem Ipsum lorem ipsum dolor sit amet<br />lorem Ipsum lorem ipsum dolor sit amet</p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">lorem Ipsum lorem ipsum dolor sit amet<br />lorem Ipsum lorem ipsum dolor sit amet</p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">lorem Ipsum lorem ipsum dolor sit amet<br />lorem Ipsum lorem ipsum dolor sit amet</p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">lorem Ipsum lorem ipsum dolor sit amet<br />lorem Ipsum lorem ipsum dolor sit amet</p>
                            </li>
                        </ul>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 d-flex lang-select">
                            <label className="col-sm-10 col-lg-4 col-md-4 text-white lang-label">Select Language : </label>
                            <div className="col-sm-10 col-lg-2 col-md-2">
                                <select className="form-select lang-dropdown" id="selectkyc" aria-label="selectkyc">
                                    <option value="NIC" className="fs-5">English</option>
                                    <option value="Passport" className="fs-5">Arabic</option>
                                    <option value="DrivingLicense" className="fs-5">Urdu</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="d-flex list-unstyled justify-content-center gap-5">
                                <li className="nav-item">
                                    <a className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                </li>
                                <li className="nav-item">
                                    <a type="submit" className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="circle-lines-parent">
                            <img src={CircleLines} className="nav-circle-img img-fluid"></img>
                        </div>
                    </div>
                </div>
                <span className="open-nav" onClick={() => { openNav() }}><FontAwesomeIcon className="bar-icon" icon={faBarsStaggered} /></span>
                <div className="border-div">
                    <small className="right-border" />
                </div>
                <div className="logo-img">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} width="60%" height="60%" className="d-inline-block align-top" alt="logo" /></a>
                </div>

                <div>
                    <ul className="right-navbar ">
                        <li className="nav-item">
                            <a className="nav-link btn text-white btn-bg tour-nav-cus" href="">Book A Tour</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                        <li className="nav-item">
                            <a type="submit" className="nav-link text-white" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                    </ul>
                </div>
                <div className="search-btn">
                    <button type="submit" className="text-white search-icon" onClick={() => { setIsSearch(!isSearch) }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div class="search-bar" style={isSearch ? { display: 'inline-block' } : { display: 'none' }}>
                    <form class="d-flex justify-content-center search-from">
                        <input class="align-self-center search-input form-control" type="text" name="search" placeholder="What are you searching for?" />
                        <button type="submit" class="align-self-center text-white search-btn-2"><FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Navbar;
