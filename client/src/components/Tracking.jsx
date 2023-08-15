
import { Link } from 'react-router-dom';

const Tracking = () => {
    
  return (
        <>
        
    <section className="why-choose-area three bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="sec-heading  text-center">
                        <h4>Track</h4>
                        <h2>Track Your Order</h2>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-12">
                    <div className="choose-single three mb-3">
                        <div className="delivery-date text-left">
                            <h5 className=" p-3 bg-gray">
                            <div className="progress" style={{height: '30px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">Preparing</div>
                                <div className="progress-bar bg-white text-dark" role="progressbar" style={{width: '34%'}} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100">Shipped</div>
                                <div className="progress-bar bg-white text-dark" role="progressbar" style={{width: '33%'}} aria-valuenow="23" aria-valuemin="0" aria-valuemax="100">Delivered</div>
                            </div>
                            </h5>
                        </div>

                        <div className="two d-flex px-0">
                            <div className="col-5">
                                <div className="testi-client-im">
                                    <img src="assets/images/client-2.jpg" alt="client2" />
                                </div>
                            </div>
                            <div className="col-7 testi-client-info pt-5">
                                <div className="testi-client-details text-left">
                                    <h5>6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set</h5>
                                    <p style={{color: '#ff630e'}}>Arriving on August 28</p>
                                    <h6>Quantity: 5</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-4 mt-4 text-justify">
                    <Link to={'/orders'} className="btn btn-dark mb-2" style={{padding: '10px 70px', fontSize: '16px'}}>View all orders</Link>
                </div>
            </div>
        </div>
    </section>

    </>
);
}

export default Tracking;