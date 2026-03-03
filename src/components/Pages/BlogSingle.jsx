import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Header2 from '../Common/Header2';
import { Helmet } from 'react-helmet-async';

var bnrimg = require('./../../images/azim/23.webp');

class BlogSingle extends React.Component {
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
                    <title>Cleaning & Hospitality Services in Qatar | Golden Vision | Azim Group</title>
                    <meta name="description" content="Golden Vision by Azim Group offers professional cleaning and hospitality services in Qatar — commercial cleaning, housekeeping for hotels and residences across Doha." />
                    <link rel="canonical" href="https://www.azimgroup.qa/cleaning-and-hospitality" />
                    <meta property="og:title" content="Professional Cleaning & Hospitality Services Qatar | Golden Vision Azim Group" />
                    <meta property="og:description" content="Expert cleaning and hospitality services in Qatar — exterior building cleaning, deep interior cleaning, hotel housekeeping and hygiene services across Doha." />
                    <meta property="og:url" content="https://www.azimgroup.qa/cleaning-and-hospitality" />
                </Helmet>

                <Header2 />
                <div className="page-content">
                    <h1 className="sr-only">Professional Cleaning and Hospitality Services in Qatar</h1>

                    <Banner
                        title="Golden Vision Cleaning and Hospitality Services"
                        pagename="Cleaning & Hospitality Services Qatar"
                        description="Qatar's trusted professional cleaning and hospitality services — where cleanliness meets a warm welcome."
                        bgimage={bnrimg}
                    />

                    <div className="section-full p-t80 p-b50 inner-page-padding">
                        <div className="container">
                            <div className="blog-single-space max-w900 ml-auto mr-auto">
                                <div className="blog-post blog-detail text-black">

                                    {/* MAIN IMAGE */}
                                    <div className="sx-post-media">
                                        <div className="portfolio-item">
                                            <img
                                                className="img-responsive"
                                                src={require('./../../images/azim/46.webp')}
                                                alt="Professional cleaning and hospitality services in Qatar by Golden Vision Azim Group Doha"
                                            />
                                        </div>
                                    </div>

                                    {/* PAGE TITLE - only H2 on this page */}
                                    <div className="sx-post-title m-t20">
                                        <h2 className="post-title">Golden Vision Cleaning and Hospitality Services Qatar</h2>
                                    </div>

                                    {/* INTRO TEXT */}
                                    <div className="sx-post-text">
                                        <p>
                                            Golden Vision Hospitality and Cleaning Services is a premier cleaning and hospitality services company in Qatar, operating as a division of Azim Facilities Management and Services. We specialize in meticulous cleaning of building exteriors and interiors across Doha, delivering unparalleled cleanliness and hygiene standards that Qatar's top businesses trust.
                                        </p>
                                        <p>
                                            As one of Qatar's leading professional cleaning services providers, Golden Vision combines expert hospitality management with world-class cleaning solutions — serving commercial properties, luxury hotels, residential complexes, and government facilities throughout Doha and Qatar.
                                        </p>
                                        <p>
                                            Our housekeeping management services in Qatar are trusted by 5-star hotels and premium residences across Doha, delivering the highest standards of cleanliness, hygiene, and guest comfort. As your Qatar hospitality and housekeeping service provider, we are committed to excellence in every project.
                                        </p>

