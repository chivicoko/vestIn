// import { Link } from "react-router-dom";

import { useGlobContext } from "../context";

const Footer = () => {
    const {products, naira} = useGlobContext();

  return (
    <>

    <footer className="footer-area">

      <div className="footer-top-area">
          <div className="container">
              <div className="row">

                  <div className="col-lg-3 col-md-6">
                      <div className="footer-widget logo">
                            <a className="logo" href="">
                                <h3 className="text-light">
                                    <i className="fa fa-gg-circle" style={{color: '#FF630E', fontSize: '50px'}}></i>
                                    vestIn
                                </h3>
                            </a>
                          <div className="footer-about-description">
                              <p>We provide high-quality products all over Nigeria, and deliver them promptly. Our customer services are very friendly and attentive to our customers.</p>
                          </div>
                          <h6>Follow Us</h6>
                          <ul className="footer-social-icons">
                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                              <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                          </ul>
                      </div>
                  </div>
                  
                  <div className="col-lg-2 col-md-6">
                      <div className="footer-widget footer-cat">
                          <h4>Categories</h4>
                          <ul>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Home</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> My GitHub</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> My Portfolio</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Checkout</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> victorokoye.com</a></li>
                          </ul>
                      </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                      <div className="footer-widget recent-post">
                          <h4> Good Specs</h4>

                          <div className="footer-post-single">
                              <div className="recent-post-thumb">
                                  <img src="assets/images/blog-sm-5.jpg" alt="image" className="img-fluid" style={{height: '120px', width: '100px'}} />
                              </div>
                              <div className="recent-post-cont">
                                  <h6><a href="#">A good product lasts as long as possible</a></h6>
                                  <span>Victor___</span>
                              </div>
                          </div>
                          
                          <div className="footer-post-single m-0">
                              <div className="recent-post-thumb">
                                  <img src="assets/images/blog-sm-4.jpg" alt="image" className="img-fluid" style={{height: '120px', width: '100px'}} />
                              </div>
                              <div className="recent-post-cont">
                                  <h6><a href="#">When we sell, we sell with all our capabilities and all honor</a></h6>
                                  <span>Okoye___</span>
                              </div>
                          </div>

                      </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6">
                      <div className="footer-widget footer-contact">
                          <h4>Contact Us</h4>
                          <ul>
                              <li>
                                  <i className="fa fa-map-marker"></i>
                                  <p className="m-0">7 Pat-Clara street, Ifite-Awka, Anambra State, Nigeria</p>
                              </li>
                              <li>
                                  <i className="fa fa-envelope" aria-hidden="true"></i>
                                  <p className="m-0">victor.c.okoye@gmail.com</p>
                              </li>
                              <li>
                                  <i className="fa fa-phone" aria-hidden="true"></i>
                                  <p className="m-0">+234 802 884 5693</p>
                              </li>
                              <li className="p-0 info">Feel free to contact us
                              </li>
                          </ul>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      
      <div className="footer-bottom-area text-center">
          <div className="container">
              <p className="m-0">vestIn &copy; 2023. All Rights Reserved</p>
          </div>
      </div>

  </footer>

    </>
  )
}

export default Footer;