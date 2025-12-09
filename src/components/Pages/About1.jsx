import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About2 from './../Elements/About2';
import WhatWeDo6 from './../Elements/WhatWeDo6';
import Achievements1 from './../Elements/Achievements1';
import Team2 from './../Elements/Team2';
import Testimonials2 from './../Elements/Testimonials2';
import { NavLink } from 'react-router-dom';
import WhatWeDo3 from '../Elements/WhatWeDo3';
import WhatWeDo2 from '../Elements/WhatWeDo2';
import Header2 from '../Common/Header2';

var bnrimg = require('./../../images/azim/23.png');
var bgimg2 = require('./../../images/azim/36.png');

class About1 extends React.Component {
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
                <div className="page-content">
                    <Banner title="VenYou Events" pagename="VenYou Events" description="Experience seamless events crafted with our expert touch — your celebration, perfected by our expertise." bgimage={bnrimg}/>
                    {/* <About2 /> */}
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
                                                                {/* <NavLink to={"#"} className="site-button-link">CHAIRMAN</NavLink> */}
                                                                </div><br/>
                                                                <h3 className="m-t0 sx-tilte" style={{color:'#E17C27'}}>We Craft Unforgettable Experiences Venyou Events: Exceptional Moments, Personalized for You</h3>
                                                                <p>VenYou Events and Azim Facilities Management & Services work seamlessly together to provide a comprehensive range of solutions that meet and exceed our clients’ event needs. This collaboration ensures a smooth, efficient, and stress-free experience, contributing to the overall success of every event.</p>
                                                                <p>Guided by our vision to become one of the most reputable and recognized names in Event, Wedding, and Exhibition Management, we at VenYou Events are committed to delivering truly unique, memorable, and lasting experiences for our clients.</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    <WhatWeDo2 />
                    {/* <Achievements1 /> */}
                    {/* <Team2 /> */}
                    {/* <Testimonials2 separatoralignment="separator-center" /> */}
                </div>

                <Footer />
            </>
        );
    };
};

export default About1;