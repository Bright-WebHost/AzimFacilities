import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Header2 from '../Common/Header2';

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
var img1= require('./../../images/azim/55.webp');
var img2= require('./../../images/azim/56.webp');
var img3= require('./../../images/azim/57.webp');
var img4= require('./../../images/azim/58.webp');

const sectors = [
  {
    id: 1,
    title: 'Hotel & Hospitality Sector',
    description: 'In the competitive hospitality industry, guest experience defines success. AZIM Group enhances hotel operations with tailored support…',
    image: img1,
    link: '/hotel-hospital-sector' // Add your desired route here
  },
  {
    id: 2,
    title: 'Governmental Sector',
    description: 'Government agencies require high standards of reliability, professionalism, and logistical precision. AZIM Group supports governmental facilities and initiatives through…',
    image: img2,
    link: '/government-sector' // Add your desired route here
  },
  {
    id: 3,
    title: 'Real Estate & Residential Sector',
    description: 'In the Real Estate & Residential sector, maintaining property value and ensuring resident comfort is critical. AZIM Group delivers end-to-end support through:',
    image: img3,
    link: '/real-estate-sector' // Add your desired route here
  },
  {
    id: 4,
    title: 'Education Sector',
    description: 'Educational institutions demand safe, clean, and supportive environments for students, staff, and visitors. AZIM Group delivers. AZIM Group supports this through…',
    image: img4,
    link: '/education-sector' // Add your desired route here
  }
];

class ShopList extends React.Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      margin: 30,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      items: 1,
      dots: false,
      animateOut: 'fadeOut',
    };
    
    return (
      <>
        <Header2 />
        <div className="page-content">
          <Banner title="Sector" pagename="Sector" description="" bgimage={bnrimg} />
          
          {/* SHOP SECTION START */}
          <style>{styles}</style>
          <div className="sectors-container">
            <div className="sectors-wrapper">
              <div className="sectors-grid">
                {sectors.map((sector) => (
                  <div key={sector.id} className="sector-card">
                    <div className="sector-image-container">
                      <img
                        src={sector.image}
                        alt={sector.title}
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
          {/* SHOP SECTION END */}
        </div>
        <Footer />
      </>
    );
  }
}

export default ShopList;