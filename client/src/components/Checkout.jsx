
import { Link } from 'react-router-dom';

const Checkout = () => {
    
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

                <div class="col-md-8">

                    <div class="choose-single three mb-3">

                        <div class="delivery-date text-left">
                            <h5>Delivery Date: <span class="text-success"></span></h5>
                        </div>
                        <div class="two d-flex px-0">
                            <div class="col-7 testi-client-info">
                                <div class="testi-client-img">
                                    <img src="assets/images/client-2.jpg" alt="client2" />
                                </div>
                                <div class="testi-client-details text-left">
                                    <h5>6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set</h5>
                                    <p style={{color: '#ff630e'}}>$44.83</p>
                                    <h6>Quality: 5</h6>
                                    <div class="d-flex justify-content-between pr-5"><Link to={''}>Update</Link> <Link to={''}>Delete</Link></div>
                                </div>
                            </div>
                            
                            <div class="col-4 p-0 m-0 text-justify">
                                <div class="testi-rating">
                                    <h5 class="">Choose a delivery option</h5>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1"> <span class="delivery-1 text-success">Wednesday, August 16</span> <br/> $9.99 - shipping </label>
                                </div>
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label class="form-check-label" for="flexRadioDefault1"> <span class="delivery-2 text-success">Thursday, August 17</span> <br/> $5.04 - shipping </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                    <label class="form-check-label" for="flexRadioDefault1"> <span class="delivery-3 text-success">Friday, August 18</span> <br/> FREE shipping </label>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                
                <div class="col-md-4 pr-0">
                    <div class="choose-single three">
                        <div class="why-choose-cont three">
                            <h3 class="text-left">Order Summary</h3>
                            <p class="d-flex justify-content-between"><span>Items (9)</span><span>$243.10</span></p>
                            <p class="d-flex justify-content-between"><span>Shipping and handling</span><span style={{borderBottom: '1px solid gray'}}>$5.56</span></p>
                            <p class="d-flex justify-content-between"><span>Total before tax</span><span>$243.10</span></p>
                            <p class="d-flex justify-content-between"><span>Estimated tax (10%)</span><span>$24.32</span></p>
                            <hr/>
                            <h5 class="d-flex justify-content-between"><span>Order total:</span><span>$267.41</span></h5>
                            <hr/>
                            <div class="text-left mb-4">Use Paypal <input type="checkbox" name="" id="" /></div>
                            <Link to={'/orders'} className="btn" style={{padding: '10px 97px', color:'white', fontSize: '16px', borderRadius: '5px', border: 'none', outline: 'none', background: 'green', margin: '0 0 50px'}}>Place your order</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* <script>
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

export default Checkout;