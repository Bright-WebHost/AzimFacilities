import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Header2 from '../Common/Header2';
import { Helmet } from 'react-helmet-async';

const styles = `
  .sectors-container {
    min-height: 100vh;
    max-width: 1200px;
    padding: 4rem 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .sectors-wrapper {
    max-width: 80rem;
    margin: 0 auto;
  }

  .sectors-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    .sectors-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .sector-card {
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .sector-image-container {
    aspect-ratio: 4 / 3;
    overflow: hidden;
  }

  .sector-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: all 500ms ease;
  }

  .sector-card:hover .sector-image {
    filter: grayscale(0%);
    transform: scale(1.05);
  }

  .sector-label {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    background-color: #E18A2E;
    padding: 0 1.5rem;
    transform: translateY(0);
    transition: all 500ms ease;
    height: auto;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sector-card:hover .sector-label {
    transform: translateY(-12px);
    min-height: 120px;
  }

  .sector-title {
    color: white;
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    padding: 0.5rem 0;
    margin: 0;
    transition: all 300ms ease;
    text-decoration: none;
  }

  .sector-title:hover {
    color: black;
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    padding: 0.5rem 0;
    margin: 0;
    transition: all 300ms ease;
    text-decoration: none;
  }

  .sector-title-link {
    color: white;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }

  .sector-title-link:hover {
    color: white;
    text-decoration: none;
  }

  .sector-description {
    color: white;
    font-size: 1.125rem;
    text-align: center;
    padding-bottom: 0.5rem;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 500ms ease;
    margin: 0;
    transform: translateY(-10px);
  }

  .sector-card:hover .sector-description {
    opacity: 1;
    max-height: 100px;
    transform: translateY(0);
  }

  .sector-card:hover .sector-title {
    padding-bottom: 0.5rem;
  }
`;

var bnrimg = require('./../../images/azim/23.webp');
var img1 = require('./../../images/azim/55.webp');
var img2 = require('./../../images/azim/56.webp');
var img3 = require('./../../images/azim/57.webp');
var img4 = require('./../../images/azim/58.webp');

const sectors = [
  {
    id: 1,
    title: 'Hotel & Hospitality Sector Qatar',
    description: 'In Qatar\'s competitive hospitality industry, guest experience defines success. Azim Group enhances hotel operations with professional housekeeping, cleaning, and hospitality staffing services across Doha.',
    image: img1,
    alt: 'Hotel and hospitality facilities management services Qatar — Azim Group Doha',
    link: '/hotel-hospital-sector'
  },
  {
    id: 2,
    title: 'Government Sector Facilities Management Qatar',
    description: 'Government agencies in Qatar require the highest standards of reliability and professionalism. Azim Group supports governmental facilities with ISO-certified FM and cleaning services across Doha.',
    image: img2,
    alt: 'Government sector facilities management company Qatar Doha — Azim Group',
    link: '/government-sector'
  },
  {
    id: 3,
    title: 'Real Estate & Residential Sector Qatar',
    description: 'Maintaining property value and resident comfort in Qatar\'s real estate sector. Azim Group delivers end-to-end facilities management, cleaning and maintenance solutions across Doha.',
    image: img3,
    alt: 'Real estate residential facilities management Qatar — Azim Group cleaning maintenance Doha',
    link: '/real-estate-sector'
  },
  {
    id: 4,
    title: 'Education Sector Facilities Management Qatar',
    description: 'Educational institutions in Qatar demand safe, clean and supportive environments. Azim Group delivers professional cleaning, maintenance and FM services for schools and universities across Doha.',
    image: img4,
    alt: 'Education sector facilities management cleaning services Qatar Doha — Azim Group',
    link: '/education-sector'
  }
];

class ShopList extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Sectors We Serve | Facilities Management Company Qatar | Azim Group</title>
          <meta name="description" content="Azim Group provides professional facilities management services across Qatar's key sectors — hospitality, government, real estate and education. ISO certified FM company serving Doha and Qatar." />
          <link rel="canonical" href="https://www.azimgroup.qa/sector" />
          <meta property="og:title" content="Sectors | Facilities Management Services Qatar | Azim Group" />
          <meta property="og:description" content="Azim Group delivers FM services across hospitality, government, real estate and education sectors in Qatar. Professional cleaning & maintenance in Doha." />
          <meta property="og:url" content="https://www.azimgroup.qa/sector" />
        </Helmet>

        <Header2 />
        <div className="page-content">

          {/* H1 - invisible to users, fully read by Google */}
          <h1 style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap'
          }}>
            Sectors We Serve — Facilities Management Services Across Qatar's Hospitality, Government, Real Estate & Education Sectors
          </h1>

          <Banner
            title="Sectors We Serve in Qatar"
            pagename="Sectors"
            description="Professional Facilities Management Services Across Qatar's Key Industry Sectors — Doha & Beyond"
            bgimage={bnrimg}
          />

          <style>{styles}</style>
          <div className="sectors-container">
            <div className="sectors-wrapper">

              {/* SEO INTRO - small, clean, above grid */}
              <div style={{
                maxWidth: '700px',
                margin: '0 auto 3rem',
                textAlign: 'center'
              }}>
                <h2 style={{ fontSize: '24px', marginBottom: '12px', color: '#333' }}>
                  Facilities Management Services Across All Sectors in Qatar
                </h2>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                  As Qatar's leading <strong>facilities management company</strong>, Azim Group delivers <strong>professional cleaning, building maintenance, and hospitality staffing</strong> services across Doha's hospitality, government, real estate, and education sectors.
                </p>
              </div>

              <div className="sectors-grid">
                {sectors.map((sector) => (
                  <div key={sector.id} className="sector-card">
                    <div className="sector-image-container">
                      <img
                        src={sector.image}
                        alt={sector.alt}
                        className="sector-image"
                      />
                    </div>
                    <div className="sector-label">
                      <NavLink to={sector.link} className="sector-title-link">
                        <h2 className="sector-title">
                          {sector.title}
                        </h2>
                      </NavLink>
                      <p className="sector-description">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }
}

export default ShopList;