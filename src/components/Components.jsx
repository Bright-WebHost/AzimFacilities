import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './Pages/Home1';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';
import Home6 from './Pages/Home6';

import About1 from './Pages/About1';
import About2 from './Pages/About2';
import Home7 from './Pages/Home7';

import Services1 from './Pages/Services1';
import Services2 from './Pages/Services2';
import ServiceDetail from './Pages/ServiceDetail';

import Team1 from './Pages/Team1';
import Team2 from './Pages/Team2';
import TeamDetail from './Pages/TeamDetail';

import OurHistory from './Pages/OurHistory';
import FontIcons from './Pages/FontIcons';
import Error from './Pages/Error';

import ProjectGrid3 from './Pages/ProjectGrid3';
import ProjectGridNoGap3 from './Pages/ProjectGridNoGap3';
import ProjectGrid4 from './Pages/ProjectGrid4';
import ProjectGridNoGap4 from './Pages/ProjectGridNoGap4';
import ProjectGrid5 from './Pages/ProjectGrid5';
import ProjectGridNoGap5 from './Pages/ProjectGridNoGap5';

import ProjectMasonary3 from './Pages/ProjectMasonary3';
import ProjectMasonaryNoGap3 from './Pages/ProjectMasonaryNoGap3';
import ProjectMasonary4 from './Pages/ProjectMasonary4';
import ProjectMasonaryNoGap4 from './Pages/ProjectMasonaryNoGap4';
import ProjectMasonary5 from './Pages/ProjectMasonary5';
import ProjectMasonaryNoGap5 from './Pages/ProjectMasonaryNoGap5';

import ProjectCorousel from './Pages/ProjectCorousel';
import ProjectDetail1 from './Pages/ProjectDetail1';
import ProjectDetail2 from './Pages/ProjectDetail2';

import BlogGrid from './Pages/BlogGrid';
import BlogListing from './Pages/BlogListing';
import BlogMasonary from './Pages/BlogMasonary';
import BlogSingle from './Pages/BlogSingle';
import PostRightSidebar from './Pages/PostRightSidebar';

import ShopGrid from './Pages/ShopGrid';
import ShopList from './Pages/ShopList';
import ShopDetail from './Pages/ShopDetail';
import ShopAccount from './Pages/ShopAccount';
import ShopCart from './Pages/ShopCart';
import ShopCheckout from './Pages/ShopCheckout';

import Faq from './Pages/Faq';
import ContactUs from './Pages/ContactUs';
import ScrollToTop from './Common/ScrollToTop';
import Government from './Pages/Government';
import Residential from './Pages/Residential';
import RealEstate from './Pages/RealEstate';
import Education from './Pages/Education';
import Careers from './Pages/Careers';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/AzimFacilities/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            {/* <Route   exact path='/' element={<Home1/>} /> */}
                            <Route   exact path='' element={<Home7/>} />
                            <Route path='/home-2' element={<Home2/>} />
                            <Route path='/home-3' element={<Home3/>} />
                            <Route path='/home-4' element={<Home4/>} />
                            <Route path='/limousine' element={<Home5/>} />
                            <Route path='/home-6' element={<Home6/>} />

                            <Route path='/events' element={<About1/>} />
                            <Route path='/about' element={<About2/>} />

                            <Route path='/services' element={<Services1/>} />
                            <Route path='/services-2' element={<Services2/>} />
                            <Route path='/services-detail' element={<ServiceDetail/>} />

                            <Route path='/team-1' element={<Team1/>} />
                            <Route path='/team-2' element={<Team2/>} />
                            <Route path='/team-single' element={<TeamDetail/>} />

                            <Route path='/our-history' element={<OurHistory/>} />
                            <Route path='/icon-font' element={<FontIcons/>} />
                            <Route path='/restaurent' element={<Error/>} />

                            <Route path='/project-grid-3-columns' element={<ProjectGrid3/>} />
                            <Route path='/project-grid-3-columns-no-gap' element={<ProjectGridNoGap3/>} />
                            <Route path='/project-grid-4-columns' element={<ProjectGrid4/>} />
                            <Route path='/project-grid-4-columns-no-gap' element={<ProjectGridNoGap4/>} />
                            <Route path='/project-grid-5-columns' element={<ProjectGrid5/>} />
                            <Route path='/project-grid-5-columns-no-gap' element={<ProjectGridNoGap5/>} />

                            <Route path='/project-masonry-3-columns' element={<ProjectMasonary3/>} />
                            <Route path='/project-masonry-3-columns-no-gap' element={<ProjectMasonaryNoGap3/>} />
                            <Route path='/project-masonry-4-columns' element={<ProjectMasonary4/>} />
                            <Route path='/project-masonry-4-columns-no-gap' element={<ProjectMasonaryNoGap4/>} />
                            <Route path='/project-masonry-5-columns' element={<ProjectMasonary5/>} />
                            <Route path='/project-masonry-5-columns-no-gap' element={<ProjectMasonaryNoGap5/>} />

                            <Route path='/project-carousel' element={<ProjectCorousel/>} />
                            <Route path='/facilities-management' element={<ProjectDetail1/>} />
                            <Route path='/project-detail2' element={<ProjectDetail2/>} />

                            <Route path='/blog-grid' element={<BlogGrid/>} />
                            <Route path='/blog-listing' element={<BlogListing/>} />
                            <Route path='/blog-masonry' element={<BlogMasonary/>} />
                            <Route path='/cleaning-and-hospitality' element={<BlogSingle/>} />
                            <Route path='/post-right-sidebar' element={<PostRightSidebar/>} />

                            <Route path='/food-trading' element={<ShopGrid/>} />
                            <Route path='/sector' element={<ShopList/>} />
                            <Route path='/shop-detail' element={<ShopDetail/>} />
                            <Route path='/shop-account' element={<ShopAccount/>} />
                            <Route path='/shop-cart' element={<ShopCart/>} />
                            <Route path='/shop-checkout' element={<ShopCheckout/>} />

                            <Route path='/faq' element={<Faq/>} />
                            <Route path='/contact-us' element={<ContactUs/>} />

                            <Route path='/residential-sector' element={<Residential/>} />
                            <Route path='/government-sector' element={<Government/>} />
                            <Route path='/real-estate-sector' element={<RealEstate/>} />
                            <Route path='/education-sector' element={<Education/>} />
                            <Route path='/career' element={<Careers/>} />
                            
                            <Route element={<Error/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;