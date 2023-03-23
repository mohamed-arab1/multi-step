import React from 'react'
import { FinishingWrapper } from './finshingStyle'
import { Link } from 'react-router-dom'

export const Finshing = ({ date, filterData, filterDataOfPick }) => {

    const totalPrice = () => {
        if (filterDataOfPick.length === 0) return 0;

        let count = 0;
        for (let i = 0; i < filterDataOfPick.length; i++) {
            count += filterDataOfPick[i].price;
        }

        return count;
    }


    return (
        <FinishingWrapper>
            <div className='wrapper'>
                <div className='info'>
                    <h2>Finishing up</h2>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                {
                    filterData.length !== 0 ?
                        <div className='finshing-box'>
                            <div className='details'>
                                <div className='content'>
                                    <div className='head-text'>
                                        <h3>{filterData[0].planName} ({date})</h3>
                                        <Link to="/yourPlan">change</Link>
                                    </div>
                                    <div className='price'>
                                        <span>${filterData[0].subtitle.toString()}/{date === "Yearly" ? "yr" : "mo"}</span>
                                    </div>
                                </div>
                                <hr />
                                <div className='sub-text'>
                                    {
                                        filterDataOfPick.length === 0 ? "" : filterDataOfPick.map(data => (
                                            <div className='box' key={data.id}>
                                                <p>{data.namePick}</p>
                                                <span>+${data.price.toString()}/{date === "Yearly" ? "yr" : "mo"}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='total'>
                                <p>Total (per {date === "Yearly" ? "year" : "month"})</p>
                                <h3>+${(totalPrice() + filterData[0].subtitle).toString()}/mo</h3>
                            </div>
                        </div> :
                        <div className='finshing-box'>
                            <h2>pleas selct your plan</h2>
                            <Link to="/yourPlan">change</Link>
                        </div>
                }
            </div>
            <div className='button-box'>
                <Link to="/pickAdd">
                    <span>Go Back</span>
                </Link>
                {
                    filterData.length !== 0 &&
                    <Link to="/thankYou">
                        <button type='submit'>Confirm</button>
                    </Link>
                }
            </div>
        </FinishingWrapper>
    )
}
