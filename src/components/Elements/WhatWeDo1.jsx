import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimg1 = require('./../../images/azim/64.png');
var bgimg2 = require('./../../images/azim/6.png');
var bgimg3 = require('./../../images/background/cross-line2.png');

class WhatWeDo1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide" style={{
  backgroundImage: `url(${bgimg1})`,
  backgroundColor: 'rgba(0,0,0,0.1)',
  backgroundBlendMode: 'multiply',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}

>
                {/* <div className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}> */}
                    <div className="container right-half-bg-image-outer">
                        {/* <div className="right-half-bg-image bg-parallax bg-fixed bg-top-right" data-stellar-background-ratio={0} style={{ backgroundImage: 'url(' + bgimg2 + ')' }} /> */}
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="  " >
                                    <h3 className="sep-line-one">HOW WE WORKS</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30" >
                                    <div className="number-block-one animate-in-to-top" >
                                        <img src={require('./../../images/azim/60.png')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                                            <h4 className="m-a0">Diverse Portfolio</h4>
                                            <p>Azim Group boasts a diverse, multi-industry portfolio</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>01</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/61.png')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                                            <h4 className="m-a0">Innovative Vision</h4>
                                            <p>The group is led by an inclusive team that values diverse perspectives and ideas</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/62.png')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                                            <h4 className="m-a0">Commitment to Excellence</h4>
                                            <p>Committed to excellence, setting benchmarks through quality and innovation</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>03</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/azim/63.png')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                                            <h4 className="m-a0">Path to Success</h4>
                                            <p>Professionally develop strategic platforms after thorough testing</p>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>04</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="large-title-block full-content bg-gray">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="large-title">
                                            <h3 className="m-tb0">We present the idea with impressive details.</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12	col-sm-12">
                                        <div className="large-title-info">
                                            <p>Vivid colors and abstract patterns, combined with unique uses of light, textures, and space, create an outdoor space that magnifies...</p>
                                            <div className="text-left">
                                                <NavLink to={"/about-1"} className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo1;