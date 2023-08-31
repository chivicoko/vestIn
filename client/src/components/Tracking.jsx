
import { Link } from 'react-router-dom';
import { useGlobContext } from '../context';

const Tracking = () => {
    const {cartItems, naira} = useGlobContext();
    
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
                    <div className="choose-single three mb-3 px-5">
                        <div className="delivery-date text-left">
                            <h5 className="p-3  bg-gray">
                            <div className="progress" style={{height: '30px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">Preparing</div>
                                <div className="progress-bar bg-white text-dark" role="progressbar" style={{width: '34%'}} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100">Shipped</div>
                                <div className="progress-bar bg-white text-dark" role="progressbar" style={{width: '33%'}} aria-valuenow="23" aria-valuemin="0" aria-valuemax="100">Delivered</div>
                            </div>
                            </h5>
                        </div>
                        <div className="two row d-flex px-0 py-5">
                            {cartItems.map(item => {
                                return (
                                        <div key={item.id} className="col-4 border d-flex justify-content-center align-items-center" style={{height: '200px'}}>
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
                            {/* <div className=""><Link to={''}>Buy it again</Link></div> */}
                            <Link to={'/orders'} className="btn btn-dark mb-2" style={{padding: '10px 70px', fontSize: '16px'}}>View all orders</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    </>
);
}

export default Tracking;