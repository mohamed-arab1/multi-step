import React from 'react';
import { ButtonBox } from './buttonStyle';
import { Link } from 'react-router-dom';

export const Button = ({linkBack, linkNext}) => {
    return (
        <ButtonBox>
            <Link to={linkBack}>
                <span>Go Back</span>
            </Link>
            <Link to={linkNext}>
                <button type='submit'>Next Step</button>
            </Link>
        </ButtonBox>
    )
}
