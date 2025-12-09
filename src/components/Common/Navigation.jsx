import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');

    };

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <NavLink to={"/"}>Home</NavLink>
                        {/* <ul className="sub-menu">
                            <li><NavLink to={"/"}>Home-1</NavLink></li>
                            <li><NavLink to={"/home-2"}>Home-2</NavLink></li>
                            <li><NavLink to={"/home-3"}>Home-3</NavLink></li>
                            <li><NavLink to={"/home-4"}>Home-4</NavLink></li>
                            <li><NavLink to={"/home-5"}>Home-5</NavLink></li>
                            <li><NavLink to={"/home-6"}>Home-6</NavLink></li>
                        </ul> */}
                    </li>
                    <li><NavLink to={"/about"}>About</NavLink>
                        {/* <ul className="sub-menu">
                            <li><NavLink to={"/about-1"}>About 1</NavLink></li>
                            <li><NavLink to={"/about-2"}>About 2</NavLink></li>
                        </ul> */}
                    </li>
                    <li>
                        <NavLink to={"/services"}>Service</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/facilities-management"}>Facilities Management & services</NavLink></li>
                            <li><NavLink to={"/limousine"}>One Way Limousine</NavLink></li>
                            <li><NavLink to={"/events"}>VenYou Events</NavLink></li>
                            <li><NavLink to={"/food-trading"}>Food Trading</NavLink></li>
                            <li><NavLink to={"/cleaning-and-hospitality"}>Cleaning and Hospitality Services</NavLink></li>
                            <li><NavLink to={"/restaurent"}>Restaurant</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={"/sector"}>Sector</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/residential-sector"}>Residential</NavLink></li>
                            <li><NavLink to={"/government-sector"}>Government</NavLink></li>
                            <li><NavLink to={"/real-estate-sector"}>Real Estate</NavLink></li>
                            <li><NavLink to={"/education-sector"}>Education</NavLink></li>
                        </ul>
                    </li>
                    {/* <li>
                        <NavLink to={""}>Blog</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/blog-grid"}>Blog Grid</NavLink></li>
                            <li><NavLink to={"/blog-listing"}>Blog Listing</NavLink></li>
                            <li><NavLink to={"/blog-masonry"}>Blog Masonry</NavLink></li>
                            <li><NavLink to={"/blog-single"}>Blog Single</NavLink></li>
                            <li><NavLink to={"/post-right-sidebar"}>Post Right Sidebar</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Shop</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/shop-grid"}>Shop Grid</NavLink></li>
                            <li><NavLink to={"/shop-list"}>Shop List</NavLink></li>
                            <li><NavLink to={"/shop-detail"}>Shop Detail</NavLink></li>
                            <li><NavLink to={"/shop-account"}>My Account</NavLink></li>
                            <li><NavLink to={"/shop-cart"}>Cart</NavLink></li>
                            <li><NavLink to={"/shop-checkout"}>Checkout</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={"/faq"}>FAQ</NavLink></li> */}
                    <li><NavLink to={"/career"}>Career</NavLink></li>
                    <li><NavLink to={"/contact-us"}>Contact</NavLink></li>
                </ul>
            </>
        );
    };
};

export default Navigation;