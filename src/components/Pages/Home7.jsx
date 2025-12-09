import React from 'react';
// import Header2 from './../Common/Header2';
import Footer from './../Common/Footer';
import About1 from './../Elements/About1';
import WhatWeDo1 from './../Elements/WhatWeDo1';
import Testimonials1 from './../Elements/Testimonials1';
import Services1 from './../Elements/Services1';
import Projects1 from './../Elements/Projects1';
import ClientsLogo1 from './../Elements/ClientsLogo1';
import Team1 from './../Elements/Team1';
import About2 from '../Elements/About2';
import Statistics1 from '../Elements/Statistics1';
import Services2 from '../Elements/Services2';
import About3 from './../Elements/About3';
import Header2 from '../Common/Header2';
import Slider4 from '../Elements/Slider4';


var bgimg1 = require('./../../images/background/cross-line2.png');


class Home7 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    {/* SLIDER START */}
                   
                   <Slider4/>
               
                 
                    <About2/>
                    <About3 bgcolor="bg-white"/>
                    <ClientsLogo1/>
                    {/* <WhatWeDo3 /> */}
                    <WhatWeDo1 />
                    <Statistics1 />
                    <Services2 />
                    {/* <Testimonials1 /> */}
                    <Services1 />
                    <div className="section-full mobile-page-padding  p-t80 p-b50 bg-white">
                                        <div className="section-content">
                                            <div className="container">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-center">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                                            <h3 className="sep-line-one">Trusted By Clients</h3>
                                                        </div>
                                                        <p>At Azim Group, trust is our foundation. For years, we have remained committed to surpassing client expectations, fostering enduring partnerships built on reliability, integrity, and exceptional service.</p>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                            </div>
                                        </div>
                                        
                         </div>
                         <div className="row col-lg-12  align-content">
                                                                                <div className="col-md-3 m-b30">
                                                                                    <div className="sx-icon-box-wraper p-a30  center bg-white shadow">
                                                                                        <div className="sx-icon-box-lg inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                                                            <span className="icon-cell sx-text-primary"><i className="flaticon-sketch" /></span>
                                                                                        </div>
                                                                                        <div className="icon-content">
                                                                                            <h4 className="sx-tilte">Reliable</h4>
                                                                                            <p>Unwavering reliability, consistently delivering on promises and meeting client expectations.</p>
                                                                                            {/* <NavLink to={"/services-1"} className="site-button-link">Read More</NavLink> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-3 m-b30">
                                                                                    <div className="sx-icon-box-wraper p-a30  center bg-white shadow">
                                                                                        <div className="sx-icon-box-lg inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                                                            <span className="icon-cell sx-text-primary"><i className="flaticon-table-1" /></span>
                                                                                        </div>
                                                                                        <div className="icon-content">
                                                                                            <h4 className="sx-tilte">Quality Assurance</h4>
                                                                                            <p>Maintaining high standards of quality across all its services, ensuring excellence in every endeavor.</p>
                                                                                            {/* <NavLink to={"/services-1"} className="site-button-link">Read More</NavLink> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-3 m-b30">
                                                                                    <div className="sx-icon-box-wraper p-a30  center bg-white shadow">
                                                                                        <div className="sx-icon-box-lg inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                                                            <span className="icon-cell sx-text-primary"><i className="flaticon-stairs-2" /></span>
                                                                                        </div>
                                                                                        <div className="icon-content">
                                                                                            <h4 className="sx-tilte">Consistent Performance</h4>
                                                                                            <p>Successful projects and reliable performance instills confidence in clients, making us the trusted partner.</p>
                                                                                            {/* <NavLink to={"/services-1"} className="site-button-link">Read More</NavLink> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-3 m-b30">
                                                                                    <div className="sx-icon-box-wraper p-a30  center bg-white shadow">
                                                                                        <div className="sx-icon-box-lg inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                                                            <span className="icon-cell sx-text-primary"><i className="flaticon-table-2" /></span>
                                                                                        </div>
                                                                                        <div className="icon-content">
                                                                                            <h4 className="sx-tilte">Transparent Communication</h4>
                                                                                            <p>Building trust through clear and honest interactions.</p>
                                                                                            {/* <NavLink to={"/services-1"} className="site-button-link">Read More</NavLink> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                     </div>
                     
                    <div className="section-full p-t70 p-b50 inner-page-padding bg-gray">
                        <div className="container">
                            <div className="blog-single-space max-w1100 ml-auto mr-auto">
                                {/* BLOG START */}
                                <div className="blog-post blog-detail text-black">
                                    <div className="sx-post-text">                                        <p>
                                        </p><blockquote className="bdr-1 bdr-solid bdr-gray author-quote">
                                            <h4 className="m-b0">Azim Facilities Management & Hospitality Services is an ISO 9001:2015 certified company, fully compliant with Sedex SMETA 4-Pillar guidelines. As a leading provider in facilities management and hospitality services across Qatar, we pride ourselves on delivering outstanding quality and operational excellence.<i className="fa fa-quote-left" /> </h4>
                                            
                                        </blockquote>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/azim/11.png')} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/azim/101.png')} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        

                <Footer />
            </>
        );
    };
};

export default Home7;