import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Projects6 from './../Elements/Projects6';
import ReactPlayer from 'react-player';
import Plans1 from '../Elements/Plans1';
import Header2 from '../Common/Header2';
import JobCategories from '../Elements/JobCategories';
import JobCategory from '../Elements/JobCategory';

var bnrimg = require('./../../images/azim/23.png');
var bgimg1 = require('./../../images/azim/72.png');
var bgimg2 = require('./../../images/background/cross-line.png');
class ProjectDetail1 extends React.Component {
    
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

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="AZIM Facilities Management & services" pagename="AZIM Facilities" description="Crafting Elevated Experiences: Where Excellence Meets Service. Your space, our commitment." bgimage={bnrimg} />

                    {/* SECTION CONTENT START */}
                    <div className={`${this.props.bgcolor} section-full mobile-page-padding p-t80 p-b50`}>
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-home-3 m-b30 bg-white">
                                        <h3 className="m-t0 m-b20 sx-tilte">What Azim Facilities Do</h3>
                                        <h2 className='title ' style={{color:'#E18A2E', textTransform:'uppercase', fontWeight:'bold'}}>We provide highly trained and professional hospitality staff, Which includes </h2>
                                        {/* <ul class="list-angle-right anchor-line two-column-list">
  <li>Butlers</li>
  <li>Captains</li>
  <li>Bartenders</li>
  <li>Waiters/Waitresses</li>
  <li>Hosts/Hostesses</li>
  <li>Commis personnel</li>
</ul> */}
<style>{`
.two-column-list {
  columns: 2; /* splits list into 2 columns */
  column-gap: 40px;
  list-style-position: inside;
}

`}</style>

                                        <div className="text-left">
                                            {/* <NavLink to="/about-1" className="site-button btn-half"><span>Read More</span></NavLink> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                            <div className="overlay-main " />
                                            {/* <div className="video-section-inner">
                                                <div className="video-section-content">
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>

                                                    <div className="video-section-bottom">
                                                        <h3 className="sx-title text-white">25 Years<br />Experience</h3>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <JobCategory />
                    {/* SECTION CONTENT END  */}
                    <Plans1 />
                    {/* SECTION CONTENTG START */}
                                        <div className="section-full mobile-page-padding p-tb80 bg-bottom-left bg-no-repeat" style={{ backgroundImage: 'url(images/background/bg-4.png)' }}>
                                            <div className="container">
                                                <div className="section-content">
                                                    <div className="page-notfound row">
                                                        <div className="col-md-7">
                                                            <img src={require('./../../images/azim/31.png')} alt="" />
                                                        </div>
                                                        <div className="col-md-5">
                                                            {/* <strong>Page Not Found</strong> */}
                                                            <span className="title">Building Maintenance services </span>
                                                            <span>We provide professional services in plumbing, electrical work, HVAC, landscaping,
                                                                 and security systems. Our skilled technicians ensure reliable solutions tailored
                                                                  to your needs, delivering quality, safety, and efficiency for every projects.</span><br/><br/>
                                                            <ul style={{
    marginLeft: '20px',
    textAlign: 'left',   // ✅ ensures text is left-aligned
    listStylePosition: 'outside', // ✅ keeps bullets outside
    paddingLeft: '20px', // ✅ consistent indentation
}}>
    <li><span>Plumbing</span></li>
    <li><span>Electrical</span></li>
    <li><span>HVAC</span></li>
    <li><span>Landscaping</span></li>
    <li><span>Security systems</span></li>
</ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* SECTION CONTENT END */}
                    {/* <Projects6 /> */}
                </div>
                 {/* <div className="text-center load-more-btn-outer" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                <Link to={"/career"} className="site-button-secondry btn-half"><span>View Career</span></Link>
                            </div> */}

                <Footer />
            </>
        );
    };
};

export default ProjectDetail1;