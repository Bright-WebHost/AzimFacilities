import React from 'react';
import { NavLink } from 'react-router-dom';
// import Header4 from './../Common/Header4';
// import Footer from './../Common/Footer';
// import Banner from './../Elements/Banner';

const teamMembers = [
    {
        image: require('./../../images/azim/38.png'),
        membername: 'Fresh Vegetables & Fruits',
        position: 'Architect'
    },
    {
        image: require('./../../images/azim/39.png'),
        membername: 'Rice, Cereals & Pulses',
        position: 'Architect'
    },
    {
        image: require('./../../images/azim/40.png'),
        membername: 'Canned food, Sauces',
        position: 'Finances'
    },
    {
        image: require('./../../images/azim/41.png'),
        membername: 'Packed instant food items',
        position: 'Finances'
    },
    {
        image: require('./../../images/azim/42.png'),
        membername: 'Oils, Spices',
        position: 'Architect'
    },
    {
        image: require('./../../images/azim/43.png'),
        membername: 'Beverages',
        position: 'Architect'
    },
    {
        image: require('./../../images/azim/44.png'),
        membername: 'Frozen food',
        position: 'Finances'
    },
    {
        image: require('./../../images/azim/45.png'),
        membername: 'Bakery & Snacks',
        position: 'Finances'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Team1 extends React.Component {
    render() {
        return (
            <>
                {/* <Header4 /> */}
                <div className="page-content">
                    {/* <Banner title="Our Experts" pagename="Team" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} /> */}
                    {/* TITLE START */}
                                                                    <div className="section-head" style={{marginBottom:'-50px'}}>
                                                                        <div className="sx-separator-outer separator-center">
                                                                            <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                                                                <h3 className="sep-line-one">Products</h3>
                                                                            </div>
                                                                            {/* <p>At Azim Group, trust is our foundation. For years, we have remained committed to surpassing client expectations, fostering enduring partnerships built on reliability, integrity, and exceptional service.</p> */}
                                                                        </div>
                                                                    </div>
                                                                    {/* TITLE END */}
                    <div className="section-full p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* IMAGE CAROUSEL START */}
                            <div className="section-content">
                                <div className="row our-team-2-outer">
                                    {teamMembers.map((item, index) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                            <div className="our-team-2">
                                                <div className="profile-image">
                                                    <img src={item.image} alt="" />
                                                    {/* <div className="icons">
                                                        <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook" /></a>
                                                        <a href="https://www.twitter.com" target="_blank"> <i className="fa fa-twitter" /></a>
                                                        <a href="https://www.instagram.com" target="_blank"> <i className="fa fa-instagram" /></a>
                                                        <a href="https://in.linkedin.com" target="_blank"> <i className="fa fa-linkedin" /></a>
                                                    </div> */}
                                                </div>
                                                <div className="figcaption text-black">
                                                    <h4 className="m-t0"><NavLink to={"/team-single"}>{item.membername}</NavLink></h4>
                                                    {/* <span>{item.position}</span> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR Team END */}
                </div>

                {/* <Footer /> */}
            </>
        );
    };
};

export default Team1;