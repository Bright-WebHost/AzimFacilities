import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'AZIM Facilities Management & services',
        logo: require('./../../images/azim/143.png'),
        image: require('./../../images/azim/16.png'),
        description: 'Crafting Elevated Experiences: Where Excellence Meets Service. Your space, our commitment.',
        link: '/facilities-management'
    },
    {
        count: '02',
        title: 'One Way Limousine WLL',
        logo: require('./../../images/azim/144.png'),
        image: require('./../../images/azim/15.png'),
        description: 'Elevate every journey with our premium limousine rentals — your destination, our elegance.',
        link: '/limousine'
    },
    {
        count: '03',
        title: 'VenYou Events',
        logo: require('./../../images/azim/145.png'),
        image: require('./../../images/azim/17.png'),
        description: 'Experience seamless events crafted with our expert touch — your celebration, perfected by our expertise.',
        link: '/events'
    },
    {
        count: '04',
        title: 'Najila Food Trading',
        logo: require('./../../images/azim/146.png'),
        image: require('./../../images/azim/18.png'),
        description: "We bring the world's finest flavors to your table. Experience the art of taste with us.",
        link: '/food-trading'
    },
    {
        count: '05',
        title: 'Golden Vision Cleaning and Hospitality Services',
        logo: require('./../../images/azim/147.png'),
        image: require('./../../images/azim/19.png'),
        description: 'Where cleanliness meets a warm welcome — your comfort is our commitment.',
        link: '/cleaning-and-hospitality'
    },
    {
        count: '06',
        title: 'Vadakara To Kasargod Restaurant',
        logo: require('./../../images/azim/148.png'),
        image: require('./../../images/azim/20.png'),
        description: 'A culinary experience that embodies true authenticity.',
        link: '/restaurent'
    }
]

class Services7 extends React.Component {
    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b50 bg-white">
                    <div className="container">
                        <div className="row">
                            {services.map((item, index) => (
                                <div className="col-lg-4 col-md-12 m-b30" key={index}>
                                    <div className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                        <div className="overlay-main bg-black opacity-05" />
                                        <div className="bg-content-mid-outer">
                                            <div className="bg-content-mid">
                                                <div className="sx-icon-box-wraper center   text-white">
                                                    <div className="icon-lg m-b15">
                                                        <span className="icon-cell">
                                                            <img 
                                                                src={item.logo} 
                                                                alt={item.title} 
                                                                style={{ 
                                                                    width: '90px', 
                                                                    height: '90px',
                                                                    objectFit: 'contain'
                                                                }} 
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content m-b30">
                                                        <h4 className="sx-tilte"> <NavLink to={item.link}   className="sx-text-white">{item.title}</NavLink></h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <span className="bgcall-block-number">{item.count}</span>
                                                <div className="bg-overlay" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services7;