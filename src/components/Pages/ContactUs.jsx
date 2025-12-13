import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';
import Header2 from '../Common/Header2';
import Select from "react-select";
import emailjs from 'emailjs-com'; // Import EmailJS

const serviceOptions = [
    { value: "facilities Management ", label: "facilities Management " },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Limousine service ", label: "Limousine service " },
    { value: "Cleaning ", label: "Cleaning " },
    { value: "Landscaping", label: "Landscaping" },
    { value: "Event Management ", label: "Event Management " },
    { value: "Food Services", label: "Food Services" },
];

// Add your EmailJS credentials here
const EMAILJS_SERVICE_ID = 'service_88foj3n'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_1xem70f'; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'EbiM5Zeg16T7cd_Rx'; // Replace with your Public Key

const customStyles = {
    option: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: isFocused ? "#ff7a00" : "white",
        color: isFocused ? "white" : "black",
        cursor: "pointer",
    }),
    control: (styles) => ({
        ...styles,
    }),
};

var bnrimg = require('./../../images/azim/23.webp');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        
        // Initialize EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        // Get the selected service value
        const form = this.formRef.current;
        const serviceSelect = form.querySelector('.service-select');
        let selectedService = '';
        
        if (serviceSelect) {
            const selectComponent = serviceSelect.__reactInternalInstance$;
            if (selectComponent && selectComponent.memoizedProps) {
                selectedService = selectComponent.memoizedProps.value ? 
                    selectComponent.memoizedProps.value.label : '';
            }
        }

        // Prepare form data
        const formData = {
            name: form.querySelector('input[name="username"]').value,
            phone: form.querySelector('input[name="phoneno"]').value,
            email: form.querySelector('input[name="email"]').value,
            company: form.querySelector('input[name="company"]').value,
            service: selectedService,
            message: form.querySelector('textarea[name="message"]').value
        };

        // Send email using EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                form.reset();
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again.');
            });
    };

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
                    <Banner title="Contact Us" pagename="Contact us" description=" We're always here to assist you and provide answers to your questions." bgimage={bnrimg}/>
                    
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <form 
                                            ref={this.formRef}
                                            className="contact-form cons-contact-form bg-gray p-a30" 
                                            onSubmit={this.handleSubmit}
                                        >
                                            <div className="contact-one">
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Form</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="row">
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

                                                <div className="row">
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
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Select
                                                                options={serviceOptions}
                                                                styles={customStyles}
                                                                placeholder="Select Service"
                                                                className="service-select"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

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
                                                    <button 
                                                        name="submit" 
                                                        type="submit" 
                                                        value="Submit" 
                                                        className="site-button btn-half"
                                                    >
                                                        <span>Submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        {/* Your existing contact info section remains unchanged */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Your existing map sections remain unchanged */}
                </div>
                <Footer />
            </>
        );
    }
}

export default ContactUs;