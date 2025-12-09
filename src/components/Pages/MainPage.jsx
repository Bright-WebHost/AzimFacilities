import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About3 from './../Elements/About3';
import WhatWeDo3 from './../Elements/WhatWeDo3';
import Statistics1 from './../Elements/Statistics1';
import Team1 from './../Elements/Team1';
import ClientsLogo1 from './../Elements/ClientsLogo1';
import { NavLink } from 'react-router-dom';
import Blog2 from '../Elements/Blog2';
import Services3 from '../Elements/Services3';
import Header2 from '../Common/Header2';
import Slider4 from '../Elements/Slider4';
// import Header2 from './../Common/Header2';

var bnrimg = require('./../../images/azim/13.png');
var bgimg1 = require('./../../images/azim/14.png');
var bgimg2 = require('./../../images/azim/21.png');
var bgimg3 = require('./../../images/azim/22.png');

class Home4 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header2 />
         <Slider4/>
                <div className="page-content">
                    <Banner title="About Us" pagename="About" description="Empowering Growth, Uniting Excellence to Shape Tomorrow's Success" bgimage={bnrimg}/>
                    {/* <About3 bgcolor="bg-gray" /> */}
                    <div className={`${this.props.bgcolor} section-full mobile-page-padding p-t80 p-b50 bg-gray`}>
                                        <div className="container">
                                            <div className="section-content">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                                        <div className="about-home-3 m-b30 bg-white">
                                                            <h3 className="m-t0 m-b20 sx-tilte">We are a Group of companies</h3>
                                                            <p>Empowering Growth, Uniting Excellence to Shape Tomorrow's Success</p>
                                                            <p>AZIM Group is a constellation of enterprises at the heart of Qatar's dynamic business landscape. With seven unique companies under our banner, we orchestrate services to deliver unmatched value across diverse industries</p><br/>
                                                            {/* <ul class="list-angle-right anchor-line two-column-list">
                      <li>Butlersss</li>
                      <li>Captains</li>
                      <li>Bartenders</li>
                      <li>Waiters/Waitresses</li>
                      <li>Hosts/Hostesses</li>
                      <li>Commis personnel</li>
                                                            </ul> */}
                    <style>{`
                    .two-column-list {
                      columns: 2; /* splits list into 2 columns */
                      column-gap: 40px;
                      list-style-position: inside;
                    }
                    
                    `}</style>
                                                            <div className="text-left">
                                                                <NavLink to="/about-1" className="site-button btn-half"><span>Read More</span></NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                                        <div className="video-section-full-v2">
                                                            <div className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                                                <div className="overlay-main" />
                                                                {/* <div className="video-section-inner">
                                                                    <div className="video-section-content">
                                                                        <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal">
                                                                            <i className="icon fa fa-play" />
                                                                            <span className="ripple" />
                                                                        </NavLink>
                    
                                                                        <div className="video-section-bottom">
                                                                            <h3 className="sx-title text-white">25 Years<br />Experience</h3>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    <Blog2 />
                    <Services3 />
                    <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12 ">
                                        <div className="home-2-about bg-bottom-left bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2">
                                            <div className="text-left">
                                            <NavLink to={"#"} className="site-button-link">CHAIRMAN</NavLink>
                                            </div><br/>
                                            <h3 className="m-t0 sx-tilte">Mr.Ali Ahmed A.M Marafia</h3>
                                            <p>On behalf of Azim Group, I extend my warmest welcome to you. Our journey has been guided by an unwavering commitment to excellence, a spirit of innovation, and a diverse portfolio of enterprises. At the heart of our success are our dedicated teams across these varied businesses — the true architects of our achievements. I remain deeply grateful for their dedication and contributions.</p>
                                            <p>We are steadfast in our commitment to supporting their growth and professional development. As we navigate an ever-evolving business landscape, our shared vision remains clear: not merely to adapt, but to thrive. Thank you for being an essential part of Azim Group’s remarkable story.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2" style={{postion:'relative',padding:'80px 40px 80px 40px'}}>
                                            <div className="text-left">
                                            <NavLink to={"#"} className="site-button-link">MANGING DIRECTOR</NavLink>
                                            </div><br/>
                                            <h3 className="m-t0 sx-tilte">Mr. Mohammed Shameer</h3>
                                            <p>We are proud to unite a diverse group of companies, each bringing its own strengths and expertise, all driven by a shared commitment to excellence. Based in the heart of Doha, we remain dedicated to innovation and continuous growth, ensuring we not only meet your expectations but consistently exceed them.</p>
                                            <p>Together, we will push the boundaries of success and set new standards of excellence—here in Qatar and across the globe. Thank you for being an essential part of this journey.</p>
                                            
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-12 ">
                                        <div className="home-2-about bg-bottom-left bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <WhatWeDo3 /> */}
                    <Statistics1 />
                    {/* <Team1 /> */}
                    {/* <ClientsLogo1 /> */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Home4;