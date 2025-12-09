import React from 'react';
import Header4 from './../Common/Header4';
import Footer2 from './../Common/Footer2';
import Slider5 from './../Elements/Slider5';
import About4 from './../Elements/About4';
import Header2 from '../Common/Header2';
import Banner from '../Elements/Banner';
import WhatWeDo3 from '../Elements/WhatWeDo3';
import Footer from '../Common/Footer';
var bnrimg = require('./../../images/azim/23.png');

class Home5 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="One Way Limousine WLL" pagename="One Way Limousine" description="Elevate every journey with our premium limousine rentals — your destination, our elegance." bgimage={bnrimg} />
                    {/* <Slider5 /> */}
                    <About4 />
                    <WhatWeDo3 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home5;