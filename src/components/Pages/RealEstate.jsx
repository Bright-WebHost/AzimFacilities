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
        image: require('./../../images/azim/53.png'),
        title: 'Real Estate Sector',
        description: 'Azim Facilities Management Services delivers tailored solutions for the dynamic real estate sector, focusing on property value, tenant satisfaction, and operational excellence to ensure assets reach their full potential.'
    }
]
const achievements1 = [
    {
        title: 'Property Maintenance',
        description: 'Routine inspections, prompt repairs, and upkeep for lasting appeal.',
        date: '01',
        month: 'Oct',
        year: '01',
    },
    {
        title: 'Energy Efficiency',
        description: 'Audits, upgrades, and sustainable practices to cut costs and impact.',
        date: '20',
        month: 'Mar',
        year: '03',
    },
    {
        title: 'Janitorial Services',
        description: 'Thorough cleaning and waste management for welcoming spaces.',
        date: '28',
        month: 'Aug',
        year: '05',
    },
]

const achievements2 = [
    {
        title: 'Tenant Experience',
        description: 'Efficient operations and responsive service to boost retention.',
        date: '27',
        month: 'Nov',
        year: '02',
    },
    {
        title: 'Security & Safety',
        description: 'Access control, surveillance, and emergency planning for protection.',
        date: '07',
        month: 'Mar',
        year: '04',
    },
    {
        title: 'Space Optimisation',
        description: 'Smart layout enhancements to improve functionality and value.',
        date: '19',
        month: 'July',
        year: '06',
    }
]

var bgimg1 = require('./../../images/background/bg-map.png');
var bgimg2 = require('./../../images/background/cross-line2.png');
var bnrimg = require('./../../images/azim/23.png');

class RealEstate extends React.Component {
    render() {
        const options = {
            loop:true,
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
                    <Banner title="Real Estate sector" pagename="Real Estate" description="Azim FMS provides tailored real estate solutions, enhancing property value, tenant satisfaction, and operational excellence." bgimage={bnrimg} />
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
                                                                        <NavLink to={"/project-detail1"} className="site-button btn-half button-sm"><span>View All</span></NavLink>
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
                                    <h3 className="sep-line-one">Or Services</h3>
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
                                                <h4 className="text-uppercase our-story-year">{item.year}</h4>
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

export default RealEstate;