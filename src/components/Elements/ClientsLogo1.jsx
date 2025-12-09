// import React from 'react';

// import { NavLink } from 'react-router-dom';

// const logos = [
//     { image: require('./../../images/client/78.png') },
//     { image: require('./../../images/client/80.png') },
//     { image: require('./../../images/client/81.png') },
//     { image: require('./../../images/client/82.png') },
//     { image: require('./../../images/client/83.png') },
//     { image: require('./../../images/client/84.png') },
//     { image: require('./../../images/client/85.png') },
//     { image: require('./../../images/client/86.png') },
//     { image: require('./../../images/client/87.png') },
//     { image: require('./../../images/client/88.png') },
//     { image: require('./../../images/client/89.png') },
//     { image: require('./../../images/client/90.png') },
//     { image: require('./../../images/client/91.png') },
//     { image: require('./../../images/client/92.png') },
//     { image: require('./../../images/client/93.png') },
//     { image: require('./../../images/client/94.png') },
//     { image: require('./../../images/client/95.png') },
//     { image: require('./../../images/client/96.png') },
//     { image: require('./../../images/client/97.png') },
//     { image: require('./../../images/client/98.png') },
//     { image: require('./../../images/client/99.png') },
//     { image: require('./../../images/client/102.png') },
//     { image: require('./../../images/client/103.png') },
//     { image: require('./../../images/client/104.png') },
//     { image: require('./../../images/client/105.png') },
//     { image: require('./../../images/client/106.png') },
//     { image: require('./../../images/client/107.png') },
//     { image: require('./../../images/client/108.png') },
//     { image: require('./../../images/client/109.png') },
//     { image: require('./../../images/client/110.png') },
//     { image: require('./../../images/client/111.png') },
//     { image: require('./../../images/client/112.png') },
//     { image: require('./../../images/client/113.png') },
//     { image: require('./../../images/client/114.png') },
//     { image: require('./../../images/client/115.png') },
//     { image: require('./../../images/client/116.png') },
//     { image: require('./../../images/client/117.png') },
//     { image: require('./../../images/client/118.png') },
//     { image: require('./../../images/client/119.png') },
//     { image: require('./../../images/client/120.png') },
//     { image: require('./../../images/client/121.png') },
//     { image: require('./../../images/client/122.png') },
//     { image: require('./../../images/client/123.png') },
//     { image: require('./../../images/client/124.png') },
//     { image: require('./../../images/client/125.png') },
//     { image: require('./../../images/client/126.png') },
//     { image: require('./../../images/client/127.png') },
//     { image: require('./../../images/client/128.png') },
//     { image: require('./../../images/client/129.png') },
//     { image: require('./../../images/client/130.png') },
//     { image: require('./../../images/client/131.png') },
//     { image: require('./../../images/client/132.png') },
//     { image: require('./../../images/client/133.png') },
// ];


// var bgimg1 = require('./../../images/background/bg-12.jpg');
// var bgimg2 = require('./../../images/background/cross-line2.png');

// class ClientsLogo1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentSlide: 0
//         };
//         this.slidesToShow = window.innerWidth < 768 ? 5: 7; 
//         this.totalSlides = Math.ceil(logos.length / this.slidesToShow);
//         this.slideInterval = null;
//     }

//     componentDidMount() {
//         this.startAutoSlide();
//     }

//     componentWillUnmount() {
//         this.stopAutoSlide();
//     }

//     startAutoSlide = () => {
//         this.slideInterval = setInterval(() => {
//             this.setState(prevState => ({
//                 currentSlide: (prevState.currentSlide + 1) % this.totalSlides
//             }));
//         }, 2000);
//     }

//     stopAutoSlide = () => {
//         if (this.slideInterval) {
//             clearInterval(this.slideInterval);
//         }
//     }

//     render() {
//         const { currentSlide } = this.state;

