import React, { Component } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import CourseFilter from './components/CourseFilter';
import TestimonialSlider from './components/TestimonialSlider';
import TeamSlider from './components/TeamSlider';
import HelpArea from './components/HelpArea';
import CampusTour from './components/CampusTour';
import Footer from './components/Footer';

export default class HomeOne extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-wrapper">
                    {/* Header */}
                    <Header />

                    {/* Hero Slider */}
                    <HeroSlider />

                    {/* Icon Box */}
                    <IconBox />

                    {/* About Area */}
                    <AboutUs />

                    {/* Course Filter */}
                    <CourseFilter />

                    {/* Testimonial Slider */}
                    <TestimonialSlider />

                    {/* Team Slider */}
                    <TeamSlider />

                    {/* Help Area */}
                    <HelpArea />

                    {/* Campus Tour */}
                    <CampusTour />

                    {/* Footer */}
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
