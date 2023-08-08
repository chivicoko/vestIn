import React, { useEffect, useState } from 'react'
// import Button from './styles/Button';
import group10 from '../assets/Group-10.png';
import group11 from '../assets/Group-11.png';
import ReactPlayer from 'react-player';
import ultrexVid from '../assets/vestVid.mp4';
import EthImg from '../assets/Ethereum-removebg.png';
import LiteImg from '../assets/litecoin.png';
import TetherImg from '../assets/Tether.png';
import USDCoinImg from '../assets/USD-coin.png';
import BitcoinImg from '../assets/Bitcoin-removebg.png';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Home = () => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])
    
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
        setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;

    // // date - days of the week ------------
    // const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // const today = new Date();
    // let day = weekdays[today.getDay()];
    // for (let aDay = 0; aDay < weekdays.length; aDay++) {
    //     const singleDay = weekdays[aDay];
    //     if (singleDay !== 'Saturday' && singleDay !== 'Sunday') {
    //         // console.log(singleDay);
    //     } else {
    //         // console.log(`This is weekend!!! --(${singleDay})`);
    //     }
    // }
    // // -------------------

  return (
        <>
        

    <section className="hero-area">
        <div className="container">
            <div className="caption-content text-center">
                <h4>Start learning from home</h4>
                <h2>Connect With Our Expert And Start Learning Today</h2>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                <ul>
                    <li><a href="#">Find courses</a></li>
                    <li><a className="btn-bg" href="#">Start free trial</a></li>
                </ul>
            </div>
        </div>
    </section>
    
    <section className="category-area">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 offset-lg-3">
                    <div className="sec-heading text-center">
                        <h4>categories</h4>
                        <h2>Popular Categories</h2>
                    </div>
                </div>

            </div>
            <div className="row">

                <div className="col-md-3">
                    <div className="category-single text-center">
                        <a href="#"><img src="assets/images/cat-1.jpg" className="img-fluid" alt="image" /></a>
                        <h4><a href="#">Development</a></h4>
                        <p>6 Courses</p>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="category-single text-center">
                        <div className="course-category-img">
                            <a href="#"><img src="assets/images/cat-3.jpg" className="img-fluid" alt="image" /></a>
                        </div>
                        <div className="category-cont text-center">
                            <h4><a href="#">Business</a></h4>
                            <p>8 Courses</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="category-single text-center">
                        <div className="course-category-img">
                            <a href="#"><img src="assets/images/cat-5.jpg" className="img-fluid" alt="image" /></a>
                        </div>
                        <div className="category-cont text-center">
                            <h4><a href="#">Heath & Fitness</a></h4>
                            <p>6 Courses</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="category-single text-center">
                        <div className="course-category-img">
                            <a href="#"><img src="assets/images/cat-4.jpg" className="img-fluid" alt="image" /></a>
                        </div>
                        <div className="category-cont text-center">
                            <h4><a href="#">Web Design</a></h4>
                            <p>7 Courses</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-12 btn-default text-center">
                    <a href="#">all categories</a>
                </div>
            </div>
        </div>
    </section>
    
    <section className="course-area bg-gray">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 offset-lg-2">
                    <div className="sec-heading text-center">
                        <h4>courses</h4>
                        <h2>Explore Popular Courses</h2>
                    </div>
                </div>

            </div>
            <div className="row">

                <div className="col-lg-4 col-md-6">
                    <div className="course-card">
                        <div className="course-thumbnail">
                            <a href="#">
                                <img src="assets/images/course-3.jpg" className="img-fluid" alt="image" />
                            </a>
                        </div>
                        <div className="course-content">
                            <span className="course-price">$15.00</span>
                            <h3 className="course-title">
                                <a href="#">Nutrition: Build Your Perfect Diet & Meal Plan</a>
                            </h3>
                            <div className="course-rating">
                                <span className="star-rating-group">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span className="course-rating-count">(1 Review)</span>
                            </div>
                            <div className="course-content-footer">
                                <ul>
                                    <li className="course-duration"><i className="fa fa-clock-o"></i> 04h </li>
                                    <li className="course-user"><i className="fa fa-user-o"></i> 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <div className="course-card">
                        <div className="course-thumbnail">
                            <a href="#">
                                <img src="assets/images/course-11.jpg" className="img-fluid" alt="image" />
                            </a>
                        </div>
                        <div className="course-content">
                            <span className="course-price">$29.00</span>
                            <h3 className="course-title">
                                <a href="#">WordPress Master className for Beginners</a>
                            </h3>
                            <div className="course-rating">
                                <span className="star-rating-group">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-o"></i>
                                </span>
                                <span className="course-rating-count">(2 Review)</span>
                            </div>
                            <div className="course-content-footer">
                                <ul>
                                    <li className="course-duration"><i className="fa fa-clock-o"></i> 07h 30m </li>
                                    <li className="course-user"><i className="fa fa-user-o"></i> 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <div className="course-card">
                        <div className="course-thumbnail">
                            <a href="#">
                                <img src="assets/images/course-4.jpg" className="img-fluid" alt="image" />
                            </a>
                        </div>
                        <div className="course-content">
                            <span className="course-price">Free</span>
                            <h3 className="course-title">
                                <a href="#">The Complete JavaScript Course 2022</a>
                            </h3>
                            <div className="course-rating">
                                <span className="star-rating-group">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span className="course-rating-count">(7 Review)</span>
                            </div>
                            <div className="course-content-footer">
                                <ul>
                                    <li className="course-duration"><i className="fa fa-clock-o"></i> 13h 20m 20s </li>
                                    <li className="course-user"><i className="fa fa-user-o"></i> 9</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <div className="course-card">
                        <div className="course-thumbnail">
                            <a href="#">
                                <img src="assets/images/course-9.jpg" className="img-fluid" alt="image" />
                            </a>
                        </div>
                        <div className="course-content">
                            <span className="course-price">$19.00</span>
                            <h3 className="course-title">
                                <a href="#">Ultimate Photoshop Training: From Beginner</a>
                            </h3>
                            <div className="course-rating">
                                <span className="star-rating-group">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </span>
                                <span className="course-rating-count">(1 Review)</span>
                            </div>
                            <div className="course-content-footer">
                                <ul>
                                    <li className="course-duration"><i className="fa fa-clock-o"></i> 13h 20m 20s </li>
                                    <li className="course-user"><i className="fa fa-user-o"></i> 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <div className="course-card">
                        <div className="course-thumbnail">
                            <a href="#">
                                <img src="assets/images/course-5.jpg" className="img-fluid" alt="image" />
                            </a>
                        </div>
                        <div className="course-content">
                            <span className="course-price">$12.00</span>
                            <h3 className="course-title">
                                <a href="#">User Experience Design Essentials</a>
                            </h3>
                            <div className="course-rating">
                                <span className="star-rating-group">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span className="course-rating-count">(1 Review)</span>
                            </div>
                            <div className="course-content-footer">
                                <ul>
                                    <li className="course-duration"><i className="fa fa-clock-o"></i> 15h 20m </li>
                                    <li className="course-user"><i className="fa fa-user-o"></i> 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <div className="course-card">
                        <div className="course-thumbnail">
                            <a href="#">
                                <img src="assets/images/course-10.jpg" className="img-fluid" alt="image" />
                            </a>
                        </div>
                        <div className="course-content">
                            <span className="course-price">$17.00</span>
                            <h3 className="course-title">
                                <a href="#">Complete Blender Creator: Learn 3D Modelling</a>
                            </h3>
                            <div className="course-rating">
                                <span className="star-rating-group">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <span className="course-rating-count">(3 Review)</span>
                            </div>
                            <div className="course-content-footer">
                                <ul>
                                    <li className="course-duration"><i className="fa fa-clock-o"></i> 15h 20m </li>
                                    <li className="course-user"><i className="fa fa-user-o"></i> 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="category-btn btn-default text-center">
                        <a href="#">all courses</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="discount-area overlay">
        <div className="container">
            <div className="discount-wrap">

                <div className="discount-img">
                    <img src="assets/images/img-1.jpg" className="img-fluid" alt="image" />
                </div>
                
                <div className="discount-cont">
                    <h4>Limited time offer</h4>
                    <h2>50% Discount On All Of Our New & Upcoming Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing . Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit.</p>
                    <div id="countdown"></div>
                    <div className="btn-default">
                        <a href="#">Enroll Now</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    <section className="testimonial-area">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 offset-lg-2">
                    <div className="sec-heading text-center">
                        <h4>testimonial</h4>
                        <h2>What Says Our Students</h2>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-4">
                    <div className="testi-single">
                        <div className="testi-cont-inner">
                            <div className="testi-quote">
                                <i className="fa fa-quote-right"></i>
                            </div>
                            <div className="testi-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.</p>
                        </div>
                        <div className="testi-client-info">
                            <div className="testi-client-img">
                                <img src="assets/images/client-1.jpg" className="img-fluid" alt="image" />
                            </div>
                            <div className="testi-client-details">
                                <h4>Adam Smith</h4>
                                <h6>Graphics Designer</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="testi-single mt-0">
                        <div className="testi-cont-inner">
                            <div className="testi-quote">
                                <i className="fa fa-quote-right"></i>
                            </div>
                            <div className="testi-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.</p>
                        </div>
                        <div className="testi-client-info">
                            <div className="testi-client-img">
                                <img src="assets/images/client-2.jpg" className="img-fluid" alt="image" />
                            </div>
                            <div className="testi-client-details">
                                <h4>Jack Morkel</h4>
                                <h6>Web Developer</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="testi-single">
                        <div className="testi-cont-inner">
                            <div className="testi-quote">
                                <i className="fa fa-quote-right"></i>
                            </div>
                            <div className="testi-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.</p>
                        </div>
                        <div className="testi-client-info">
                            <div className="testi-client-img">
                                <img src="assets/images/client-3.jpg" className="img-fluid" alt="image" />
                            </div>
                            <div className="testi-client-details">
                                <h4>John Doe</h4>
                                <h6>Affiliate Marketer</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    <section className="newsletter-area">
        <div className="container">
            <div className="row newsletter-wrap overlay">
                <div className="col-lg-6">
                    <h2>Subscribe Our Newsletter</h2>
                </div>
                <div className="col-lg-6">
                    <div className="subscribe-form">
                        <form>
                            <input type="email" placeholder="Your email address" />
                            <button type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="why-choose-area">
        <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <div className="why-choose-intro">
                        <h2>Why Choose Us?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat.</p>
                        <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                        <div className="why-choose-btn">
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="why-choose-single">
                                <div className="why-choose-icon">
                                    <img src="assets/images/icons/ribbon.svg" className="img-fluid" alt="image" />
                                </div>
                                <div className="why-choose-cont">
                                    <h3>High Quality Courses</h3>
                                    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="why-choose-single">
                                <div className="why-choose-icon">
                                    <img src="assets/images/icons/teacher.svg" className="img-fluid" alt="image" />
                                </div>
                                <div className="why-choose-cont">
                                    <h3>Expert Instructors</h3>
                                    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="why-choose-single">
                                <div className="why-choose-icon">
                                    <img src="assets/images/icons/folder.svg" className="img-fluid" alt="image" />
                                </div>
                                <div className="why-choose-cont">
                                    <h3>Life Time Access</h3>
                                    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="why-choose-single">
                                <div className="why-choose-icon">
                                    <img src="assets/images/icons/24-hours.svg" className="img-fluid" alt="image" />
                                </div>
                                <div className="why-choose-cont">
                                    <h3>Dedicated Support</h3>
                                    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    
    <section className="team-area bg-gray">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 offset-lg-2">
                    <div className="sec-heading text-center">
                        <h4>Instructors</h4>
                        <h2>Our Expert Instructors </h2>
                    </div>
                </div>

            </div>
            <div className="row">

                <div className="col-md-3">
                    <div className="instructor-single shadow-none">
                        <div className="instructor-image">
                            <img src="assets/images/instructor-1.jpg" className="img-fluid" alt="image" />
                            <div className="instructor-links">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="instructor-body">
                            <h4>Shane Warne</h4>
                            <p>Instructor</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="instructor-single shadow-none">
                        <div className="instructor-image">
                            <img src="assets/images/instructor-2.jpg" className="img-fluid" alt="image" />
                            <div className="instructor-links">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="instructor-body">
                            <h4>Avelina Smith</h4>
                            <p>Instructor</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="instructor-single shadow-none">
                        <div className="instructor-image">
                            <img src="assets/images/instructor-3.jpg" className="img-fluid" alt="image" />
                            <div className="instructor-links">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="instructor-body">
                            <h4>John Bond</h4>
                            <p>Instructor</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="instructor-single shadow-none">
                        <div className="instructor-image">
                            <img src="assets/images/instructor-4.jpg" className="img-fluid" alt="image" />
                            <div className="instructor-links">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="instructor-body">
                            <h4>Sophia Smith</h4>
                            <p>Instructor</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    <section className="blog-area">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 offset-lg-2">
                    <div className="sec-heading text-center">
                        <h4>blog</h4>
                        <h2>Latest News</h2>
                    </div>
                </div>

            </div>
            <div className="row blog-post">

                <div className="col-md-4">
                    <div className="blog-post-single">
                        <div className="post-media">
                            <img src="assets/images/blog-5.jpg" className="img-fluid" alt="image" />
                        </div>
                        <div className="blog-post-content">
                            <ul className="post-meta">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-user"><span>Omexo</span></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-calendar"><span>20 Jan, 2022</span></i>
                                    </a>
                                </li>
                            </ul>
                            <h3><a href="#">Learn Webs Applications Development from Experts</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="blog-post-single">
                        <div className="post-media">
                            <img src="assets/images/blog-4.jpg" className="img-fluid" alt="image" />
                        </div>
                        <div className="blog-post-content">
                            <ul className="post-meta">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-user"><span>Omexo</span></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-calendar"><span>22 Jan, 2022</span></i>
                                    </a>
                                </li>
                            </ul>
                            <h3><a href="#">Expand Your Career Opportunities With Python</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="blog-post-single">
                        <div className="post-media">
                            <img src="assets/images/blog-3.jpg" className="img-fluid" alt="image" />
                        </div>
                        <div className="blog-post-content">
                            <ul className="post-meta">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-user"><span>Omexo</span></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-calendar"><span>24 Jan, 2022</span></i>
                                    </a>
                                </li>
                            </ul>
                            <h3><a href="#">Complete PHP Programming Career Guideline</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
        </>
  );
}

export default Home;