//         return (
//             <>
//                 <div className="section-full mobile-page-padding  p-t30 p-b30 bg-repeat" >
//                     <div className="container">
//                         <div className="section-content">
//                             <div className="client-carousel-wrapper">
//                                 <div 
//                                     className="client-carousel-track"
//                                     style={{
//                                         transform: `translateX(-${currentSlide * (100 / this.slidesToShow)}%)`,
//                                         transition: 'transform 0.5s ease-in-out',
//                                         display: 'flex',
//                                         width: `${(logos.length / this.slidesToShow) * 20}%`
//                                     }}
//                                 >
//                                     {logos.map((item, index) => (
//                                         <div 
//                                             key={index}
//                                             className="client-logo-slide"
//                                             style={{
//                                                 flex: `0 0 ${100 / this.slidesToShow}%`,
//                                                 padding: '0 10px',
//                                                 boxSizing: 'border-box'
//                                             }}
//                                         >
//                                             <NavLink to={"/about"} className="client-logo-pic">
//                                                 <img 
//                                                     src={item.image} 
//                                                     alt={`Client logo ${index + 1}`}
//                                                     style={{
//                                                         width: '100%',
//                                                         height: 'auto',
//                                                         objectFit: 'contain'
//                                                     }}
//                                                 />
//                                                 <div>
//                                                 </div>
//                                             </NavLink>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="hilite-title text-left p-l50 text-uppercase">
                       
//                     </div>
//                 </div>

//                 <style jsx>{`
//                     .client-carousel-wrapper {
//                         overflow: hidden;
//                         position: relative;
//                         width: 100%;
//                     }
                    
//                     .client-carousel-track {
//                         display: flex;
//                         will-change: transform;
//                     }
                    
//                     .client-logo-slide {
//                         display: flex;
//                         align-items: center;
//                         justify-content: center;
//                     }
                    
//                     .client-logo-pic {
//                         display: block;
//                         text-align: center;
//                         position: relative;
//                         overflow: hidden;
//                     }
                    
//                     .client-logo-pic div {
//                         position: absolute;
//                         top: 0;
//                         left: 0;
//                         right: 0;
//                         bottom: 0;
//                         // background: rgba(0, 0, 0, 0.7);
//                         display: flex;
//                         align-items: center;
//                         justify-content: center;
//                         opacity: 0;
//                         // transition: opacity 0.3s ease;
//                         // color: white;
//                     }
                    
//                     .client-logo-pic:hover div {
//                         // opacity: 1;
//                     }
//                 `}</style>
//             </>
//         );
//     }
// };

// export default ClientsLogo1;


import React from "react";
import { Link } from "react-router-dom";

const brands = [
    { image: require('./../../images/client/78.png') },
    { image: require('./../../images/client/80.png') },
    { image: require('./../../images/client/81.png') },
    { image: require('./../../images/client/82.png') },
    { image: require('./../../images/client/83.png') },
    { image: require('./../../images/client/84.png') },
    { image: require('./../../images/client/85.png') },
    { image: require('./../../images/client/86.png') },
    { image: require('./../../images/client/87.png') },
    { image: require('./../../images/client/88.png') },
    { image: require('./../../images/client/89.png') },
    { image: require('./../../images/client/90.png') },
    { image: require('./../../images/client/91.png') },
    { image: require('./../../images/client/92.png') },
    { image: require('./../../images/client/93.png') },
    { image: require('./../../images/client/94.png') },
    { image: require('./../../images/client/95.png') },
    { image: require('./../../images/client/96.png') },
    { image: require('./../../images/client/97.png') },
    { image: require('./../../images/client/98.png') },
    { image: require('./../../images/client/99.png') },
    { image: require('./../../images/client/102.png') },
    { image: require('./../../images/client/103.png') },
    { image: require('./../../images/client/104.png') },
    { image: require('./../../images/client/105.png') },
    { image: require('./../../images/client/106.png') },
];
const brands1 = [
    { image: require('./../../images/client/107.png') },
    { image: require('./../../images/client/108.png') },
    { image: require('./../../images/client/109.png') },
    { image: require('./../../images/client/110.png') },
    { image: require('./../../images/client/111.png') },
    { image: require('./../../images/client/112.png') },
    { image: require('./../../images/client/113.png') },
    { image: require('./../../images/client/114.png') },
    { image: require('./../../images/client/115.png') },
    { image: require('./../../images/client/116.png') },
    { image: require('./../../images/client/117.png') },
    { image: require('./../../images/client/118.png') },
    { image: require('./../../images/client/119.png') },
    { image: require('./../../images/client/120.png') },
    { image: require('./../../images/client/121.png') },
    { image: require('./../../images/client/122.png') },
    { image: require('./../../images/client/123.png') },
    { image: require('./../../images/client/124.png') },
    { image: require('./../../images/client/125.png') },
    { image: require('./../../images/client/126.png') },
    { image: require('./../../images/client/127.png') },
    { image: require('./../../images/client/128.png') },
    { image: require('./../../images/client/129.png') },
    { image: require('./../../images/client/130.png') },
    { image: require('./../../images/client/131.png') },
    { image: require('./../../images/client/132.png') },
    { image: require('./../../images/client/133.png') },
];

