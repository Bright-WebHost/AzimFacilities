import React from 'react';
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
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

var bgimg1 = require('./../../images/background/cross-line2.png');

class Home7 extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Facilities Management Company in Qatar | Azim Group</title>
                    <meta name="description" content="Azim Group is a leading facilities management company in Qatar. We provide professional cleaning services, building maintenance, and hospitality staffing across Doha. ISO certified. 12+ years experience." />
                    <link rel="canonical" href="https://www.azimgroup.qa/" />
                    <meta property="og:title" content="Facilities Management Company in Qatar | Azim Group" />
                    <meta property="og:description" content="Qatar's trusted facilities management company. Professional cleaning, building maintenance & hospitality services in Doha. ISO 9001, 14001 & 45001 certified." />
                    <meta property="og:url" content="https://www.azimgroup.qa/" />
                </Helmet>

                <Header2 />
                <div className="page-content">

                    {/* MAIN H1 - Most important for SEO */}
                    <h1 className="sr-only">Leading Facilities Management Company in Qatar | Professional Cleaning & Maintenance Services Doha</h1>

                    <Slider4 />
                    <About2 />
                    <About3 bgcolor="bg-white" />
                    <ClientsLogo1 />
                    <WhatWeDo1 />
                    <Statistics1 />
                    <Services2 />
                    <Services1 />

                    {/* WHY CHOOSE US SECTION */}
                    <div className="section-full mobile-page-padding p-t80 p-b50 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-center">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                            <h2 className="sep-line-one">Trusted Facilities Management Partner in Qatar</h2>
                                        </div>
                                        <p>At Azim Group, we are Qatar's most trusted facilities management company. For over 12 years, we have delivered exceptional facility management services, professional cleaning, building maintenance, and hospitality staffing solutions across Doha and the wider Qatar region. Our commitment to excellence and client satisfaction sets us apart as the preferred FM company in Qatar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KEY STRENGTHS */}
                    <div className="row col-lg-12 align-content">
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-sketch" /></span>
                                </div>
                                <div className="icon-content">
                                    <h3 className="sx-tilte">Reliable FM Services</h3>
                                    <p>Unwavering reliability in facilities management services across Qatar, consistently delivering on promises and exceeding client expectations in every project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-table-1" /></span>
                                </div>
                                <div className="icon-content">
                                    <h3 className="sx-tilte">ISO Certified Quality</h3>
                                    <p>ISO 9001, ISO 14001 and ISO 45001 certified facilities management company in Qatar, maintaining the highest standards of quality and operational excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-stairs-2" /></span>
                                </div>
                                <div className="icon-content">
                                    <h3 className="sx-tilte">Proven Track Record</h3>
                                    <p>Over 100 satisfied clients across Qatar trust Azim Group for integrated facilities management, cleaning services, and building maintenance solutions in Doha.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-table-2" /></span>
                                </div>
                                <div className="icon-content">
                                    <h3 className="sx-tilte">Transparent Communication</h3>
                                    <p>Building long-term partnerships through clear, honest communication — the cornerstone of our facility management services across Qatar and Doha.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CERTIFICATIONS + SEO TEXT SECTION */}
                    <div className="section-full p-t70 p-b50 inner-page-padding bg-gray">
                        <div className="container">
                            <div className="blog-single-space max-w1100 ml-auto mr-auto">
                                <div className="blog-post blog-detail text-black">
                                    <div className="sx-post-text">

                                        {/* SEO RICH TEXT BLOCK */}
                                        <h2 style={{fontSize: '22px', marginBottom: '15px'}}>
                                            ISO Certified Facilities Management Company in Qatar
                                        </h2>
                                        <p style={{marginBottom: '15px'}}>
                                            Azim Facilities Management & Services is a premier <strong>facilities management company in Qatar</strong> with over 12 years of industry experience. Based in Doha, we serve commercial, hospitality, government, and residential sectors with a comprehensive range of <strong>integrated facilities management solutions</strong> tailored to Qatar's unique environment.
                                        </p>
                                        <p style={{marginBottom: '20px'}}>
                                            Our services include <strong>professional cleaning services in Qatar</strong>, <strong>building maintenance services</strong>, hospitality staffing, housekeeping management, and soft and hard FM services. With a dedicated team of 700+ professionals, we deliver consistent excellence to 100+ clients across Doha and Qatar.
                                        </p>

                                        <blockquote className="bdr-1 bdr-solid bdr-gray author-quote">
                                            <h4 className="m-b0">
                                                Azim Facilities Management & Hospitality Services is an <strong>ISO 9001:2015</strong> (Quality Management System) certified company, fully compliant with Sedex SMETA 4-Pillar guidelines. We are further certified under <strong>ISO 14001:2015</strong> (Environmental Management System) and <strong>ISO 45001:2018</strong> (Occupational Health & Safety Management System).
                                                As a leading provider of{' '}
                                                <NavLink to="/facilities-management">
                                                    facilities management & hospitality services in Qatar
                                                </NavLink>
                                                , we pride ourselves on delivering outstanding quality and operational excellence across Doha and Qatar.
                                                <i className="fa fa-quote-left" />
                                            </h4>
                                        </blockquote>

                                        {/* SERVICES SUMMARY FOR SEO */}
                                        <h2 style={{fontSize: '20px', margin: '25px 0 15px'}}>
                                            Our Facilities Management Services in Doha, Qatar
                                        </h2>
                                        <p style={{marginBottom: '10px'}}>
                                            As a leading <strong>facility management company in Qatar</strong>, Azim Group provides:
                                        </p>
                                        <ul style={{marginBottom: '20px', paddingLeft: '20px', lineHeight: '2'}}>
                                            <li><strong>Professional Cleaning Services Qatar</strong> — commercial, office, industrial and deep cleaning</li>
                                            <li><strong>Housekeeping Management Qatar</strong> — for hotels, hospitals, and commercial properties</li>
                                            <li><strong>Building Maintenance Services Qatar</strong> — preventive and corrective maintenance</li>
                                            <li><strong>Hospitality Staffing Doha</strong> — butlers, waiters, bartenders, and hotel staff supply</li>
                                            <li><strong>Integrated Facilities Management Solutions</strong> — end-to-end FM for all sectors</li>
                                        </ul>

                                        {/* CERTIFICATIONS IMAGES */}
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/azim/ct-1.webp')} alt="ISO 9001:2015 Quality Management Certification - Azim Facilities Qatar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/azim/ct-2.webp')} alt="ISO 14001:2015 Environmental Management Certification - Azim Facilities Qatar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/azim/Cert-3.webp')} alt="ISO 45001:2018 Occupational Health Safety Certification - Azim Qatar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/azim/Cert-4.webp')} alt="Sedex SMETA 4-Pillar Certification - Azim Facilities Management Qatar" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CALL TO ACTION */}
                                        <div style={{textAlign: 'center', marginTop: '30px', padding: '30px', backgroundColor: '#f8f8f8', borderRadius: '8px'}}>
                                            <h3 style={{marginBottom: '10px'}}>Looking for a Facilities Management Company in Qatar?</h3>
                                            <p style={{marginBottom: '20px'}}>Contact Azim Group today for professional facilities management, cleaning, and hospitality services in Doha and across Qatar.</p>
                                            <NavLink to="/contact-us" className="site-button">Get a Free Quote</NavLink>
                                            &nbsp;&nbsp;
                                            <NavLink to="/facilities-management" className="site-button-secondry">Our FM Services</NavLink>
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
    }
}

export default Home7;