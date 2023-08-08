import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UserDeposits = ({userData}) => {
    const [userDeposits, setUserDeposits] = useState([]);

    const getUsers = async () => {
        const {data} = await axios.get("http://localhost:5000/api/users/allUsers");
        const deposits = data.deposits;
        setUserDeposits(deposits);
    }

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <div style={{color: 'white'}}>
        <h2 style={{marginBottom: '5px'}}>Admin Dashboard</h2>
        <div>
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <h3 style={{color: '#F08'}}>List of User Deposits</h3>
            </div>
            {userDeposits !== [] ?
                <div>
                    {
                        userDeposits.map((userDeposit) => {
                            return (
                                <div key={userDeposit._id} style={{border: '1px solid #F08', borderRadius: '10px', marginBottom: '20px'}}>
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

export default UserDeposits;