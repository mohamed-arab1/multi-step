import React from 'react'
import { PickAddWrapper } from './PickAddStyle';
import { Link } from 'react-router-dom';
import "../../App.css"

export const PickAdd = (
    {
        online,
        larger,
        customizable,
        setOnline,
        setLarger,
        setCustomizable,
        date
    }
) => {

    return (
        <>
            <PickAddWrapper>
                <div className='wrapper'>
                    <div className='pick-wrapper'>
                        <h2>Pick add-ons</h2>
                        <p>Add-ons help enhance your gaming experience.</p>
                    </div>
                    <div className='check-boxs'>
                        <div className='check-box' >
                            <div className='left-box'>
                                <label className='custom-checkbox' >
                                    <input type="checkbox" checked={online} />
                                    <span className='checkmark' onClick={() => setOnline(!online)}></span>
                                </label>
                                <div className='text'>
                                    <h4>Online service</h4>
                                    <p>Access to multiplayer games</p>
                                </div>
                            </div>
                            <div className='right-box'>
                                <span>+${date === "Yearly" ? "10/yr" : "1/mo"}</span>
                            </div>
                        </div>
                        <div className='check-box' >
                            <div className='left-box'>
                            <label className='custom-checkbox' >
                                    <input type="checkbox" checked={larger} />
                                    <span className='checkmark' onClick={() => setLarger(!larger)}></span>
                                </label>
                                <div className='text'>
                                    <h4>Larger storage</h4>
                                    <p>Extra 1TB of cloud save</p>
                                </div>
                            </div>
                            <div className='right-box'>
                                <span>+${date === "Yearly" ? "20/yr" : "2/mo"}</span>
                            </div>
                        </div>
                        <div className='check-box'>
                            <div className='left-box'>
                            <label className='custom-checkbox'>
                                    <input type="checkbox" checked={customizable} />
                                    <span className='checkmark' onClick={() => setCustomizable(!customizable)}></span>
                                </label>
                                <div className='text'>
                                    <h4>Customizable Profile</h4>
                                    <p>Custom theme on your profile</p>
                                </div>
                            </div>
                            <div className='right-box'>
                                <span>+${date === "Yearly" ? "20/yr" : "2/mo"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button-box'>
                    <Link to="/yourPlan">
                        <span>Go Back</span>
                    </Link>
                    <Link to="/finishing">
                        <button type='submit'>Next Step</button>
                    </Link>
                </div>
            </PickAddWrapper>
        </>
    )
}
