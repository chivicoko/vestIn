
import { Link } from 'react-router-dom';

const Tracking = () => {
    
  return (
        <>
        
    <section class="why-choose-area three bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="sec-heading  text-center">
                        <h4>Track</h4>
                        <h2>Track Your Order</h2>
                    </div>
                </div>
            </div>

            <div class="row text-center">
                <div class="col-12">
                    <div class="choose-single three mb-3">
                        <div class="delivery-date text-left">
                            <h5 class=" p-3 bg-gray">
                            <div class="progress" style={{height: '30px'}}>
                                <div class="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">Preparing</div>
                                <div class="progress-bar bg-white text-dark" role="progressbar" style={{width: '34%'}} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100">Shipped</div>
                                <div class="progress-bar bg-white text-dark" role="progressbar" style={{width: '33%'}} aria-valuenow="23" aria-valuemin="0" aria-valuemax="100">Delivered</div>
                            </div>
                            </h5>
                        </div>

                        <div class="two d-flex px-0">
                            <div class="col-5">
                                <div class="testi-client-im">
                                    <img src="assets/images/client-2.jpg" alt="client2" />
                                </div>
                            </div>
                            <div class="col-7 testi-client-info pt-5">
                                <div class="testi-client-details text-left">
                                    <h5>6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set</h5>
                                    <p style={{color: '#ff630e'}}>Arriving on August 28</p>
                                    <h6>Quantity: 5</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-4 p-0 m-0 text-justify">
                    <Link to={'/orders'} className="btn btn-success" style={{padding: '10px 70px', color: 'white', fontSize: '16px', borderRadius: '5px', border: 'none', outline: 'none', margin: '20px 0 0 18px'}}>View all orders</Link>
                </div>
            </div>
        </div>
    </section>

    </>
);
}

export default Tracking;