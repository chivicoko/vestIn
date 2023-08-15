
import { Link } from 'react-router-dom';

const Orders = () => {
    
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

                <div className="col-12">

                    <div className="choose-single three mb-3">

                        <div className="delivery-date text-left">
                            <h5 className="d-flex justify-content-between p-3 bg-gray">
                                <span><strong>Order Placed:</strong> August 13</span>
                                <span className="text-success"><strong>Total:</strong> $ 45.30</span>
                                <span className="text-success"><strong>Order ID:</strong> $ 304urf-w9r834-453-4f-4tfd-ffv9700847</span>
                            </h5>
                        </div>
                        <div className="two d-flex px-0">
                            <div className="col-7 testi-client-info">
                                <div className="testi-client-img">
                                    <img src="assets/images/client-2.jpg" alt="client2" />
                                </div>
                                <div className="testi-client-details text-left">
                                    <h5>6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set</h5>
                                    <p style={{color: '#ff630e'}}>Arriving on: August 28</p>
                                    <h6>Quantity: 5</h6>
                                    <div className="d-flex justify-content-between pr-5"><Link to={''}>Buy it again</Link></div>
                                </div>
                            </div>
                            
                            <div className="col-4 p-0 m-0 text-justify">
                                <Link to={'/tracking'} className="btn btn-success" style={{padding: '10px 70px', color: 'white', fontSize: '16px', borderRadius: '5px', border: 'none', outline: 'none', margin: '20px 0 0'}}>Track package</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-4 p-0 m-0 text-justify">
                <Link to={'/checkout'} className="btn btn-dark" style={{padding: '10px 70px', color: 'white', fontSize: '16px', borderRadius: '5px', border: 'none', outline: 'none', margin: '20px 0 0'}}>Back to Checkout</Link>
            </div>
        </div>
    </section>

    </>
);
}

export default Orders;