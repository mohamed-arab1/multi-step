import React, { useState } from 'react';
import { Warning } from './Warning';
import { YourInfoWrapper } from './yourInfoStyle';
import { Link } from 'react-router-dom';

export const YourInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState({value: "", isToched: false});

    return (
        <YourInfoWrapper>
            <div className='wrapper'>
                <div className='info'>
                    <h2>Personal info</h2>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className='form-info'>
                    <form action='yourPlan'>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='e.g. Stephen King' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="email" placeholder='e.g. stephenking@lorem.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <div className='text-box'>
                                <label>Phone Number</label>
                                {phone.value < 1 && phone.isToched ? (<Warning />) : null}
                            </div>
                            <input type="text" className={phone.value < 1 && phone.isToched ? "warning": ""} placeholder='e.g. +1 234 567 890' value={phone.value} onChange={(e) => setPhone({...phone, value: e.target.value})} onBlur={()=> setPhone({...phone, isToched: true})} />
                            
                        </div>
                    </form>
                </div>
            </div>
            <div className='submit-button'>
                <Link to={phone.value ? "/yourPlan" : "/"}>
                    <button type='submit'>Next step</button>
                </Link>
            </div>
        </YourInfoWrapper>
    )
}
