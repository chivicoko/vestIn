import { Link } from "react-router-dom";
import { useGlobContext } from "../context";
import { useEffect, useState } from "react";

const Home = () => {
    const [blink, setBlink] = useState('blink1');
    const {cartUpdate, products, naira} = useGlobContext();
    // console.log(products);
    
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

    useEffect(() => {
        setInterval(() => {
            if (blink === 'blink1') {
                setBlink('');
            } else {
                setBlink('blink1');
            }
        }, 10000);
    }, [blink]);

  return (
        <>

    <div id="carouselExampleControls" className="carousel slide hero-carousel" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-9.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-8.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-4.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-5.jpg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-6.jpg" alt="Fifth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-1.jpg" alt="Sixth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-2.jpg" alt="Fifth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-7.jpg" alt="Sixth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-3.jpg" alt="Fifth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/images/banner-10.jpg" alt="Sixth slide" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        
        <div class="carousel-writeup">
            <div className="caption-content text-center" id="writeup">
                <h4>Meet your needs from anywhere</h4>
                <h2 style={{marginTop: '100px'}} className={`text ${blink}`}>Connect And Have Your Needs Met.</h2>
                <p className="px-2">We provide high-quality products all over Nigeria, and deliver them promptly. Our customer services are very friendly and attentive to our customers.</p>
                <ul style={{marginTop: '150px'}}>
                    <li><a href="">Find courses</a></li>
                    <li><a className="btn-bg" href="">Start free trial</a></li>
                </ul>
            </div>
        </div>
    </div>

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
                        {
                            products.map((product) => {
                                return (
                                    <div key={product.id} className="col-lg-4">
                                        <div className="course-card four">
                                            <div className="course-header">
                                                <h5>{product.discountPercentage} discount</h5>
                                                <div className="course-card-icon">
                                                    {product.stock}
                                                </div>
                                                <div className="course-thumbnail">
                                                    <a href="course-single.html"><img style={{height: '200px', width: '280px'}} src={product.thumbnail} className="img-fluid" alt="course3" /></a>
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
                                                    <span className="course-rating-count">{product.rating} (2)</span>
                                                </div>
                                                <div className="course-title" style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: "nowrap"}}>
                                                    <h4><a style={{fontSize: '17px'}} href="course-single.html">{product.title}</a></h4>
                                                </div>
                                                <ul className="course-meta d-flex justify-content-between">
                                                    <li>{product.brand}</li>
                                                    {/* <li>{product}</li> */}
                                                    {/* <li>{'-'}</li> */}
                                                    <li>{product.category}</li>
                                                </ul>
                                                <div className="course-content-footer">
                                                    <div className="course-price four">
                                                        <span>{naira.format(product.price)}</span>
                                                    </div>
                                                    <div className="course-cart">
                                                        <i className="fa fa-shopping-cart"></i>
                                                        <span><Link onClick={() => cartUpdate(product)}>Add to cart</Link></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
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