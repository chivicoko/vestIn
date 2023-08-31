
import { Link } from 'react-router-dom';
import { useGlobContext } from '../context';

const Orders = () => {
    const {cartItems, naira, totalPrice} = useGlobContext();

    
  return (
        <>
        
    <section className="why-choose-area three bg-gray">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 offset-lg-2">
                    <div className="sec-heading  text-center">
                        <h4>Checkout ({cartItems.length} items)</h4>
                        <h2>Review Your Order</h2>
                    </div>
                </div>

            </div>
            <div className="row text-center">
                <div className="col-12">

                    <div className="choose-single three mb-3 px-5">
                        <div className="delivery-date row p-3 bg-gray">
                            <h5 className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-lg-center justify-content-md-center  justify-content-between'>
                                <span><strong>Order Placed:</strong></span> &nbsp;
                                <span> August 13</span>
                            </h5>
                            <h5 className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-lg-center justify-content-md-center  justify-content-between'>
                                <span className="text-success"><strong>Total: </strong></span> &nbsp;
                                <span className="text-success"> {naira.format(totalPrice)}</span>
                            </h5>
                            <h5 className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-lg-center justify-content-md-center justify-content-between'>
                                <span className="text-success"><strong>Order ID: </strong></span> &nbsp;
                                <span className="text-success"> $304urf-w9r834</span>
                            </h5>
                        </div>
                        <div className="two row px-0 py-5">
                            {cartItems.map(item => {
                                return (
                                        <div key={item.id} className="order-items col-lg-4 col-md-4 col-sm-12 border d-flex justify-content-around flex-column align-items-center py-3 px-1">
                                            <div>
                                                <div className="testi-client-im rounded">
                                                    <img src={item.thumbnail} className='rounded' alt="client2"  style={{width: '150px'}}/>
                                                </div>
                                                <h5>{item.title} ({item.quantity} pieces) - {naira.format(item.price*item.quantity)} </h5>
                                            </div>
                                            {/* <div className=""><Link to={''}>Buy it again</Link></div> */}
                                        </div>
                                    )
                            })}
                        </div>

                        <div className="row justify-content-around">
                            <p style={{color: '#ff630e'}}>Arriving on: August 28</p>
                            <Link to={'/tracking'} className="btn btn-success" style={{padding: '10px 70px', fontSize: '16px'}}>Track package</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center p-0 mt-5">
                <Link to={'/checkout'} className="btn btn-dark mb-2" style={{padding: '10px 70px', fontSize: '16px'}}>Back to Checkout</Link>
            </div>
        </div>
    </section>

    </>
);
}

export default Orders;