import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

class Footer extends React.Component {
    render() {

        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}>
                                                <img src={require('./../../images/67.png')} alt="Inteshape"style={{height:'90px'}} />
                                            </NavLink>
                                        </div>
                                        <p>Azim Group Qatar blends tradition and innovation, excelling in trading, hospitality, and beyond.</p>
                                        <ul className="social-icons  sx-social-links">
                                            <li><a href="https://www.linkedin.com/company/azim-facilities-management-services/" className="fa-brands fa-linkedin" target="_blank"></a></li>
                                            <li><a href="https://www.facebook.com/azimgroupqtr" className="fa-brands fa-facebook" target="_blank" rel="noopener noreferrer"></a></li>
                                            <li><a href="https://x.com/Azimgroupqtr" className="fa-brands fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
                                            <li><a href="https://www.instagram.com/azimgroup.qtr/" className="fa-brands fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
                                            <li>
                                                <a
                                                    href="https://wa.me/97477047248"
                                                    className="fa-brands fa-whatsapp"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                ></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h5 className="widget-title">Resent Post</h5>
                                        <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                <div className="sx-post-date text-center text-uppercase text-white">
                                                    <strong className="p-date">15</strong>
                                                    <span className="p-month">Sep</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="sx-post-info">
                                                    <div className="sx-post-header">
                                                        <h6 className="post-title"><NavLink to={"/blog-single"}>On these beams, we’re.</NavLink></h6>
                                                    </div>
                                                    <div className="sx-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="sx-post-date text-center text-uppercase text-white">
                                                    <strong className="p-date">17</strong>
                                                    <span className="p-month">Sep</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="sx-post-info">
                                                    <div className="sx-post-header">
                                                        <h6 className="post-title"><NavLink to={"/blog-single"}>We’ll be a sensation for</NavLink></h6>
                                                    </div>
                                                    <div className="sx-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="sx-post-date text-center text-uppercase text-white">
                                                    <strong className="p-date">18</strong>
                                                    <span className="p-month">Sep</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="sx-post-info">
                                                    <div className="sx-post-header">
                                                        <h6 className="post-title"><NavLink to={"/blog-single"}>We’ll be a sensation for</NavLink></h6>
                                                    </div>
                                                    <div className="sx-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Quick links</h5>
                                        <ul>
                                            <li><NavLink to={"/"}>Home</NavLink></li>
                                            <li><NavLink to={"/about"}>About</NavLink></li>
                                            <li><NavLink to={"/services"}>Services</NavLink></li>
                                            <li><NavLink to={"/sector"}>Sectors</NavLink></li>
                                            {/* <li><NavLink to={"/career"}>Career</NavLink></li> */}
                                            <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Services</h5>
                                        <ul>
                                            <li><NavLink to={"/facilities-management"}>Facilities Management & services</NavLink></li>
                                            <li><NavLink to={"/limousine"}>One Way Limousine</NavLink></li>
                                            <li><NavLink to={"/events"}>VenYou Events</NavLink></li>
                                            <li><NavLink to={"/food-trading"}>Food Trading</NavLink></li>
                                            <li><NavLink to={"/cleaning-and-hospitality"}>Cleaning and Hospitality Services</NavLink></li>
                                            <li><NavLink to={"/restaurent"}>Restaurant</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h5 className="widget-title">Contact Us</h5>
                                        <ul className="widget_address">
                                            <li>
                                                <a 
                                                    href="https://maps.google.com/?q=Azim Facilities Management & Services" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                >
                                                    NBK Building, #805, 8th Floor, Doha-Qatar
                                                </a>
                                            </li>

                                            <li>
                                                <a href="mailto:afms@azimgroup.qa">
                                                    afms@azimgroup.qa
                                                </a>
                                                
                                            </li>
                                           

                                            <li>
                                                <a href="tel:+97444802851">
                                                    + 974 4480 2851
                                                </a>
                                            </li>

                                            <li>
                                                <a href="tel:+97477047248">
                                                    + 974 7704 7248
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <style>{`.widget_address li a {
                                    color: inherit;
                                    text-decoration: none;
                                    transition: color 0.3s ease;
                                }

                                .widget_address li a:hover {
                                    color: orange;
                                }
                                `}</style>
                                </div>

                            </div>
                        </div>
                        {/* <div className="container">
                            <div className="call-to-action-wrap">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6">
                                        <div className="call-to-action-left">
                                            <h5 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h5>
                                            <span>Never Miss Anything From Azim By Signing Up To Our Newsletter.</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <div className="call-to-action-right">
                                            <div className="widget_newsletter">
                                                <div className="newsletter-bx">
                                                    <form role="search" method="post" action="#">
                                                        <div className="input-group">
                                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                            <span className="input-group-btn">
                                                                <button type="button" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                            </span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="sx-footer-bot-left">
                                    <span className="copyrights-text">© 2025 AzimGroup. Designed By Bright Media.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher/>

            </>
        );
    };
};

export default Footer;