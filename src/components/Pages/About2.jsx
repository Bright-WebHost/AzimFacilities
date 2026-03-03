import React, { useEffect, lazy, Suspense, useRef, useState } from 'react';
import Header2 from '../Common/Header2';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Lazy-load heavy/non-critical components
const Blog2 = lazy(() => import('../Elements/Blog2'));
const ClientsLogo1 = lazy(() => import('../Elements/ClientsLogo1'));
const Services3 = lazy(() => import('../Elements/Services3'));
const Statistics1 = lazy(() => import('../Elements/Statistics1'));

const bnrimg = require('./../../images/azim/13.webp');
const bgimg1 = require('./../../images/azim/14.webp');
const bgimg2 = require('./../../images/azim/21.webp');
const bgimg3 = require('./../../images/azim/ector.webp');

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
        { rootMargin: '200px' }
      );
      io.observe(el);
      return () => io.disconnect();
    } else {
      setLoaded(true);
    }
  }, [src]);

  const bgStyle = loaded && src ? { backgroundImage: `url(${src})` } : {};
  return (
    <div ref={ref} className={className} style={{ ...style, ...bgStyle }} {...rest}>
      {children}
    </div>
  );
}

const Home4 = (props) => {
  useEffect(() => {
    const src = './assets/js/custom.js';
    if (!document.querySelector(`script[data-src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.setAttribute('data-src', src);
      document.body.appendChild(script);
    }
  }, []);

  const sectionWrapperClass = `${props.bgcolor || ''} section-full mobile-page-padding p-t80 p-b50 bg-gray`;

  return (
    <>
      <Helmet>
        <title>About Us | Azim Facilities Management Company in Qatar</title>
        <meta name="description" content="Learn about Azim Group — Qatar's leading ISO-certified facilities management company. 12+ years experience, 700+ professionals, 100+ clients across Doha. ISO 9001, 14001 & 45001 certified FM company in Qatar." />
        <link rel="canonical" href="https://www.azimgroup.qa/about" />
        <meta property="og:title" content="About Azim Group | Facilities Management Company Qatar" />
        <meta property="og:description" content="Azim Group is Qatar's trusted facilities management company. 7 companies, 12+ years, ISO certified, serving Doha and Qatar since 2012." />
        <meta property="og:url" content="https://www.azimgroup.qa/about" />
      </Helmet>

      <Header2 />
      <div className="page-content">

        <Banner
          title="About Azim Group Qatar"
          pagename="About"
          description="Qatar's Leading Facilities Management & Hospitality Services Group — Empowering Growth, Uniting Excellence"
          bgimage={bnrimg}
        />

        {/* H1 - invisible to users, fully read by Google */}
        <h1 style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap'
        }}>
          About Azim Group — Leading Facilities Management Company in Qatar
        </h1>

        {/* ABOUT SECTION - SAME DESIGN */}
        <div className={sectionWrapperClass}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="about-home-3 m-b30 bg-white">

                    <h2 className="m-t0 m-b20 sx-tilte" style={{ fontSize: '22px' }}>
                      Azim Group — A Leading Facilities Management Company in Qatar
                    </h2>

                    <p>
                      <strong>Empowering Growth, Uniting Excellence</strong> — Azim Group is Qatar's premier group of companies specializing in <strong>facilities management, cleaning services, building maintenance, and hospitality staffing</strong> across Doha.
                    </p>

                    <p>
                      With seven unique companies under our banner, Azim Group delivers <strong>integrated facilities management solutions</strong> across Qatar's commercial, hospitality, real estate, government, and education sectors. As an <strong>ISO-certified facilities management company in Qatar</strong>, we combine over 12 years of local expertise with international standards — serving 100+ clients with a workforce of 700+ dedicated professionals across Doha.
                    </p>

                    <style>{`
                      .two-column-list {
                        columns: 2;
                        column-gap: 40px;
                        list-style-position: inside;
                      }
                      .hide-mobile {
                        display: none !important;
                      }
                    `}</style>

                    <div className="text-left">
                      <NavLink to="/facilities-management" className="site-button btn-half">
                        <span>Read More</span>
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="video-section-full-v2">
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

        {/* BLOG / ARTICLES */}
        <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>}>
          <Blog2 />
        </Suspense>

        {/* CLIENTS */}
        <Suspense fallback={<div style={{ padding: 30, textAlign: 'center' }}>Loading...</div>}>
          <ClientsLogo1 />
        </Suspense>

        {/* SERVICES */}
        <Suspense fallback={<div style={{ padding: 30, textAlign: 'center' }}>Loading...</div>}>
          <Services3 />
        </Suspense>

        {/* CHAIRMAN MESSAGE - SAME DESIGN */}
        <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12">
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
                    <h3 className="m-t0 sx-tilte">Mr. Ali Ahmed A.M Marafia</h3>
                    <p>
                      On behalf of Azim Group — Qatar's trusted <strong>facilities management and hospitality services company</strong> — I extend my warmest welcome. Our journey has been guided by an unwavering commitment to excellence, a spirit of innovation, and a diverse portfolio of enterprises serving Doha and Qatar's growing sectors.
                    </p>
                    <p>
                      At the heart of our success are our dedicated teams — the true architects of our achievements in <strong>facilities management, professional cleaning, building maintenance, and hospitality staffing across Qatar</strong>. We remain deeply grateful for their dedication and contributions to making Azim Group Qatar's preferred FM company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MD MESSAGE - SAME DESIGN */}
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
                    <p>
                      We are proud to unite a diverse group of companies delivering <strong>professional facilities management services across Qatar</strong> — each bringing its own strengths and expertise, all driven by a shared commitment to excellence. Based in the heart of Doha, we remain dedicated to innovation and continuous growth in <strong>FM services, cleaning solutions, and hospitality staffing throughout Qatar</strong>.
                    </p>
                    <p>
                      Together, we will push the boundaries of success and set new standards of excellence in <strong>facilities management across Qatar and Doha</strong> — and beyond. Thank you for being an essential part of this journey.
                    </p>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12">
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

        {/* STATS */}
        <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>}>
          <Statistics1 />
        </Suspense>

      </div>
      <Footer />
    </>
  );
};

export default Home4;