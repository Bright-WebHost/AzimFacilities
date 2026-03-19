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
                    <meta name="description" content="Azim Group is Qatar's leading ISO-certified facilities management company. Professional cleaning, building maintenance, housekeeping & hospitality staffing in Doha. 12+ years, 100+ clients." />
                    <link rel="canonical" href="https://www.azimgroup.qa/" />
                    <meta property="og:title" content="Facilities Management Company in Qatar | Azim Group" />
                    <meta property="og:description" content="Qatar's trusted facilities management company. ISO certified cleaning, building maintenance & hospitality services in Doha." />
                    <meta property="og:url" content="https://www.azimgroup.qa/" />
                    <meta property="og:type" content="website" />
                </Helmet>

                <Header2 />
                <div className="page-content">

                    {/* H1 - invisible to users, fully readable by Google */}
                    <h1 style={{
                        position: 'absolute',
                        width: '1px',
                        height: '1px',
                        overflow: 'hidden',
                        clip: 'rect(0,0,0,0)',
                        whiteSpace: 'nowrap'
                    }}>
                        Facilities Management Company in Qatar — Professional Cleaning, Building Maintenance & Hospitality Services Doha
                    </h1>

                    <Slider4 />
                    <About2 />
                    <About3 bgcolor="bg-white" />
                    <ClientsLogo1 />
                    <WhatWeDo1 />
                    <Statistics1 />
                    <Services2 />
                    <Services1 />

                    {/* EXACTLY SAME DESIGN AS BEFORE - only text improved for SEO */}
                    <div className="section-full mobile-page-padding p-t80 p-b50 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-center">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                            <h3 className="sep-line-one">Trusted By Clients Across Qatar</h3>
                                        </div>
                                        <p>At Azim Group, trust is our foundation. For over 12 years, we have remained committed to surpassing client expectations across Qatar — fostering enduring partnerships built on reliability, integrity, and exceptional <strong>facilities management services in Doha</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EXACTLY SAME 4 CARDS - only h4 and text improved */}
                    <div className="row col-lg-12 align-content">
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-sketch" /></span>
                                </div>
                                <div className="icon-content">
                                    <h4 className="sx-tilte">Reliable FM Services Qatar</h4>
                                    <p>Unwavering reliability in <strong>facilities management services across Qatar</strong> — consistently delivering on promises and meeting client expectations in Doha.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-table-1" /></span>
                                </div>
                                <div className="icon-content">
                                    <h4 className="sx-tilte">ISO Certified Quality Assurance</h4>
                                    <p>Maintaining the highest standards across all <strong>facility management services in Qatar</strong> — ISO 9001, 14001 & 45001 certified, ensuring excellence in every project across Doha.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-stairs-2" /></span>
                                </div>
                                <div className="icon-content">
                                    <h4 className="sx-tilte">Consistent FM Performance</h4>
                                    <p>100+ successful projects and reliable <strong>facilities management performance across Qatar</strong> instils confidence — making Azim Group the trusted FM partner in Doha.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-b30">
                            <div className="sx-icon-box-wraper p-a30 center bg-white shadow">
                                <div className="sx-icon-box-lg inline-icon text-primary m-b20 radius bg-secondry scale-in-center">
                                    <span className="icon-cell sx-text-primary"><i className="flaticon-table-2" /></span>
                                </div>
                                <div className="icon-content">
                                    <h4 className="sx-tilte">Transparent Communication</h4>
                                    <p>Building long-term <strong>facilities management partnerships in Qatar</strong> through clear, honest interactions — the cornerstone of Azim Group's services across Doha.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EXACTLY SAME CERT SECTION - only alt text and quote improved */}
                    <div className="section-full p-t70 p-b50 inner-page-padding bg-gray">
                        <div className="container">
                            <div className="blog-single-space max-w1100 ml-auto mr-auto">
                                <div className="blog-post blog-detail text-black">
                                    <div className="sx-post-text">
                                        <blockquote className="bdr-1 bdr-solid bdr-gray author-quote">
                                            <h4 className="m-b0">
                                                Azim Facilities Management & Hospitality Services is an <strong>ISO 9001:2015</strong> (Quality Management System) certified company, fully compliant with Sedex SMETA 4-Pillar guidelines. We are further certified under <strong>ISO 14001:2015</strong> (Environmental Management System) and <strong>ISO 45001:2018</strong> (Occupational Health & Safety Management System).
                                                As a leading provider of{' '}
                                                <NavLink to="/facilities-management">
                                                    facilities management & hospitality services in Qatar
                                                </NavLink>
                                                , we pride ourselves on delivering outstanding quality and operational excellence across Doha.
                                                <i className="fa fa-quote-left" />
                                            </h4>
                                        </blockquote>

                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img fetchpriority="high" height={800} width={1200}
                                                            src={require('./../../images/azim/ct-1.webp')}
                                                            alt="ISO 9001:2015 Quality Management Certification — Azim Facilities Management Qatar"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img loading="lazy" height={800} width={1200}
                                                            src={require('./../../images/azim/ct-2.webp')}
                                                            alt="ISO 14001:2015 Environmental Management Certification — Azim Group Qatar Doha"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img loading="lazy" height={800} width={1200}
                                                            src={require('./../../images/azim/Cert-3.webp')}
                                                            alt="ISO 45001:2018 Occupational Health Safety Certification — Azim FM Qatar"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img loading="lazy" height={800} width={1200}
                                                            src={require('./../../images/azim/Cert-4.webp')}
                                                            alt="Sedex SMETA 4-Pillar Ethical Compliance — Azim Facilities Management Doha Qatar"
                                                        />
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
    }
}

export default Home7;