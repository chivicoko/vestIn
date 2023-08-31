
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
                        <div className="delivery-date text-left">
                            <h5 className="d-flex justify-content-between p-3 bg-gray">
                                <span><strong>Order Placed:</strong> August 13</span>
                                <span className="text-success"><strong>Total:</strong> {naira.format(totalPrice)}</span>
                                <span className="text-success"><strong>Order ID:</strong> $ 304urf-w9r834-453-4f-4tfd-ffv9700847</span>
                            </h5>
                        </div>
                        <div className="two row d-flex px-0 py-5">
                            {cartItems.map(item => {
                                return (
                                        <div key={item.id} className="col-4 border d-flex justify-content-center align-items-center">
                                            <div>
                                                <div className="testi-client-im rounded">
                                                    <img src={item.thumbnail} className='rounded' alt="client2"  style={{width: '150px'}}/>
                                                </div>
                                                <h5>{item.title} ({item.quantity} pieces) - {naira.format(item.price*item.quantity)} </h5>
                                            </div>
                                        </div>
                                    )
                            })}
                        </div>

                        <div className="row justify-content-between ml-5 text-justify">
                            <p style={{color: '#ff630e'}}>Arriving on: August 28</p>
                            <div className=""><Link to={''}>Buy it again</Link></div>
                            <Link to={'/tracking'} className="btn btn-success" style={{padding: '10px 70px', fontSize: '16px'}}>Track package</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-4 p-0 mt-4 text-justify">
                <Link to={'/checkout'} className="btn btn-dark mb-2" style={{padding: '10px 70px', fontSize: '16px'}}>Back to Checkout</Link>
            </div>
        </div>
    </section>

    </>
);
}

export default Orders;