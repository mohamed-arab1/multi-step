import React from 'react';
import "../../App.css"
import { SideBarWrapper } from './styleSiedeBar';

export const SideBar = ({ url }) => {
    return (
        <SideBarWrapper className='sidebar'>
            <div className='Box-nav'>
                <div className='Box'>
                    <span className={url === '/' ? "active-step" : ''} >1</span>
                    <div>
                        <p>Step 1</p>
                        <h3>Your info</h3>
                    </div>
                </div>
                <div className='Box'>
                    <span className={url === '/yourPlan' ? "active-step" : ''} >2</span>
                    <div>
                        <p>Step 2</p>
                        <h3>Select plan</h3>
                    </div>
                </div>
                <div className='Box'>
                    <span className={url === '/pickAdd' ? "active-step" : ''} >3</span>
                    <div>
                        <p>Step 3</p>
                        <h3>Add-ons</h3>
                    </div>
                </div>
                <div className='Box'>
                    <span className={url === '/finishing' ? "active-step" : ''} >4</span>
                    <div>
                        <p>Step 4</p>
                        <h3>Summary</h3>
                    </div>
                </div>
            </div>
        </SideBarWrapper>
    )
}
