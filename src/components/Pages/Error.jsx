import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Header2 from '../Common/Header2';

var bnrimg = require('./../../images/azim/23.png');

class Error extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Vadakara To Kasargod Restaurant" pagename="Restaurant" description="A culinary experience that embodies true authenticity." bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full mobile-page-padding p-tb150 bg-bottom-left bg-no-repeat" style={{ backgroundImage: 'url(images/background/bg-4.png)' }}>
                        <div className="container">
                            <div className="section-content">
                                <div className="page-notfound row">
                                    <div className="col-md-7">
                                        <img src={require('./../../images/azim/50.png')} alt="" />
                                    </div>
                                    <div className="col-md-5">
                                        <strong>Welcome To Our Restaurant</strong>
                                        <span className="title">Vadakara To Kasargod Restaurant</span>
                                        <p>Where culinary delight meets the essence of Vadakara and Kasargod. Our multi-cuisine restaurant invites you on a gastronomic journey that captures the rich flavors and cultural nuances of these vibrant locales. Indulge your taste buds in a unique fusion of culinary traditions, bringing the best of Vadakara and Kasargod to your plate.</p>
                                        <a className="site-button btn-half" target="_blank" href="https://maps.app.goo.gl/pdNRddpxjVnbR8DX6"><span> Location</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Error;