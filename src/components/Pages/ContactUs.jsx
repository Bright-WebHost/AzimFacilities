import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';
import Header2 from '../Common/Header2';
import Select from "react-select";

const serviceOptions = [
    { value: "facilities Management ", label: "facilities Management " },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Limousine service ", label: "Limousine service " },
    { value: "Cleaning ", label: "Cleaning " },
    { value: "Landscaping", label: "Landscaping" },
    { value: "Event Management ", label: "Event Management " },
    { value: "Food Services", label: "Food Services" },
];

const customStyles = {
    option: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: isFocused ? "#ff7a00" : "white",
        color: isFocused ? "white" : "black",
        cursor: "pointer",
    }),
    control: (styles) => ({
        ...styles,
        // borderRadius: "5px",
        // borderColor: "#ccc",
        // padding: "4px"
    }),
};


var bnrimg = require('./../../images/azim/23.png');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    render() {
        const defaultProps = {
            center: {
              lat: 34.073280,
              lng: -118.251410
            },
            zoom: 12
        };
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Contact Us" pagename="Contact us" description=" We’re always here to assist you and provide answers to your questions." bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <form className="contact-form cons-contact-form bg-gray p-a30" method="post" action="#" >
                                            <div className="contact-one">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Form</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="row">
    {/* Name */}
    <div className="col-md-6">
        <div className="form-group">
            <input 
                name="username" 
                type="text" 
                required 
                className="form-control" 
                placeholder="Name" 
            />
        </div>
    </div>

    {/* Phone */}
    <div className="col-md-6">
        <div className="form-group">
            <input 
                name="phoneno" 
                type="text" 
                required 
                className="form-control" 
                placeholder="Phone No" 
            />
        </div>
    </div>
</div>

{/* Email row */}
<div className="row">
    <div className="col-md-12">
        <div className="form-group">
            <input 
                name="email" 
                type="email" 
                required 
                className="form-control" 
                placeholder="Email" 
            />
        </div>
    </div>
</div>

{/* Company Name + Services */}
<div className="row">
    {/* Company */}
    <div className="col-md-6">
        <div className="form-group">
            <input 
                name="company" 
                type="text" 
                required 
                className="form-control" 
                placeholder="Company Name" 
            />
        </div>
    </div>

    {/* Services Dropdown */}
    <div className="col-md-6">
        <div className="form-group">
            <Select
                options={serviceOptions}
                styles={customStyles}
                placeholder="Select Service"
            />
        </div>
        <style>{`.custom-select {
    position: relative;
    width: 100%;
}

.custom-select div {
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: white;
}

.custom-options {
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    background: white;
    z-index: 10;
    display: none;
}

.custom-options div {
    padding: 10px;
    cursor: pointer;
}

.custom-options div:hover {
    background: orange;
    color: white;
}
`}</style>
    </div>
</div>

{/* Message */}
<div className="form-group">
    <textarea
        name="message"
        rows={4}
        className="form-control"
        required
        placeholder="Message"
    />
</div>

                                                <div className="text-right">
                                                    <button name="submit" type="button" value="Submit" className="site-button btn-half"><span> submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="contact-info block-shadow bg-white bg-center p-a40" style={{ backgroundImage: 'url(images/background/bg-map.png)' }}>
                                            <div>
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Info</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Phone number</h5>
                                                        <p> <a href="tel:+97444802851">
                                                    + 974 4480 2851
                                                </a></p>
                                                        <p> <a href="tel:+97477047248">
                                                    + 974 7704 7248
                                                </a></p>
                                                    </div>
                                                </div>
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Email address</h5>
                                                        <p><a href="mailto:afms@azimgroup.qa">
    afms@azimgroup.qa
</a>
</p>
                                                    </div>
                                                </div>
                                                <div className="sx-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Address info</h5>
                                                        <p><a 
                                                    href="https://maps.google.com/?q=Azim Facilities Management & Services" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                >
                                                    NBK Building, #805, 8th Floor, Doha-Qatar
                                                </a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gmap-outline">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >
                            <AnyReactComponent lat={34.073280} lng={-118.251410} text={<i className="fa fa-map-marker" />}                                        />
                        </GoogleMapReact>                        
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3517147155994!2d51.5274698!3d25.279608399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5bf1c5b1b51%3A0x643fc6f5ecc3e715!2sAzim%20Facilities%20Management%20%26%20Services!5e1!3m2!1sen!2sin!4v1762862807058!5m2!1sen!2sin" width="100%" height="450"  style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <Footer />
            </>
        );
    };
};

export default ContactUs;