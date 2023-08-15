import { Link } from "react-router-dom";
import { useGlobContext } from "../context";

const Home = () => {
    const {cartUpdate} = useGlobContext();
    
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
                <h2 className="text blink1">Connect And Start Learning Today.</h2>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                <ul style={{marginTop: '150px'}}>
                    <li><a href="about-us.html">Find courses</a></li>
                    <li><a className="btn-bg" href="contact.html">Start free trial</a></li>
                </ul>
            </div>
        </div>
    </section>

    {/* ecommerce */}
    <section className="course-archive mb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-5">
                    <div className="course-sidebar">
                        <div className="course-sidebar-search">
                            <input type="text" value="" name="s" placeholder="Search..." className="form-control" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>

                        <div className="filter-category">
                            <h4>Category</h4>
                            <form action="#" method="post">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check1">
                                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />Business
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check2">
                                        <input type="checkbox" className="form-check-input" id="check2" name="option2" value="something" />Design
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check3">
                                        <input type="checkbox" className="form-check-input" id="check3" name="option3" value="something" />Development
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check4">
                                        <input type="checkbox" className="form-check-input" id="check4" name="option3" value="something" />Graphic Design
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check5">
                                        <input type="checkbox" className="form-check-input" id="check5" name="option5" value="something" />Heath & Fitness
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check6">
                                        <input type="checkbox" className="form-check-input" id="check6" name="option6" value="something" />Marketing
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check7">
                                        <input type="checkbox" className="form-check-input" id="check7" name="option7" value="something" />Math
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check8">
                                        <input type="checkbox" className="form-check-input" id="check8" name="option8" value="something" />Photography
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check9">
                                        <input type="checkbox" className="form-check-input" id="check9" name="option9" value="something" />PHP
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="check10">
                                        <input type="checkbox" className="form-check-input" id="check10" name="option10" value="something" />WordPress
                                    </label>
                                </div>
                            </form>
                        </div>
                        
                        <div className="filter-tag">
                            <h4>Tag</h4>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />App Development
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />Graphic Design
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />Heath & Fitness
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />PHP
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />UX Design
                                </label>
                            </div>
                        </div>
                        
                        <div className="filter-level">
                            <h4>Level</h4>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />Beginner
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />Intermediate
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />Expert
                                </label>
                            </div>
                        </div>
                        
                        <div className="filter-price">
                            <h4>Price</h4>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />Free
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" value="" />Paid
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-9 col-md-7">
                    <div className="row search-result">
                        <div className="col-lg-6 col-md-3">
                            <div className="tutor-courses">
                                <h5><span>9</span> Courses</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <div className="tutor-course-archive float-right">
                                <form className="tutor-course-form">
                                    <select className="form-control">
                                        <option value="newest_first">Release Date (newest first)</option>
                                        <option value="oldest_first">Release Date (oldest first)</option>
                                        <option value="course_title_az">Course Title (a-z)</option>
                                        <option value="course_title_za">Course Title (z-a)</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>All Levels</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-3.jpg" className="img-fluid" alt="course3" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span className="course-rating-count">5.00 (2)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">Nutrition: Build Your Perfect Diet & Meal Plan</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 02h 20m</li>
                                        <li><i className="fa fa-user"></i> 58</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>$15.00</span>
                                        </div>
                                        <div className="course-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span><Link to={''} onClick={cartUpdate}>Add to cart</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>Intermediate</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-1.jpg" className="img-fluid" alt="course1" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span className="course-rating-count">5.00 (8)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">PHP Beginners - Become a PHP Master</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 3h 32m</li>
                                        <li><i className="fa fa-user"></i> 66</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>Free</span>
                                        </div>
                                        <div className="course-cart">
                                            <span><Link to={''}>Get Enrolled</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>Beginner</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-11.jpg" className="img-fluid" alt="course11" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                        <span className="course-rating-count">4.50 (9)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">WordPress Master Class for Beginners</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i>07h 30m</li>
                                        <li><i className="fa fa-user"></i> 33</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>$29.00</span>
                                        </div>
                                        <div className="course-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span><Link to={''} onClick={cartUpdate}>Add to cart</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>Intermediate</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-4.jpg" className="img-fluid" alt="course4" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                        <span className="course-rating-count">4.50 (5)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">The Complete JavaScript Course 2022</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 09h 59m</li>
                                        <li><i className="fa fa-user"></i> 14</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>$17.00</span>
                                        </div>
                                        <div className="course-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span><Link to={''} onClick={cartUpdate}>Add to cart</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>Beginner</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-9.jpg" className="img-fluid" alt="course9" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span className="course-rating-count">5.00 (2)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">User Experience Design Essentials</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 02h 20m</li>
                                        <li><i className="fa fa-user"></i> 45</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>$22.00</span>
                                        </div>
                                        <div className="course-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span><Link to={''} onClick={cartUpdate}>Add to cart</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>All Levels</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-5.jpg" className="img-fluid" alt="course5" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                        <span className="course-rating-count">4.50 (8)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">Ultimate Photoshop Training: From Beginner</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 04h 39m</li>
                                        <li><i className="fa fa-user"></i> 26</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>$25.00</span>
                                        </div>
                                        <div className="course-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span><Link to={''} onClick={cartUpdate}>Add to cart</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>All Levels</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-10.jpg" className="img-fluid" alt="course10" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span className="course-rating-count">4.50 (7)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">Blender Creator : Learn 3D Modelling</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 07h 12m</li>
                                        <li><i className="fa fa-user"></i> 10</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>$19.00</span>
                                        </div>
                                        <div className="course-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span><Link to={''} onClick={cartUpdate}>Add to cart</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>Intermediate</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-11.jpg" className="img-fluid" alt="course11" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                        <span className="course-rating-count">4.50 (5)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">Sales Training: Practical Sales Techniques</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 03h 29m</li>
                                        <li><i className="fa fa-user"></i> 29</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>Free</span>
                                        </div>
                                        <div className="course-cart">
                                            <span><Link to={''} onClick={cartUpdate}>Get Enrolled</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="course-card four">
                                <div className="course-header">
                                    <h5>Beginner</h5>
                                    <div className="course-card-icon">
                                        <img src="assets/images/icons/ribbon-1.svg" alt="ribbon1" />
                                    </div>
                                    <div className="course-thumbnail">
                                        <a href="course-single.html"><img src="assets/images/course-8.jpg" className="img-fluid" alt="course8" /></a>
                                    </div>
                                </div>
                                <div className="course-content four">
                                    <div className="course-rating">
                                        <div className="star-rating-group">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span className="course-rating-count">5.00 (8)</span>
                                    </div>
                                    <div className="course-title">
                                        <h3><a href="course-single.html">Complete Trello - Beginners to Advanced</a></h3>
                                    </div>
                                    <ul className="course-meta">
                                        <li><i className="fa fa-clock-o"></i> 04h 16m</li>
                                        <li><i className="fa fa-user"></i> 12</li>
                                    </ul>
                                    <div className="course-author">
                                        <div className="avator">A</div> By <span className="author-name">Admin</span>
                                    </div>
                                    <div className="course-content-footer">
                                        <div className="course-price four">
                                            <span>$26.00</span>
                                        </div>
                                        <div className="course-cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span><Link to={''} onClick={cartUpdate}>Add to cart</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="course-pagination text-center">
                                <li><span>1</span></li>
                                <li><Link to={''}>2</Link></li>
                                <li><Link to={''}><i className="fa fa-angle-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* end ecommerce */}

    {/* <div className="slides-container">
        <img className="slide" src="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f" />
        <img className="slide" src="https://images.unsplash.com/photo-1472437774355-71ab6752b434" />
        <img className="slide" src="https://images.unsplash.com/photo-1572985025058-f27aeca1b8bf" />
        <img className="slide" src="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f" />
        <img className="slide" src="https://images.unsplash.com/photo-1472437774355-71ab6752b434" />
        <img className="slide" src="https://images.unsplash.com/photo-1572985025058-f27aeca1b8bf" />
    </div> */}
        
    <section className="newsletter-area pt-5">
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
    
    <section>
        <div id="spinners" className='d-flex justify-content-around'>
            <i className="fa fa-gear"></i>
            <i className="fa fa-spinner"></i>
            <i className="fa fa-refresh"></i>
            <i className="fa fa-circle-o-notch"></i>
            <i className="fa fa-spinner"></i>
            <i className="fa fa-cog"></i>
        </div>
    </section>
    
        </>
  );
}

export default Home;