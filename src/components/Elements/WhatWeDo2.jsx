import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Corporate events',
        list: [
            'Exhibitions/Conferences',
            'Brand Activations & Promotions',
            'Gala Dinners & More..',
        ],
    },
    {
        count: '02',
        title: 'Social Events',
        list: [
            "Family Day Out's (With Live Cooking)",
            'Birthday Parties',
            'Sports Day & More...',
        ],
    },
    {
        count: '03',
        title: 'Event Staffing',
        list: [
            'Promoters',
            'Hostesses',
            'Show Hosts',
            'Master of Ceremony (MCs) Event Professionals & More..',
        ],
    },
    {
        count: '04',
        title: 'Entertainment',
        list: [
            'Artists',
            'Performers',
            'Entertainers',
            'talents & More...',
        ],
    },
    {
        count: '05',
        title: 'Production and Setup',
        list: [
            'Sound, Light & Stage set-up',
            'Concept, Design &Execution',
            'Full Theme Stage set-up’s',
            'Full Venue branding',
            'Furniture rentals & More...',
        ],
    },
    {
        count: '06',
        title: 'Weddings',
        list: [
            'Venue Booking & Decor',
            'A to Z management of entire wedding ceremony',
            'Video &Photo Coverage',
            'PR & Media booking',
            'Bridal Shower Ceremony Catering & More...',
        ],
    },
]


var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class WhatWeDo2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b50 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        <div className="large-title-block text-center">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">Service We Provide</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                        </div>
                        <div className="section-content">
                            <div className="row number-block-two-outer">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="number-block-two animate-in-to-top bdr-gray-light bdr-solid bdr-1">
                                            <div className="figcaption bg-white p-a30">
                                                <h4 className="m-t0" style={{color:'#e17c27'}}>{item.title}</h4>
                                                
                                                {/* Render bullet points here */}
                                                <ul className="service-list">
                                                    {item.list.map((point, i) => (
                                                        <li key={i}>{point}</li>
                                                    ))}
                                                </ul>

                                                <div className="figcaption-number animate-in-to-top-content">
                                                    <span>{item.count}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo2;