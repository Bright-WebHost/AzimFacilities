import React from 'react';

var bgimg1 = require('./../../images/azim/23.png');
var bgimg2 = require('./../../images/azim/1.png');
var bgimg3 = require('./../../images/background/cross-line2.png');

class WhatWeDo6 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container right-half-bg-image-outer">
                        <div className="right-half-bg-image bg-parallax bg-fixed bg-top-right" data-stellar-background-ratio={0} style={{ backgroundImage: 'url(' + bgimg2 + ')' }} />
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                    <h4
  style={{
    margin: window.innerWidth <= 768 ? '15px 0px -10px 20px' : '25px 0px -20px 25px'
  }}
>
  Progressing
</h4>

                                    <h3 className="sep-line-one">Beyond Boundaries</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/73.png')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Dynamic Growth</h4>
                                            <p>Azim Group’s journey reflects dynamic growth, resilience, and adaptability across industries.</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>01</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/74.png')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Adaptable Approach</h4>
                                            <p>Azim Group’s success stems from its adaptability, agility, and foresight—positioning it as a dynamic, future-ready force.</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/75.png')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Innovative Solutions</h4>
                                            <p>Renowned for its pioneering spirit, Azim Group drives innovation, sets industry standards, and shapes the future of excellence.</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>03</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo6;