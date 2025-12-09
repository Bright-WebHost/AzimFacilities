import React from 'react';
// import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import WhatWeDo6 from './../Elements/WhatWeDo6';
// import Services6 from './../Elements/Services6';
import Services7 from './../Elements/Services7';
import ClientsLogo2 from './../Elements/ClientsLogo2';
import Header2 from '../Common/Header2';
// import Header2 from './../Common/Header2';

var bnrimg = require('./../../images/azim/23.png');

class Service1 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="We are a Group of companies" pagename="Services" description="Empowering Growth, Uniting Excellence to Shape Tomorrow's Success AZIM Group is a constellation of enterprises at the heart of Qatar's dynamic business landscape. With seven unique companies under our banner, we orchestrate services to deliver unmatched value across diverse industries" bgimage={bnrimg}/>
                    {/* <WhatWeDo6 /> */}
                    {/* <Services6 /> */}
                    <Services7 />
                    <WhatWeDo6 />
                    {/* <ClientsLogo2 bgcolor="bg-gray" /> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default Service1;