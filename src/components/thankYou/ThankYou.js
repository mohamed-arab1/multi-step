import React from 'react';
import { ThankYouWrapper } from './thankYouStyle';
import thankImg from '../../images/icon-thank-you.svg';

export const ThankYou = () => {
    return (
        <ThankYouWrapper>
            <div className='thankYou-box'>
                <img src={thankImg} alt="" />
                <h2>Thank you!</h2>
                <p>
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </ThankYouWrapper>
    )
}
