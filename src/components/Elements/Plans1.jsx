import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimg1 = require('./../../images/background/bg-4.png');
var bgimg2 = require('./../../images/background/cross-line2.png');
var img1 = require('./../../images/azim/28.png');
var img2 = require('./../../images/azim/29.png');
var img3 = require('./../../images/azim/30.png');

class Plans1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full text-center bg-gray bg-no-repeat p-t80 p-b80 bg-top-right mobile-page-padding" tyle={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h4 style={{margin:'25px 0px -20px 25px', color:'#E18A2E'}} >Comprehensive</h4>
                                        <h3 className="sep-line-one">Cleaning and Housekeeping services for star-rated facilities</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="section-content">
                                <div className="pricingtable-row p-t20">
                                    <div className="row no-gutters justify-content-center">
                                        <div className="col-lg-4  col-md-4 col-sm-6  m-b30">
                                            <div className="pricingtable-wrapper pricing-table-style-5 bg-white">
                                                <div className="pricingtable-inner">
                                                    <div className="pricingtable-title">
                                                        <img src={img1}/>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        {/* <span className="pricingtable-bx">$29</span> */}
                                                        <span className="pricingtable-type">Professional cleaning of building exteriors to remove dirt, grime, and environmental pollutants. This service enhances the building’s appearance and helps maintain its structural integrity.</span>
                                                    </div>
                                                    <ul className="pricingtable-features text-black">
                                                        {/* <li>Phone &amp; Email Support</li>
                                                        <li>3 Social Account </li>
                                                        <li>Branded Reports</li> */}
                                                    </ul>
                                                    <div className="pricingtable-footer">
                                                        <h4 style={{color:'#E18A2E'}}>Exterior Building Cleaning</h4>
                                                    </div>
                                                    <div className="overlay-main bg-white opacity-07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4  col-sm-6 m-b30">
                                            <div className="pricingtable-wrapper  pricing-table-style-5 bg-white">
                                                <div className="pricingtable-inner pricingtable-highlight shadow-lg">
                                                    <div className="pricingtable-title">
                                                        <img src={img2}/>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        {/* <span className="pricingtable-bx">$39</span> */}
                                                        <span className="pricingtable-type">Specialized cleaning and hygiene solutions designed for hotels and residential properties. Delivering tailored services that ensure exceptional cleanliness, guest satisfaction, and resident comfort.</span>
                                                    </div>
                                                    <ul className="pricingtable-features text-black">
                                                        {/* <li>Phone &amp; Email Support</li>
                                                        <li>3 Social Account </li>
                                                        <li>Branded Reports</li> */}
                                                    </ul>
                                                    <div className="pricingtable-footer">
                                                        <h4 style={{color:'#E18A2E'}}>Hygiene & Cleaning Services for Hotels and Residences</h4>
                                                    </div>
                                                    <div className="overlay-main bg-white opacity-07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4  col-sm-6 m-b30">
                                            <div className="pricingtable-wrapper  pricing-table-style-5 bg-white">
                                                <div className="pricingtable-inner">
                                                    <div className="pricingtable-title">
                                                        <img src={img3}/>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        {/* <span className="pricingtable-bx">$49</span> */}
                                                        <span className="pricingtable-type">Comprehensive deep cleaning of interiors, including scrubbing, sanitizing, and decluttering. Ensures the removal of dirt, dust, and grime, leaving spaces spotless and hygienic.</span>
                                                    </div>
                                                    <ul className="pricingtable-features text-black">
                                                        {/* <li>Phone &amp; Email Support</li>
                                                        <li>3 Social Account </li>
                                                        <li>Branded Reports</li> */}
                                                    </ul>
                                                    <div className="pricingtable-footer">
                                                        <h4 style={{color:'#E18A2E'}}>Deep Interior Cleaning</h4>
                                                    </div>
                                                    <div className="overlay-main bg-white opacity-07" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default Plans1;