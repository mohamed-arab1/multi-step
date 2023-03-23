import styled from "styled-components";

export const ButtonBox = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        a{
            text-decoration: none;
        }
        span{
            cursor: pointer;
            color: #9696a0;
        }

        button{
            width: 5.3rem;
            padding: 0.7rem 0;
            background: #174a8b;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
`