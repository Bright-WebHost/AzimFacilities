import React from 'react';

var bgimg1 = require('./../../images/azim/64.webp');

class WhatWeDo1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat overflow-hide" style={{
                    backgroundImage: `url(${bgimg1})`,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="container right-half-bg-image-outer">
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div>
                                    <h2 className="sep-line-one" style={{ color: 'white', fontSize: '18px' }}>HOW WE DELIVER FM EXCELLENCE IN QATAR</h2>
                                </div>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/60.webp')} alt="Diverse facilities management portfolio Qatar — Azim Group Doha" />
                                        <div className="figcaption bg-white text-center p-a20" style={{ boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px' }}>
                                            <h3 className="m-a0" style={{ fontSize: '16px' }}>Diverse FM Portfolio Qatar</h3>
                                            <p>Azim Group offers a <strong>diverse facilities management portfolio</strong> serving commercial, hospitality, and government sectors across Doha, Qatar.</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>01</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/61.webp')} alt="Innovative facilities management solutions Doha Qatar — Azim FM" />
                                        <div className="figcaption bg-white text-center p-a20" style={{ boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px' }}>
                                            <h3 className="m-a0" style={{ fontSize: '16px' }}>Innovative FM Vision</h3>
                                            <p>Delivering <strong>innovative facilities management and cleaning services in Qatar</strong> — led by an experienced team that values fresh perspectives and operational excellence in Doha.</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/62.webp')} alt="ISO certified quality facilities management company Qatar" />
                                        <div className="figcaption bg-white text-center p-a20" style={{ boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px' }}>
                                            <h3 className="m-a0" style={{ fontSize: '16px' }}>ISO Certified FM Quality</h3>
                                            <p><strong>ISO 9001, 14001 & 45001 certified</strong> — committed to excellence and setting benchmarks in <strong>facilities management services across Qatar</strong> and Doha.</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>03</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/63.webp')} alt="Proven facilities management results Qatar businesses Doha" />
                                        <div className="figcaption bg-white text-center p-a20" style={{ boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px' }}>
                                            <h3 className="m-a0" style={{ fontSize: '16px' }}>Proven FM Track Record</h3>
                                            <p>Strategic <strong>facility management solutions in Qatar</strong> — developed and tested to deliver consistent, measurable results for Doha businesses across all sectors.</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>04</span>
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
}

export default WhatWeDo1;