function BrandOne({ className }) {
  return (
    <>
      {/* First Carousel */}
      <div className={`brand-area overflow-hidden ${className}`}>
        <div className="container th-container" style={{ background: "none" }}>
          <div className="css-carousel-wrapper">
            <div className="css-carousel-track">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div className="brand-box" key={index}>
                  <Link to="#">
                    <img
                      src={brand.image}
                      alt={`Brand ${index + 1}`}
                    />
                  </Link>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {brands.map((brand, index) => (
                <div className="brand-box" key={`dup-${index}`}>
                  <Link to="#">
                    <img
                      src={brand.image}
                      alt={`Brand ${index + 1}`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Carousel */}
      <div className={`brand-area overflow-hidden ${className}`}>
        <div className="container th-container" style={{ background: "none" }}>
          <div className="css-carousel-wrapper">
            <div className="css-carousel-track reverse-animation">
              {/* First set of brands1 */}
              {brands1.map((brand, index) => (
                <div className="brand-box" key={index}>
                  <Link to="#">
                    <img
                      src={brand.image}
                      alt={`Brand ${index + 28}`}
                    />
                  </Link>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {brands1.map((brand, index) => (
                <div className="brand-box" key={`dup1-${index}`}>
                  <Link to="#">
                    <img
                      src={brand.image}
                      alt={`Brand ${index + 28}`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .css-carousel-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
          margin-top: 50px;
        }
        
        .css-carousel-track {
          display: flex;
          animation: slide 60s linear infinite;
          width: max-content;
          gap: 10px; /* Add gap between logos */
        }
        
        .reverse-animation {
          animation: slideReverse 60s linear infinite;
        }
        
        .brand-box {
          flex: 0 0 auto;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 150px; /* Default for desktop */
        }
        
        .brand-box img {
          max-width: 100%;
          max-height: 80px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        
        .brand-box:hover img {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes slideReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        /* Pause animation on hover */
        .css-carousel-wrapper:hover .css-carousel-track,
        .css-carousel-wrapper:hover .reverse-animation {
          animation-play-state: paused;
        }
        
        /* Desktop (default - shows multiple logos) */
        @media (min-width: 1201px) {
          .brand-box {
            min-width: 150px;
          }
          .css-carousel-track {
            gap: 15px;
          }
        }
        
        /* Tablet (3 logos) */
        @media (max-width: 1200px) and (min-width: 769px) {
          .brand-box {
            min-width: 120px;
          }
          .css-carousel-track {
            gap: 12px;
          }
        }
        
        /* Mobile (2 logos) */
        @media (max-width: 768px) {
          .brand-box {
            min-width: 120px; /* Show 2 logos with proper spacing */
            padding: 10px;
          }
          .css-carousel-track {
            gap: 8px;
            animation-duration: 40s; /* Faster animation for mobile */
          }
          .reverse-animation {
            animation-duration: 40s;
          }
          .brand-box img {
            max-height: 50px;
          }
        }
        
        /* Small Mobile (2 logos with smaller size) */
        @media (max-width: 576px) {
          .brand-box {
            min-width: 120px; /* Ensures 2 logos fit */
            padding: 5px;
          }
          .css-carousel-track {
            gap: 6px;
            animation-duration: 30s; /* Even faster for small screens */
          }
          .reverse-animation {
            animation-duration: 30s;
          }
          .brand-box img {
            max-height: 40px;
          }
        }
        
        /* Extra Small Mobile */
        @media (max-width: 375px) {
          .brand-box {
            min-width: 100px; /* Adjust for very small screens */
          }
          .css-carousel-track {
            gap: 4px;
          }
        }
      `}</style>
    </>
  );
}

export default BrandOne;