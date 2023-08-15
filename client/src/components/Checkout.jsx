
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Checkout = () => {
    const [deliveryDate, setDeliveryDate] = useState('');

    const updateDelivery = (e) => {
        setDeliveryDate(e.target.value);
    }

  return (
        <>
        
    <section className="why-choose-area three bg-gray">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 offset-lg-2">
                    <div className="sec-heading  text-center">
                        <h4>Checkout (9 items)</h4>
                        <h2>Review Your Order</h2>
                    </div>
                </div>

            </div>
            <div className="row text-center">
                <div className="col-md-8">
                    <div className="choose-single three mb-3">
                        <div className="delivery-date text-left">
                            <h5>Delivery Date: <span className="text-success">{deliveryDate}</span></h5>
                        </div>
                        <div className="two d-flex px-0">
                            <div className="col-7 testi-client-info">
                                <div className="testi-client-img">
                                    <img src="assets/images/client-2.jpg" alt="client2" />
                                </div>
                                <div className="testi-client-details text-left">
                                    <h5>6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set</h5>
                                    <p style={{color: '#ff630e'}}>$44.83</p>
                                    <h6>Quality: 5</h6>
                                    <div className="d-flex justify-content-between pr-5"><Link to={''}>Update</Link> <Link to={''}>Delete</Link></div>
                                </div>
                            </div>
                            
                            <div className="col-4 p-0 m-0 text-justify">
                                <div className="testi-rating">
                                    <h5 className="">Choose a delivery option</h5>
                                </div>

                                <div className="form-check">
                                    <input onClick={updateDelivery} type="radio" value="Wednesday, August 16" name="gender" /> <span className="delivery-1 text-success" onClick={updateDelivery}>Wednesday, August 16</span> <br/> $9.99 - shipping <br /> <br />
                                    <input onClick={updateDelivery} type="radio" value="Thursday, August 17" name="gender" /> <span className="delivery-1 text-success" onClick={updateDelivery}>Thursday, August 17</span> <br/> $5.04 - shipping <br /> <br />
                                    <input onClick={updateDelivery} type="radio" value="Friday, August 18" name="gender" /> <span className="delivery-1 text-success" onClick={updateDelivery}>Friday, August 18</span> <br/> FREE shipping
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 pr-0">
                    <div className="choose-single three pr-0">
                        <div className="why-choose-cont three">
                            <h3 className="text-left">Order Summary</h3>
                            <p className="d-flex justify-content-between"><span>Items (9)</span><span>$243.10</span></p>
                            <p className="d-flex justify-content-between"><span>Shipping and handling</span><span style={{borderBottom: '1px solid gray'}}>$5.56</span></p>
                            <p className="d-flex justify-content-between"><span>Total before tax</span><span>$243.10</span></p>
                            <p className="d-flex justify-content-between"><span>Estimated tax (10%)</span><span>$24.32</span></p>
                            <hr/>
                            <h5 className="d-flex justify-content-between"><span>Order total:</span><span>$267.41</span></h5>
                            <hr/>
                            <div className="text-left mb-4">Use Paypal <input type="checkbox" name="" id="" /></div>
                            <Link to={'/orders'} className="btn btn-success mb-2" style={{padding: '10px 109px', fontSize: '16px'}}>Place your order</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
</>
);
}

export default Checkout;