                                        {/* KEY STATS — p tags not h3 */}
                                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '40px'}}>
                                            {[
                                                {num: '12+', label: 'Years Serving Qatar'},
                                                {num: '100+', label: 'Satisfied Clients'},
                                                {num: '700+', label: 'Cleaning Professionals'},
                                            ].map((s, i) => (
                                                <div key={i} style={{backgroundColor: '#E0892E', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
                                                    <p style={{fontSize: '28px', margin: '0', color: 'white', fontWeight: 'bold'}}>{s.num}</p>
                                                    <p style={{margin: '5px 0 0', color: 'white', fontSize: '13px'}}>{s.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SERVICES SECTION — original comment layout preserved */}
                                    <div className="clear" id="comment-list">
                                        <div className="comments-area" id="comments">
                                            <h2 className="comments-title">
                                                Our Professional Cleaning & Hospitality Services in Qatar
                                            </h2>
                                            <p style={{marginBottom: '25px'}}>
                                                As a trusted commercial cleaning services provider in Doha, Golden Vision specializes in:
                                            </p>

                                            <div className="comments-outer p-tb30">
                                                <ol className="comment-list">
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-author vcard">
                                                                <img className="avatar photo" src={require('./../../images/azim/47.webp')} alt="Exterior building cleaning services Qatar Doha" />
                                                                <cite className="fn">Exterior Building Cleaning Services Qatar</cite>
                                                                <span className="says">says:</span>
                                                            </div>
                                                            <p>
                                                                Professional commercial cleaning services for building exteriors in Qatar — removing dirt, grime, and environmental pollutants from facades, glass, and surfaces. Our exterior cleaning enhances your building's appearance and protects its structural integrity across Doha. We use industry-approved equipment and eco-friendly cleaning solutions suited to Qatar's environment.
                                                            </p>
                                                        </div>

                                                        <ol className="children">
                                                            <li className="comment odd parent">
                                                                <div className="comment-body">
                                                                    <div className="comment-author vcard">
                                                                        <img className="avatar photo" src={require('./../../images/azim/48.webp')} alt="Deep interior cleaning services Doha Qatar" />
                                                                        <cite className="fn">Deep Interior Cleaning Services Doha</cite>
                                                                        <span className="says">says:</span>
                                                                    </div>
                                                                    <p>
                                                                        Comprehensive deep interior cleaning services in Qatar including scrubbing, sanitizing, and thorough decluttering. Our cleaning teams ensure complete removal of dirt, dust, allergens, and grime — leaving every space spotless and hygienic. Serving offices, commercial spaces, and residential properties across Doha with the highest standards of maintenance and cleaning services.
                                                                    </p>
                                                                </div>

                                                                <ol className="children">
                                                                    <li className="comment odd parent">
                                                                        <div className="comment-body">
                                                                            <div className="comment-author vcard">
                                                                                <img className="avatar photo" src={require('./../../images/azim/49.webp')} alt="Professional housekeeping services for star hotels Qatar Doha" />
                                                                                <cite className="fn">Professional Housekeeping Services for Star Hotels Qatar</cite>
                                                                                <span className="says">says:</span>
                                                                            </div>
                                                                            <p>
                                                                                Specialized housekeeping management solutions for luxury hotels, star-rated properties, and premium residences across Doha, Qatar. Golden Vision delivers tailored housekeeping services ensuring exceptional cleanliness, outstanding guest satisfaction, and superior resident comfort — meeting international hospitality standards demanded by Qatar's premium hotel and hospital sector.
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ADDITIONAL SERVICES GRID — p tags not h3 */}
                                    <div style={{marginTop: '40px'}}>
                                        <h2 style={{fontSize: '22px', marginBottom: '20px'}}>
                                            Complete Cleaning & Hospitality Solutions in Doha, Qatar
                                        </h2>
                                        <div className="row">
                                            {[
                                                {title: 'Office Cleaning Qatar', desc: 'Daily, weekly and monthly professional office cleaning services across Doha keeping your workspace clean and productive.'},
                                                {title: 'Commercial Cleaning Doha', desc: 'Comprehensive commercial cleaning for malls, retail spaces, restaurants and business facilities throughout Qatar.'},
                                                {title: 'Post-Construction Cleaning Qatar', desc: 'Thorough post-construction cleaning preparing your newly built or renovated facility for immediate use across Qatar.'},
                                                {title: 'Hospitality Staff Supply Qatar', desc: 'Trained hotel butlers, waiters, bartenders and hospitality staff for hotels and events across Doha.'},
                                                {title: 'Sanitization Services Qatar', desc: 'Professional sanitization and disinfection services for commercial and residential properties across Qatar.'},
                                                {title: 'Hotel Housekeeping Qatar', desc: 'Full housekeeping management for 3, 4 and 5-star hotels across Doha meeting international standards.'},
                                            ].map((s, i) => (
                                                <div className="col-md-4 m-b20" key={i}>
                                                    <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #E0892E', height: '100%'}}>
                                                        <p style={{fontSize: '15px', marginBottom: '8px', color: '#333', fontWeight: 'bold'}}>{s.title}</p>
                                                        <p style={{fontSize: '13px', margin: 0}}>{s.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CALL TO ACTION */}
                                    <div style={{marginTop: '40px', backgroundColor: '#E0892E', padding: '35px', borderRadius: '8px', textAlign: 'center'}}>
                                        <p style={{color: 'white', fontSize: '22px', fontWeight: 'bold', marginBottom: '10px'}}>
                                            Need Professional Cleaning Services in Qatar?
                                        </p>
                                        <p style={{color: 'white', marginBottom: '20px'}}>
                                            Contact Golden Vision by Azim Group for the best cleaning and hospitality services in Doha. Get a free quote today.
                                        </p>
                                        <NavLink to="/contact-us" className="site-button" style={{backgroundColor: 'white', color: '#E0892E', marginRight: '15px'}}>
                                            Get a Free Quote
                                        </NavLink>
                                        <a href="tel:+97444802851" className="site-button-secondry" style={{borderColor: 'white', color: 'white'}}>
                                            Call: +974 4480 2851
                                        </a>
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

export default BlogSingle;