

const Header = () => {

  return (
      <>
    <div className="sidebar-wrap">
      <div className="sidebar-inner">
          <div className="sidebar-close">
              <div className="sidebar-close-btn">
                  <i className="fa fa-times"></i>
              </div>
          </div>
          <div className="sidebar-content">
              <div className="sidebar-logo">
                  <a href="index.html">
                      <img className="img-fluid" src="assets/images/logo.png" alt="logo.png" />
                  </a>
              </div>
              <div className="mobile-menu"></div>
              <div className="search-form">
                  <input type="text" placeholder="Search Courses" className="form-control" />
                  <span><i className="fa fa-search"></i></span>
              </div>
              <div className="contact-info">
                  <ul>
                      <li><i className="fa fa-envelope"></i> support@example.com</li>
                      <li><i className="fa fa-phone"></i> +98 012345 6789</li>
                  </ul>
              </div>
              <div className="social-icon">
                  <ul>
                      <li><span>Follow Us:</span></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a>
                      </li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  </ul>
              </div>
              <div className="header-log-reg">
                  <ul>
                      <li><a href="login.html">Login</a></li>
                      <li><small>|</small></li>
                      <li><a href="registration.html">Register</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

  <header className="header-area">
      <div className="header-top-area">
          <div className="container">
              <div className="header-top-wrap">

                  <div className="header-course-search">
                      <input type="text" placeholder="Search Courses" className="form-control" />
                      <span><i className="fa fa-search"></i></span>
                  </div>

                  <div className="header-top-social ml-2 px-0 d-flex align-items-center justify-content-center">
                    <div className="has-you-covered">
                        <h3 className="">
                            <marquee scrollamount="5" width="300"><strong>vestIn</strong> has you covered!</marquee>
                        </h3>
                    </div>
                    <div className="better-deal1 skewed ml-2 px-2 bg-white">
                        <h3 className="trans1 translation1">Shop Better Deals</h3>
                    </div>
                    <div className="better-deal2 skewed px-2">
                        <h3 className="text-white trans2 translation2">
                            Grab it &nbsp;
                            <i className="fa fa-dribbble"></i>
                        </h3>
                    </div>
                  </div>

                  <div className="header-contact-info text-left pl-5">
                      <ul>
                          <li className="pr-3"><i className="fa fa-envelope mr-1"></i> support@vestin.com</li>
                          <li className="pr-3"><i className="fa fa-phone mr-1"></i> +98 012345 6789</li>
                      </ul>
                  </div>

              </div>
          </div>
      </div>
      
      <div className="header-btm-area">
          <div className="container">
              <div className="main-menu-wrap">

                  <div className="site-logo">
                      {/* <a className="logo" href="index.html"><img src="assets/images/logo.png" alt="logo" /></a> */}
                      <a className="logo" href="index.html"><h3><i className="fa fa-gg-circle"></i>vestIn</h3></a>
                      {/* <a className="logo" href="index.html"><h3><i className="fa fa-life-buoy"></i>vestIn</h3></a> */}
                  </div>
                  
                  <div className="main-menu-area text-right">
                      <nav className="mainmenu">
                          {/* <ul>
                              <li>
                                  <a className="active" href="index.html">Home</a>
                                  <ul className="sub-menu">
                                      <li><a href="index.html">Home 1</a></li>
                                      <li><a href="index-2.html">Home 2</a></li>
                                      <li><a href="index-3.html">Home 3</a></li>
                                      <li><a href="index-4.html">Home 4</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#">Pages</a>
                                  <ul className="sub-menu">
                                      <li><a href="about-us.html">About Us</a></li>
                                      <li><a href="membership-plans.html">Membership Plans</a></li>
                                      <li><a href="instructors.html">Instructors</a></li>
                                      <li><a href="faqs.html">FAQs</a></li>
                                  </ul>
                              </li>
                              <li><a href="#">Courses</a>
                                  <ul className="sub-menu">
                                      <li><a href="courses.html">Courses</a></li>
                                      <li><a href="course-single.html">Course Single</a></li>
                                      <li><a href="become-an-instructor.html">Become An Instructor</a></li>
                                      <li><a href="instructor-profile.html">Instructor Profile</a></li>
                                      <li><a href="registration.html">Student Registration</a></li>
                                      <li><a href="registration.html">Instructor Registration</a></li>
                                  </ul>
                              </li>
                              <li><a href="webinars.html">Webinars</a>
                                  <ul className="sub-menu">
                                      <li><a href="webinars.html">Upcoming Webinars</a></li>
                                      <li><a href="webinar-single.html">Webinar Single</a></li>
                                  </ul>
                              </li>
                              <li><a href="blog.html">Blog</a>
                                  <ul className="sub-menu">
                                      <li><a href="blog.html">Blog Page</a></li>
                                      <li><a href="blog-single.html">Blog Single</a></li>
                                  </ul>
                              </li>
                              <li><a href="contact.html">Contact</a></li>
                          </ul> */}
                        <div className="header2-course-search">
                            <input type="text" placeholder="Search Courses, Brands and Categories" className="form-control" />
                            <span><i className="fa fa-search"></i></span>
                        </div>
                      </nav>
                  </div>
                  
                  <div className="main-menu-area text-right">
                    <nav className="mainmenu">
                        <ul>
                            <li>
                                <a className="active" href="index.html"><i className="fa fa-user-circle-o"></i> &nbsp; Account &nbsp; <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="login.html"><i className="fa fa-shopping-bag"></i> Orders</a></li>
                                    <li><a href="register.html"><i className="fa fa-heart"></i> Saved Items</a></li>
                                    <br />
                                    <br />
                                    <li></li>
                                    <li><a href="login.html"><i className="fa fa-sign-in"></i> Sign In</a></li>
                                    <li><a href="register.html"><i className="fa fa-user-o"></i> Register</a></li>
                                </ul>
                            </li>
                            <li><small>|</small></li>
                            <li>
                                <a className="active" href="index.html"><i className="fa fa-question-circle-o"></i> &nbsp; Help &nbsp; <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="">Help Center</a></li>
                                    <li><a href="">Place and Track Order</a></li>
                                    <li><a href="">Order Cancelation</a></li>
                                    <li><a href="">Returns and Refunds</a></li>
                                    <br />
                                    <br />
                                    <li></li>
                                    <li><a href=""><i className="fa fa-comments"></i> &nbsp; Live Chat</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <ul>
                            <li><a href="registration.html">Register</a></li>
                        </ul> */}
                    </nav>
                  </div>

                  <div className="header-cart text-center">
                      <ul>
                          <li>
                              <a href="#"><i className="fa fa-shopping-cart"></i>
                                  <span className="cart-total-number" id="cartNnum">0</span>
                              </a>
                          </li>
                      </ul>
                  </div>
                  
                  <div className="header-toggle-btn">
                      <a className="sidebar-toggle-btn">
                          <i className="fa fa-bars"></i>
                      </a>
                  </div>

              </div>
          </div>
      </div>
  </header>

  
      </>
  )
}

export default Header;