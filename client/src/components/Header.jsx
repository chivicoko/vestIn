import { Link } from "react-router-dom";
import { useGlobContext } from "../context";

const Header = () => {
    const {cartNum} = useGlobContext();

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
                  <Link to={'/'}>
                      <img className="img-fluid" src="assets/images/logo.png" alt="logo.png" />
                  </Link>
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
                      <li><Link to={''}><i className="fa fa-twitter"></i></Link>
                      </li>
                      <li><Link to={''}><i className="fa fa-linkedin"></i></Link></li>
                      <li><Link to={''}><i className="fa fa-dribbble"></i></Link></li>
                  </ul>
              </div>
              <div className="header-log-reg">
                  <ul>
                      <li><Link to={''}>Login</Link></li>
                      <li><small>|</small></li>
                      <li><Link to={''}>Register</Link></li>
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
                      <Link to={'/'} className="logo"><h3><i className="fa fa-gg-circle"></i>vestIn</h3></Link>
                  </div>
                  
                  <div className="main-menu-area text-right">
                      <nav className="mainmenu">
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
                                <Link to={''} className="active"><i className="fa fa-user-circle-o"></i> &nbsp; Account &nbsp; <i className="fa fa-angle-down"></i></Link>
                                <ul className="sub-menu">
                                    <li><Link to={''}><i className="fa fa-shopping-bag"></i> Orders</Link></li>
                                    <li><Link to={''}><i className="fa fa-heart"></i> Saved Items</Link></li>
                                    <br />
                                    <br />
                                    <li></li>
                                    <li><Link to={''}><i className="fa fa-sign-in"></i> Sign In</Link></li>
                                    <li><Link to={''}><i className="fa fa-user-o"></i> Register</Link></li>
                                </ul>
                            </li>
                            <li><small>|</small></li>
                            <li>
                                <Link to={''} className="active"><i className="fa fa-question-circle-o"></i> &nbsp; Help &nbsp; <i className="fa fa-angle-down"></i></Link>
                                <ul className="sub-menu">
                                    <li><Link to={''}>Help Center</Link></li>
                                    <li><Link to={''}>Place and Track Order</Link></li>
                                    <li><Link to={''}>Order Cancelation</Link></li>
                                    <li><Link to={''}>Returns and Refunds</Link></li>
                                    <br />
                                    <br />
                                    <li></li>
                                    <li><Link to={''}><i className="fa fa-comments"></i> &nbsp; Live Chat</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                  </div>

                  <div className="header-cart text-center">
                      <ul>
                          <li>
                              <Link to={'/checkout'}><i className="fa fa-shopping-cart"></i>
                                  <span className="cart-total-number" id="cartNnum">{cartNum}</span>
                              </Link>
                          </li>
                      </ul>
                  </div>
                  
                  <div className="header-toggle-btn">
                      <Link to={''} className="sidebar-toggle-btn">
                          <i className="fa fa-bars"></i>
                      </Link>
                  </div>

              </div>
          </div>
      </div>
  </header>

  
      </>
  )
}

export default Header;