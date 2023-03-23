import React from 'react';
import { Link } from 'react-router-dom';
import { PlanWrapper } from './YourPlanStyle';


export const YourPlan = ({ data, date, toggelButton, checkId, setCheckId }) => {


    return (
        <PlanWrapper>
            <div className='wrapper'>
                <div className='text-box'>
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>
                <div className='plan-box'>
                    <div className='card-box'>
                        {
                            data.map((card) => (
                                <div className={`card ${checkId === card.id ? "focus" : ""}`} key={card.id} onClick={() => setCheckId(card.id)}>
                                    <img src={card.icon} alt={card.planName} />
                                    <div className='text-card'>
                                        <h3>{card.planName}</h3>
                                        <p>${card.subtitle.toString()}/{date === "Yearly" ? "yr" : "mo"}</p>
                                        <p>{card.discount}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='toggel-button'>
                        <span className={date === "Yearly" ? "" : "month"}>Monthly</span>
                        <button onClick={toggelButton}>
                            <span className={date === "Yearly" ? "right" : "left"}></span>
                        </button>
                        <span className={date === "Yearly" ? "year" : ""}>Yearly</span>
                    </div>
                </div>
            </div>
            <div className='button-box'>
                <Link to="/">
                    <span>Go Back</span>
                </Link>
                <Link to="/pickAdd">
                    <button type='submit'>Next Step</button>
                </Link>
            </div>
        </PlanWrapper>
    )
}
