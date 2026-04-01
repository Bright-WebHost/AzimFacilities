import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Integrated Expertise',
        flaticon: 'flaticon-sketch',
        description: 'Azim Group offers a unique edge with its diverse subsidiaries, delivering fully integrated, cross-sector solutions for seamless coordination and outstanding results.',
    },
    {
        count: '02',
        title: 'Innovation at the Core',
        flaticon: 'flaticon-skyline',
        description: 'We embrace innovation at every level, adopting modern technologies and progressive approaches to remain at the forefront of industry trends and standards.',
    },
    {
        count: '03',
        title: 'Proven Track Record',
        flaticon: 'flaticon-contract',
        description: 'Our long history of successful ventures speaks for itself. Each subsidiary within Azim Group consistently demonstrates excellence, reliability, and leadership in its respective industry.',
    },
    {
        count: '04',
        title: 'Customer-Centric Focus',
        flaticon: 'flaticon-table-3',
        description: 'At Azim Group, customer satisfaction is our top priority. We customize our services to meet the unique needs of each client, building strong, trusted relationships that last for years.',
    },
    {
        count: '05',
        title: 'Versatility Across Industries',
        flaticon: 'flaticon-building-1',
        description: 'Azim Group excels across diverse sectors, including facility management, limousine and event services, food trading, auto electricals, restaurants, and hospitality solutions.',
    },
    {
        count: '06',
        title: 'Comprehensive Solutions',
        flaticon: 'flaticon-architect',
        description: 'As a one-stop solution provider, Azim Group enables clients to access an extensive range of services, meeting diverse business requirements under one roof.',
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services1 extends React.Component {
    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80  p-b50 bg-gray">
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one ">Why Choose Us</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
  {services.map((item, index) => (
    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
      <div className="sx-icon-box-wraper icon-count-2-outer h-100">
        <div className="icon-count-2 bg-white h-100 d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <span className="icon-count-number">{item.count}</span>
            <div className="icon-xl inline-icon m-b5 scale-in-center ms-3">
              <span className="icon-cell"><i className={item.flaticon} /></span>
            </div>
          </div>
          <div className="icon-content flex-grow-1 d-flex flex-column">
            <h4 className="sx-tilte">{item.title}</h4>
            <p className="flex-grow-1">{item.description}</p>
            <div className="text-left mt-auto">
              {/* <NavLink to={"/services-detail"} className="site-button-link">Read More</NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Why Us</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Services1;