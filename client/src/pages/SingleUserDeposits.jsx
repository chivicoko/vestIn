import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SingleUserDeposits = () => {
    const location = useLocation();
    const [confirmed, setConfirmed] = useState(false);

    const findUserDeposits = async (id) => {
        fetch(`http://localhost:5000/api/deposits/getUserDeposits/${id}`)
        .then((response) => setConfirmed(true));
    }

    useEffect(() => {
        findUserDeposits();
    },[]);
    
  return (
    <div style={{color: 'white'}}>
        <h2 style={{marginBottom: '5px'}}>Admin Dashboard</h2>
        <div>
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <h3 style={{color: '#F08'}}>{location.state.userInfo.user.username}'s Deposits</h3>
            </div>
            {location.state.userInfo.deposits !== null ?
                <div>
                    {
                        location.state.userInfo.deposits.map((userDeposit) => {
                            return (
                                <div key={userDeposit._id} style={{border: '1px solid #F08', borderRadius: '10px', marginBottom: '10px'}}>
                                    <div style={{marginBottom: '15px'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px', fontSize: '15px'}}>
                                            <small style={{color: '#F08'}}>Crypto Currency</small>
                                            <small>{userDeposit.cryptoCurrency}</small>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '15px'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px', fontSize: '15px'}}>
                                            <small style={{color: '#F08'}}>Amount Deposited</small>
                                            <small>${userDeposit.depositeAmount}</small>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '15px'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px', fontSize: '15px'}}>
                                            <small style={{color: '#F08'}}>Date Deposited</small>
                                            <small>{new Date(userDeposit.createdAt).toLocaleString('en-US')}</small>
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                            {userDeposit.status === "Confirmed" ? 
                                                <>
                                                    <span style={{marginLeft: '12px'}}>...</span>
                                                    <p style={{marginRight: '10px'}}> <em><small>{"Confirmed"}</small></em></p>
                                                </>
                                                : 
                                                <>
                                                    <input className='btn' style={{marginLeft: '10px'}} onClick={() => findUserDeposits(userDeposit._id)} type="submit" value={"Confirm"} />
                                                    <p style={{marginRight: '10px'}}> <em><small>{userDeposit.status}</small></em></p>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                :
                <div>
                    <h1>There are no deposits yet</h1>
                </div>
            }
            
        </div>
        <Link to={'/dashboard'} style={{color: '#F08', textDecoration: 'underline'}}><p style={{marginTop: '50px'}}>Back</p></Link>
    </div>
  )
}

export default SingleUserDeposits;