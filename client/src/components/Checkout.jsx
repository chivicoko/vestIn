
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobContext } from '../context';
const Checkout = () => {
    const [deliveryDate, setDeliveryDate] = useState('');
    const {cartItems, naira, totalPrice} = useGlobContext();
    // console.log(cartItems);

    const updateDelivery = (e) => {
        setDeliveryDate(e.target.value);
    }

  return (
        <>
        
    <section className="bg-gray py-5">
        <div className="container">
            
            <div className="row  d-flex justify-content-center">
                <div className="sec-heading text-center">
                    <h4>Checkout ({cartItems.length} items)</h4>
                    <h2>Review Your Order</h2>
                </div>
            </div>

            <div className="row d-flex justify-content-between">
                <div className="col-md-8">
                    {
                        cartItems.map(item => {
                            return (
                                <div>
                                    <div className="choose-single three mb-3">
                                        <div className="delivery-date text-left">
                                            <h5>Delivery Date: <span className="text-success">{deliveryDate}</span></h5>
                                        </div>
                                        <div className="two row px-3">
                                            <div className="col-lg-7 col-md-7 col-md-12 d-flex justify-content-between testi-client-info border p-0">
                                                <img className='mr-4 ml-0' src={item.thumbnail} style={{width: '50%'}} alt="client2" />
                                                <div className="testi-client-details text-left align-items-center p-2" style={{width: '50%'}}>
                                                    <h5>{item.title}</h5>
                                                    <p style={{color: '#ff630e'}}>{naira.format(item.price*item.quantity)}</p>
                                                    <h6>Quantity: {item.quantity}</h6>
                                                    <div className="d-flex justify-content-between pr-lg-5 pr-md-5 pr-sm-1"><Link to={''}>Update</Link> <Link to={''}>Delete</Link></div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-4 col-md-4 col-sm-12 p-0 ml-5">
                                                <div className="testi-rating">
                                                    <h5 className="">Choose a delivery option</h5>
                                                </div>

                                                <div className="form-check text-justify">
                                                    <input onClick={updateDelivery} type="radio" value="Wednesday, August 16" name="delivery-date" /> <span id='delivery-1' className="text-success">Wednesday, August 16</span> <br/> {naira.format(9.99)} - shipping <br /> <br />
                                                    <input onClick={updateDelivery} type="radio" value="Thursday, August 17" name="delivery-date" /> <span id='delivery-2' className="text-success">Thursday, August 17</span> <br/> {naira.format(5.04)} - shipping <br /> <br />
                                                    <input onClick={updateDelivery} type="radio" value="Friday, August 18" name="delivery-date" /> <span id='delivery-3' className="text-success">Friday, August 18</span> <br/> FREE shipping
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="col-md-4">
                    <div className="choose-single three">
                        <div className="why-choose-cont three text-center">
                            <h3 className="text-left">Order Summary</h3>
                            <p className="d-flex justify-content-between"><span>Items ({cartItems.length})</span><span>{naira.format(totalPrice)}</span></p>
                            <p className="d-flex justify-content-between"><span>Shipping and handling</span><span style={{borderBottom: '1px solid gray'}}>{naira.format(0)}</span></p>
                            <p className="d-flex justify-content-between"><span>Total before tax</span><span>{naira.format(totalPrice)}</span></p>
                            <p className="d-flex justify-content-between"><span>Estimated tax (10%)</span><span>{naira.format(0)}</span></p>
                            <hr/>
                            <h5 className="d-flex justify-content-between"><span>Order total:</span><span>{naira.format(totalPrice)}</span></h5>
                            <hr/>
                            <div className="text-left mb-4">Use Paypal <input type="checkbox" name="" id="" /></div>
                            <Link to={'/orders'} className="btn btn-success mb-2" style={{padding: '10px 92px', fontSize: '16px'}}>Place your order</Link>
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