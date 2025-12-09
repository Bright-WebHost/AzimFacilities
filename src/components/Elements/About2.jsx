import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimg1 = require('./../../images/azim/4.png');
var logo = require('./../../images/logo.png');

class About2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12 ">
                                        <div className="home-2-about bg-bottom-left bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2">
                                            <div className="text-left">
                                                <img src={logo} style={{height:'44px'}}/>
                                            <h4 style={{color:'#E18A2E'}}>Azim Facilities Management and Services</h4>
                                            </div><br/>
                                            <h3 className="m-t0 sx-tilte">Bringing exceptional quality to every horizon we touch</h3>
                                            <p>We are an ISO 9001:2015 certified company with full compliance to Sedex Smeta 4-pillar guidelines, stands as a leading player in the realm of facilities management & Hospitality in Qatar. With a heightened demand for quality services in the thriving hospitality and hotel industries, Azim Facilities Management & Hospitality Services emerges as a pivotal solution provider.<br/><br/> Our unwavering commitment to excellence, coupled with a highly skilled and adept workforce, positions us as a premier choice for comprehensive facility management & Hospitality services</p>
                                            
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

export default About2;