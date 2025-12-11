import React, { useEffect, lazy, Suspense, useRef, useState } from 'react';
import Header2 from '../Common/Header2';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Header4 from './../Common/Header4'; // if unused, remove
import About3 from './../Elements/About3'; // if unused, remove
import WhatWeDo3 from './../Elements/WhatWeDo3'; // if unused, remove
import Team1 from './../Elements/Team1'; // if unused, remove

import { NavLink } from 'react-router-dom';

// Lazy-load heavy/non-critical components
const Blog2 = lazy(() => import('../Elements/Blog2'));
const ClientsLogo1 = lazy(() => import('../Elements/ClientsLogo1'));
const Services3 = lazy(() => import('../Elements/Services3'));
const Statistics1 = lazy(() => import('../Elements/Statistics1'));

// Images: require/import once (outside component) so references are stable
const bnrimg = require('./../../images/azim/13.png');
const bgimg1 = require('./../../images/azim/14.png');
const bgimg2 = require('./../../images/azim/21.png');
const bgimg3 = require('./../../images/azim/ector.png');

/**
 * LazyBackground - wraps a block and sets background-image only when visible.
 * This prevents the browser from loading large background images until needed.
 */
function LazyBackground({ className = '', src, children, style = {}, ...rest }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setLoaded(true);
              io.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // preload a bit before visible
      );
      io.observe(el);
      return () => io.disconnect();
    } else {
      // Fallback for older browsers
      setLoaded(true);
    }
  }, [src]);

  const bgStyle = loaded && src ? { backgroundImage: `url(${src})` } : {};
  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, ...bgStyle }}
      {...rest}
    >
      {children}
    </div>
  );
}

const Home4 = (props) => {
  // Load external script only once and properly
  useEffect(() => {
    let mounted = true;
    const src = './assets/js/custom.js';
    // don't add twice
    if (!document.querySelector(`script[data-src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true; // don't block rendering
      script.setAttribute('data-src', src);
      script.addEventListener('load', () => {
        // optional: any init after script loaded
        // console.log('custom.js loaded');
      });
      script.addEventListener('error', (e) => {
        console.warn('Failed to load script', src, e);
      });
      document.body.appendChild(script);
      // do not remove the script node immediately — keep it
    }
    return () => { mounted = false; /* nothing to cleanup */ };
  }, []); // run once

  // small helper: avoid recreating inline style objects
  const sectionWrapperClass = `${props.bgcolor || ''} section-full mobile-page-padding p-t80 p-b50 bg-gray`;

  return (
    <>
      <Header2 />
      <div className="page-content">
        <Banner
          title="About Us"
          pagename="About"
          description="Empowering Growth, Uniting Excellence to Shape Tomorrow's Success"
          bgimage={bnrimg}
        />

        <div className={sectionWrapperClass}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="about-home-3 m-b30 bg-white">
                    <h3 className="m-t0 m-b20 sx-tilte">We are a Group of companies</h3>
                    <p>Empowering Growth, Uniting Excellence to Shape Tomorrow's Success</p>
                    <p >AZIM Group is a constellation of enterprises at the heart of Qatar's dynamic business landscape. With seven unique companies under our banner, we orchestrate services to deliver unmatched value across diverse industries</p>
                    <br />
                    <style>{`
                      .two-column-list {
                        columns: 2;
                        column-gap: 40px;
                        list-style-position: inside;
                      }
                        .hide-mobile {
                        display:none !important;
                        }
                    `}</style>
                    <div className="text-left">
                      <NavLink to="/about" className="site-button btn-half"><span>Read More</span></NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="video-section-full-v2">
                    {/* LazyBackground will delay loading bgimg1 until near viewport */}
                    <LazyBackground
                      className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30"
                      src={bgimg1}
                    >
                      <div className="overlay-main" />
                    </LazyBackground>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Non-critical sections are Suspense-wrapped so initial render is fast */}
        <Suspense fallback={<div style={{padding:40,textAlign:'center'}}>Loading articles...</div>}>
          <Blog2 />
        </Suspense>

        <Suspense fallback={<div style={{padding:30,textAlign:'center'}}>Loading clients...</div>}>
          <ClientsLogo1 />
        </Suspense>

        <Suspense fallback={<div style={{padding:30,textAlign:'center'}}>Loading services...</div>}>
          <Services3 />
        </Suspense>

        <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 ">
                  {/* lazy load this background */}
                  <LazyBackground
                    className="home-2-about bg-bottom-left bg-no-repeat bg-cover"
                    src={bgimg2}
                    style={{ minHeight: 280 }}
                  />
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12">
                  <div className="about-home-2">
                    <div className="text-left">
                      <NavLink to={"#"} className="site-button-link">CHAIRMAN</NavLink>
                    </div>
                    <br />
                    <h3 className="m-t0 sx-tilte">Mr.Ali Ahmed A.M Marafia</h3>
                    <p>On behalf of Azim Group, I extend my warmest welcome to you. Our journey has been guided by an unwavering commitment to excellence, a spirit of innovation, and a diverse portfolio of enterprises. At the heart of our success are our dedicated teams across these varied businesses — the true architects of our achievements. I remain deeply grateful for their dedication and contributions.</p>
                    <p>We are steadfast in our commitment to supporting their growth and professional development. As we navigate an ever-evolving business landscape, our shared vision remains clear: not merely to adapt, but to thrive. Thank you for being an essential part of Azim Group’s remarkable story.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-12">
                  <div className="about-home-2" style={{ position: 'relative', padding: '80px 40px' }}>
                    <div className="text-left">
                      <NavLink to={"#"} className="site-button-link">MANAGING DIRECTOR</NavLink>
                    </div>
                    <br />
                    <h3 className="m-t0 sx-tilte">Mr. Mohammed Shameer</h3>
                    <p>We are proud to unite a diverse group of companies, each bringing its own strengths and expertise, all driven by a shared commitment to excellence. Based in the heart of Doha, we remain dedicated to innovation and continuous growth, ensuring we not only meet your expectations but consistently exceed them.</p>
                    <p>Together, we will push the boundaries of success and set new standards of excellence—here in Qatar and across the globe. Thank you for being an essential part of this journey.</p>
                  </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-12 ">
                  <LazyBackground
                    className="home-2-about bg-bottom-left bg-no-repeat bg-cover"
                    src={bgimg3}
                    style={{ minHeight: 300 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={<div style={{padding:40,textAlign:'center'}}>Loading stats...</div>}>
          <Statistics1 />
        </Suspense>

      </div>

      <Footer />
    </>
  );
};

export default Home4;
