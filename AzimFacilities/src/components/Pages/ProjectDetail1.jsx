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
        <Helmet>
          <title>Facilities Management Company in Qatar | Azim Facilities Management & Services</title>
          <meta name="description" content="Azim Facilities Management & Services is a leading ISO-certified facilities management company in Qatar. Professional cleaning, building maintenance, hospitality staffing and integrated FM solutions across Doha, Qatar." />
          <link rel="canonical" href="https://www.azimgroup.qa/facilities-management" />
          <meta property="og:title" content="Facilities Management Company in Qatar | Azim Group" />
          <meta property="og:description" content="Professional facilities management services in Qatar — cleaning, building maintenance, hospitality staffing & housekeeping. ISO certified. Serving Doha & Qatar." />
          <meta property="og:url" content="https://www.azimgroup.qa/facilities-management" />
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Facilities Management & Hospitality Services Qatar",
              "provider": {
                "@type": "Organization",
                "name": "Azim Facilities Management & Services",
                "url": "https://www.azimgroup.qa",
                "telephone": "+97444802851",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "NBK Building, #805, 8th Floor",
                  "addressLocality": "Doha",
                  "addressCountry": "QA"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Doha, Qatar"
              },
              "serviceType": [
                "Facilities Management",
                "Building Maintenance",
                "Professional Cleaning Services",
                "Hospitality Staffing",
                "Housekeeping Management"
              ]
            }
          `}</script>
        </Helmet>

        <Header2 />

        <div className="page-content">

          <h1 className="sr-only">
            Facilities Management Company in Qatar — Professional Cleaning, Building Maintenance and Hospitality Services Doha
          </h1>

          <Banner
            title="AZIM Facilities Management & Services Qatar"
            pagename="Facilities Management Qatar"
            description="Qatar's Leading ISO-Certified Facilities Management Company. Professional cleaning, building maintenance and hospitality services across Doha."
            bgimage={bnrimg}
          />

          {/* CONTENT SECTION — SAME LAYOUT, SEO TEXT */}
          <div className="section-full mobile-page-padding p-t80 p-b50">
            <div className="container">
              <div className="section-content">
                <div className="row">

                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="about-home-3 m-b30 bg-white">
                      <h2 className="m-t0 m-b20 sx-tilte">
                        Professional Facilities Management & Hospitality Services in Qatar
                      </h2>
                      <p className="m-b15">
                        Azim Facilities Management & Services is a premier facilities management company in Qatar with over 12 years of experience serving Doha's commercial, hospitality, and government sectors. As an ISO 9001, ISO 14001, and ISO 45001 certified FM company in Qatar, we deliver world-class integrated facilities management solutions trusted by 100+ clients across Qatar.
                      </p>
                      <p
  style={{
    color: '#E18A2E',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '1px'
  }}
>
  We provide highly trained and professional hospitality staff, which include
</p>
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

          {/* BUILDING MAINTENANCE — SAME LAYOUT, SEO TEXT */}
          <div className="section-full mobile-page-padding p-tb80 bg-bottom-left bg-no-repeat">
            <div className="container">
              <div className="section-content">
                <div className="page-notfound row">

                  <div className="col-md-7">
                    <img loading="lazy" height={800} width={1200}
                      src={require('./../../images/azim/31.webp')}
                      alt="Building maintenance and facilities management services by Azim Group Qatar Doha"
                    />
                  </div>

                  <div className="col-md-5">
                    <h3 className="title">Building Maintenance Services in Qatar</h3>
                    <p>
                      Azim Group provides comprehensive building maintenance services across Qatar and Doha. Our skilled technicians deliver professional plumbing, electrical, HVAC, landscaping, and security system solutions — ensuring reliable, safe, and efficient facility maintenance tailored to Qatar's demanding environment.
                    </p>
                    <ul style={{
                      marginLeft: '20px',
                      textAlign: 'left',
                      listStylePosition: 'outside',
                      paddingLeft: '20px',
                    }}>
                      <li>Plumbing Services Qatar</li>
                      <li>Electrical Works Qatar</li>
                      <li>HVAC Maintenance Qatar</li>
                      <li>Landscaping Services Doha</li>
                      <li>Security Systems Qatar</li>
                    </ul>
                    <p className="m-t15">
                      As Qatar's trusted facility maintenance and support provider, we serve commercial buildings, hotels, government facilities, and residential properties across Doha with 700+ trained FM professionals.
                    </p>
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