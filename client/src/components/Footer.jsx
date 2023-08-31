// import { Link } from "react-router-dom";

const Footer = () => {

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
                              <li><a href="#"><i className="fa fa-angle-right"></i> Business</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Design</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Development</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Marketing</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Photography</a></li>
                          </ul>
                      </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                      <div className="footer-widget recent-post">
                          <h4> Recent Posts</h4>

                          <div className="footer-post-single">
                              <div className="recent-post-thumb">
                                  <img src="assets/images/blog-sm-5.jpg" alt="image" className="img-fluid" />
                              </div>
                              <div className="recent-post-cont">
                                  <h6><a href="#">Learn Webs Applications Development from Experts</a></h6>
                                  <span>April 1, 2022</span>
                              </div>
                          </div>
                          
                          <div className="footer-post-single m-0">
                              <div className="recent-post-thumb">
                                  <img src="assets/images/blog-sm-4.jpg" alt="image" className="img-fluid" />
                              </div>
                              <div className="recent-post-cont">
                                  <h6><a href="#">Expand Your Career Opportunities With Python</a></h6>
                                  <span>May 25, 2022</span>
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
                                  <p className="m-0">250/A Oval Street, Mount View, London, United Kingdom</p>
                              </li>
                              <li>
                                  <i className="fa fa-envelope" aria-hidden="true"></i>
                                  <p className="m-0">support@example.com</p>
                              </li>
                              <li>
                                  <i className="fa fa-phone" aria-hidden="true"></i>
                                  <p className="m-0">+98 12345 67890</p>
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