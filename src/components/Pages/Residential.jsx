import React from 'react';
// import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
// import SimilarProjects from '../Elements/SimilarProjects';
// import Achievements1 from '../Elements/Achievements1';
import Header2 from '../Common/Header2';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        image: require('./../../images/azim/51.png'),
        title: 'Residential Sector',
        description: 'Azim FMS delivers specialized Facility Management solutions for Residential Communities, ensuring smooth operations, enhanced living experiences, and well-maintained environments that foster vibrant, connected lifestyles.'
    },
    // {
    //     image: require('./../../images/gallery/pic2.jpg'),
    //     title: 'Interior Work Avroko',
    //     description: 'Many of our projects cannot be featured in this section due to the Security levels of the space.'
    // },
    // {
    //     image: require('./../../images/gallery/pic3.jpg'),
    //     title: 'Interior Work Avroko',
    //     description: 'Many of our projects cannot be featured in this section due to the Security levels of the space.'
    // }
]
const achievements1 = [
    {
        title: 'Property Maintenance',
        description: 'Comprehensive upkeep to create pleasant, inviting spaces.',
        date: '01',
        month: 'Oct',
        year: '01',
    },
    {
        title: 'Security & Safety',
        description: 'Advanced surveillance and access control for resident protection.',
        date: '20',
        month: 'Mar',
        year: '03',
    },
    {
        title: 'Landscaping',
        description: 'Beautiful, balanced green spaces that enrich community living.',
        date: '28',
        month: 'Aug',
        year: '05',
    },
    {
        title: 'Emergency Preparedness',
        description: 'Robust protocols ensuring safety in critical situations.',
        date: '20',
        month: 'Oct',
        year: '07',
    }
]

const achievements2 = [
    {
        title: 'Amenity Management',
        description: 'Expert care for fitness centers, pools, and shared areas.',
        date: '27',
        month: 'Nov',
        year: '02',
    },
    {
        title: 'Energy Efficiency',
        description: 'Sustainable practices to reduce costs and environmental impact.',
        date: '07',
        month: 'Mar',
        year: '04',
    },
    {
        title: 'Visitor Management',
        description: 'Secure, convenient, and welcoming services for guests.',
        date: '19',
        month: 'July',
        year: '06',
    },
    // {
    //     title: 'Center of Gloucester',
    //     description: 'Scrambled it to make a type specimen book. remaining essentially. ',
    //     date: '27',
    //     month: 'May',
    //     year: '2018',
    // }
]

var bgimg1 = require('./../../images/background/bg-map.png');
var bgimg2 = require('./../../images/background/cross-line2.png');
var bnrimg = require('./../../images/azim/23.png');

class Residential extends React.Component {
    render() {
        const options = {
            loop:false,
            autoplay:false,
            center: false,
            items:3,
            margin:40,
            nav:true,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:1
                },			
                991:{
                    items:1
                }
            
                
            }
        };
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Residential Sector" pagename="Residential" description="Azim FMS ensures efficient Facility Management for Residential Communities, promoting smooth operations and quality living." bgimage={bnrimg} />
                    {/* ABOUT TEAM MEMBER SECTION START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                                        <div className="container">
                                            <div className="section-content">
                                                {/* TITLE START */}
                                                {/* <div className="section-head">
                                                    <div className={`${this.props.alignment} sx-separator-outer`}>
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                                            <h3 className="sep-line-one">{this.props.title}</h3>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* TITLE END */}
                                                <div className="work-carousel-outer">
                                                    <OwlCarousel className="owl-carousel mfp-gallery project-carousel project-carousel1 owl-btn-vertical-center" {...options}>
                                                        {services.map((item, index) => (
                                                            <div key={index} className="item">
                                                                <div className="sx-box   image-single-carousel bg-cover" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                                                    <div className="sx-info  p-t20 text-white">
                                                                        <h4 className="sx-tilte m-t0"><NavLink to={"/project-detail1"}>{item.title}</NavLink></h4>
                                                                        <p>{item.description}</p>
                                                                        {/* <NavLink to={"/project-detail1"} className="site-button btn-half button-sm"><span>View All</span></NavLink> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </OwlCarousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    <div className="section-full p-t80 p-b50 sx-bg-secondry bg-no-repeat bg-bottom-center mobile-page-padding" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">Our Services</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    {achievements1.map((item, index) => (
                                        <div className="sx-box our-story text-white" key={index}>
                                            <div className="mt-media our-story-info d-flex justify-content-start">
                                                {/* <div className="our-story-time"><span className="date">{item.date}</span><span className="month">{item.month}</span></div> */}
                                                <h4 className="text-uppercase our-story-year ">{item.year}</h4>
                                            </div>
                                            <div className="our-story-detail">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    {achievements2.map((item, index) => (
                                        <div className="sx-box our-story text-white" key={index}>
                                            <div className="mt-media our-story-info d-flex justify-content-start">
                                                {/* <div className="our-story-time"><span className="date">{item.date}</span><span className="month">{item.month}</span></div> */}
                                                <h4 className="text-uppercase our-story-year">{item.year}</h4>
                                            </div>
                                            <div className="our-story-detail">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* ABOUT TEAM MEMBER SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Residential;