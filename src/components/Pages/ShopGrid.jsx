import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Header4 from './../Common/Header4';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';
// import ShopSidebar from '../Elements/ShopSidebar';
import Team1 from './Team1';
import Header2 from '../Common/Header2';
// import Header2 from './../Common/Header2';

const locations = [
    {
        image: require('./../../images/azim/37.png'),
        title: "We bring the world's finest flavors to your table. Experience the art of taste with us",
        description: "Najila Food Trading stands as a trusted leader in the food trading industry, renowned for delivering premium-quality products. We source, import, and distribute an extensive selection of food items catering to the food service, wholesale, and retail markets. Through strong partnerships with international suppliers, we guarantee a steady supply of world-class products — from dry, frozen, and fresh goods to live seafood, Japanese specialties, premium meats, and everyday essentials. Najila Food Trading is your gateway to exceptional taste and culinary excellence.",
    },
    // {
    //     image: require('./../../images/our-history/1.jpg'),
    //     title: 'Concept Development.',
    //     description: 'Fantastic service from start to finish. After our ceiling collapsed we never thought our damaged floor would look so good again. These guys worked in a tight time frame and were very accommodating to the other trades working in the same area to produce brilliant results and restore our badly damaged floor to look like new!',
    // },
    // {
    //     image: require('./../../images/our-history/2.jpg'),
    //     title: 'Design Development.',
    //     description: 'The floor looks magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you. You have very tidy workers, covering everything, and the house was left in a good shape as the condition allowed.',
    // },
    // {
    //     image: require('./../../images/our-history/3.jpg'),
    //     title: 'Construction Documentation.',
    //     description: 'I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more.',
    // }
]

var bnrimg = require('./../../images/azim/23.png');

// var bnrimg = require('./../../images/banner/4.jpg');

class ShopGrid extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title=" Najila Food Tradings" pagename="Food Trading" description="We bring the world's finest flavors to your table. Experience the art of taste with us." bgimage={bnrimg}/>
                    {/* ABOUT COMPANY SECTION START */}
                    <div className="section-full p-t80 p-b50	 bg-white inner-page-padding">
                        <div className="container">
                            <div className="section-content ">
                                <div className="our-history text-black">
                                    {locations.map((item, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-12 pic-bg-border">
                                                <div className="our-history-pic bg-no-repeat bg-center bg-cover" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="our-history-content m-b30">
                                                    <div className="large-title">
                                                        <h2 className="m-t0">{item.title}</h2>
                                                    </div>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="blog-single-space max-w900 ml-auto mr-auto">
                            <blockquote className="bdr-1 bdr-solid bdr-gray author-quote">
                                            <h4 className="m-b0">For more details, check out the link below!<i className="fa fa-quote-left" /> </h4>
                                            <div className="p-t15">
                                                <a href="https://najilafood.com" target="_blank" rel="noopener noreferrer">
    <strong>najilafood.com</strong>
</a>

                                                {/* <span>Interior Designer</span> */}
                                            </div>
                                        </blockquote>
                        </div>
                    </div>
                    {/* ABOUT COMPANY SECTION END */}
                    
                </div>
                
                <Team1 />

                <Footer />
            </>
        );
    };
};

export default ShopGrid;