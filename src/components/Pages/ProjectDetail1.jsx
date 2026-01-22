import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Plans1 from '../Elements/Plans1';
import JobCategory from '../Elements/JobCategory';
import { Helmet } from 'react-helmet-async';

var bnrimg = require('./../../images/azim/23.webp');
var bgimg1 = require('./../../images/azim/72.webp');

class ProjectDetail1 extends React.Component {

  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', reject);
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }
    loadScript('./assets/js/custom.js');
  }

  render() {
    return (
      <>
        <Header2 />

        <div className="page-content">

          {/* SEO META */}
          {/* <Helmet>
            <title>Facilities Management & Hospitality Services in Qatar | Azim Group</title>
            <meta
              name="description"
              content="Azim Facilities Management provides professional facilities management, hospitality, cleaning, and building maintenance services across Qatar."
            />
            <script type="application/ld+json">
              {`
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Facilities Management & Hospitality Services",
                "provider": {
                  "@type": "Organization",
                  "name": "Azim Facilities Management & Services",
                  "url": "https://www.azimgroup.qa/"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Qatar"
                },
                "serviceType": "Facilities Management"
              }
              `}
            </script>
          </Helmet> */}

          {/* MAIN H1 (Hidden – SEO Only) */}
          <h1 className="sr-only">
            Facilities Management & Hospitality Services in Qatar
          </h1>

          <Banner
            title="AZIM Facilities Management & Services"
            pagename="AZIM Facilities"
            description="Crafting Elevated Experiences: Where Excellence Meets Service. Your space, our commitment."
            bgimage={bnrimg}
          />

          {/* CONTENT SECTION */}
          <div className="section-full mobile-page-padding p-t80 p-b50">
            <div className="container">
              <div className="section-content">
                <div className="row">

                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="about-home-3 m-b30 bg-white">
                      <h2 className="m-t0 m-b20 sx-tilte">
                        What Azim Facilities Do
                      </h2>

                      <h3
                        style={{
                          color: '#E18A2E',
                          textTransform: 'uppercase',
                          fontWeight: 'bold'
                        }}
                      >
                        We provide highly trained and professional hospitality staff, which include
                      </h3>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="video-section-full-v2">
                      <div
                        className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30"
                        style={{ backgroundImage: 'url(' + bgimg1 + ')' }}
                      >
                        <div className="overlay-main" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <JobCategory />
          <Plans1 />

          {/* BUILDING MAINTENANCE SECTION */}
          <div className="section-full mobile-page-padding p-tb80 bg-bottom-left bg-no-repeat">
            <div className="container">
              <div className="section-content">
                <div className="page-notfound row">

                  <div className="col-md-7">
                    <img
                      src={require('./../../images/azim/31.webp')}
                      alt="Building maintenance and facilities management services by Azim Group in Qatar"
                    />
                  </div>

                  <div className="col-md-5">
                    <h3 className="title">Building Maintenance Services</h3>
                    <p>
                      We provide professional services in plumbing, electrical work, HVAC,
                      landscaping, and security systems. Our skilled technicians ensure reliable
                      solutions tailored to your needs, delivering quality, safety, and efficiency
                      for every project.
                    </p>

                    <ul style={{
                      marginLeft: '20px',
                      textAlign: 'left',
                      listStylePosition: 'outside',
                      paddingLeft: '20px',
                    }}>
                      <li>Plumbing</li>
                      <li>Electrical</li>
                      <li>HVAC</li>
                      <li>Landscaping</li>
                      <li>Security Systems</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </>
    );
  }
}

export default ProjectDetail1;