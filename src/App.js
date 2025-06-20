import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from './HomeOne';
import About from './pages/about/About';
import CourseGrid from './pages/courses/CourseGrid';
import CourseList from './pages/courses/CourseList';
import CourseDetails from './pages/courses/CourseDetails';
import Instructor from './pages/instructor/Instructors';
import InstructorDetails from './pages/instructor/InstructorDetails';
import Gallery from './pages/gallery/Gallery';
import Events from './pages/events/Events';
import EventDetails from './pages/events/EventsDetails';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import PageNotFound from './pages/404/PageNotFound';
import ComingSoon from './pages/comingsoon/ComingSoon';
import BlogClassic from './pages/blog/BlogClassic';
import BlogGrid from './pages/blog/BlogGrid';
import BlogDetails from './pages/blog/BlogDetails';
import Product from './pages/shop/Products';
import ProductDetails from './pages/shop/ProductDetails';
import Cart from './pages/shop/Cart';
import MissionVision from './pages/mission-vision/MissionVision';
import PatronMessage from './pages/patron-message/PatronMessage';
import PrincipalMessage from './pages/principal-message/PrincipalMessage';
import Facilities from './pages/facilities/Facilities';
import AdmissionModal from './components/AdmissionModal';

function App() {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        // Show modal right away, no delay
        setShowModal(true);
    }, []);

    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <AdmissionModal show={showModal} onClose={() => setShowModal(false)} />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={HomeOne} />
                <Route path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route path={`${process.env.PUBLIC_URL + "/mission-vision"}`} component={MissionVision} />
                <Route path={`${process.env.PUBLIC_URL + "/patron-message"}`} component={PatronMessage} />
                <Route path={`${process.env.PUBLIC_URL + "/principal-message"}`} component={PrincipalMessage} />
                <Route path={`${process.env.PUBLIC_URL + "/facilities"}`} component={Facilities} />
                <Route path={`${process.env.PUBLIC_URL + "/course-grid"}`} component={CourseGrid} />
                <Route path={`${process.env.PUBLIC_URL + "/course-list"}`} component={CourseList} />
                <Route path={`${process.env.PUBLIC_URL + "/course-details"}`} component={CourseDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/instructor"}`} component={Instructor} />
                <Route path={`${process.env.PUBLIC_URL + "/instructor-details"}`} component={InstructorDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} component={Gallery} />
                <Route path={`${process.env.PUBLIC_URL + "/events"}`} component={Events} />
                <Route path={`${process.env.PUBLIC_URL + "/event-details"}`} component={EventDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
                <Route path={`${process.env.PUBLIC_URL + "/registration"}`} component={Register} />
                <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                <Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
                <Route path={`${process.env.PUBLIC_URL + "/404"}`} component={PageNotFound} />
                <Route path={`${process.env.PUBLIC_URL + "/coming-soon"}`} component={ComingSoon} />
                <Route path={`${process.env.PUBLIC_URL + "/blog-classic"}`} component={BlogClassic} />
                <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} component={BlogGrid} />
                <Route path={`${process.env.PUBLIC_URL + "/blog-details"}`} component={BlogDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/products"}`} component={Product} />
                <Route path={`${process.env.PUBLIC_URL + "/product-details"}`} component={ProductDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/cart"}`} component={Cart} />
            </Switch>
        </Router>
    )
}

export default App;