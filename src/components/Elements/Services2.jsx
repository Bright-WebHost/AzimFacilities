import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        count: '01',
        title: 'Highly Skilled FM Workforce in Qatar',
        flaticon: 'flaticon-sketch',
        image: require('./../../images/azim/7.webp'),
        desc: 'Professional facilities management staff across Doha'
    },
    {
        count: '02',
        title: 'ISO 9001:2015 Certified FM Company Qatar',
        flaticon: 'flaticon-stairs',
        image: require('./../../images/azim/9.webp'),
        desc: 'Quality certified facilities management in Qatar'
    },
    {
        count: '03',
        title: 'Scalable Facilities Management Services',
        flaticon: 'flaticon-window',
        image: require('./../../images/azim/8.webp'),
        desc: 'Flexible FM solutions for any size business in Doha'
    },
    {
        count: '04',
        title: 'Sedex SMETA Compliant FM Provider Qatar',
        flaticon: 'flaticon-skyline',
        image: require('./../../images/azim/10.webp'),
        desc: 'Ethically certified FM services across Qatar'
    },
]

class Services2 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            center: false,
            margin: 0,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                991: { items: 3 },
                1200: { items: 4 }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 bg-change-section" style={{ backgroundColor: '#121C22' }}>
                    <div className="container">
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-moving bg-repeat-x">
                                    <h2 className="sep-line-one" style={{ color: 'white', fontSize: '22px' }}>
                                        Why Choose Azim as Your FM Company in Qatar
                                    </h2>
                                </div>
                                <p style={{ color: '#ccc', marginTop: '10px' }}>
                                    Trusted strengths that make Azim Group Qatar's leading <strong style={{ color: 'white' }}>facilities management company in Doha</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel className="owl-carousel service-slider owl-btn-vertical-center" {...options}>
                        {services.map((item, index) => (
                            <div className="item" key={index}>
                                <div className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                    <div className="overlay-main" />
                                    <div className="bg-content-mid-outer">
                                        <div className="bg-content-mid">
                                            <div className="sx-icon-box-wraper center text-white">
                                                <div className="icon-lg m-b15">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h3 className="sx-tilte" style={{ fontSize: '16px' }}>
                                                        <NavLink to="/facilities-management" className="sx-text-white">{item.title}</NavLink>
                                                    </h3>
                                                </div>
                                            </div>
                                            <span className="bgcall-block-number">{item.count}</span>
                                            <div className="bg-overlay" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </>
        );
    }
}

export default Services2;