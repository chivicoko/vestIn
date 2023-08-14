
import { Link } from 'react-router-dom';

const Orders = () => {
    
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
        
    <section class="why-choose-area three bg-gray">
        <div class="container">
            <div class="row">

                <div class="col-lg-8 offset-lg-2">
                    <div class="sec-heading  text-center">
                        <h4>Checkout (9 items)</h4>
                        <h2>Review Your Order</h2>
                    </div>
                </div>

            </div>
            <div class="row text-center">

                <div class="col-12">

                    <div class="choose-single three mb-3">

                        <div class="delivery-date text-left">
                            <h5 class="d-flex justify-content-between p-3 bg-gray">
                                <span><strong>Order Placed:</strong> August 13</span>
                                <span class="text-success"><strong>Total:</strong> $ 45.30</span>
                                <span class="text-success"><strong>Order ID:</strong> $ 304urf-w9r834-453-4f-4tfd-ffv9700847</span>
                            </h5>
                        </div>
                        <div class="two d-flex px-0">
                            <div class="col-7 testi-client-info">
                                <div class="testi-client-img">
                                    <img src="assets/images/client-2.jpg" alt="client2" />
                                </div>
                                <div class="testi-client-details text-left">
                                    <h5>6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set</h5>
                                    <p style={{color: '#ff630e'}}>Arriving on: August 28</p>
                                    <h6>Quantity: 5</h6>
                                    <div class="d-flex justify-content-between pr-5"><Link to={''}>Buy it again</Link></div>
                                </div>
                            </div>
                            
                            <div class="col-4 p-0 m-0 text-justify">
                                <Link to={'/tracking'} className="btn" style={{padding: '10px 70px', color: 'white', fontSize: '16px', borderRadius: '5px', border: 'none', outline: 'none', background: 'green', margin: '20px 0 0'}}>Track package</Link>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        </div>
    </section>
{/* 
    <script>
        document.getElementById('flexRadioDefault1').addEventListener('click', () => {
            document.querySelector('.delivery-date h5 span').innerText = document.querySelector('.delivery-1').innerText;
        });
        document.getElementById('flexRadioDefault2').addEventListener('click', () => {
            document.querySelector('.delivery-date h5 span').innerText = document.querySelector('.delivery-2').innerText;
        });
        document.getElementById('flexRadioDefault3').addEventListener('click', () => {
            document.querySelector('.delivery-date h5 span').innerText = document.querySelector('.delivery-3').innerText;
        });
    </script> */}

    </>
);
}

export default Orders;