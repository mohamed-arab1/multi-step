import styled from "styled-components";

export const ThankYouWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 4.5rem;
    width: 55%;

    .thankYou-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1.5rem;

        h2{
            font-weight: bold;
            color: #01132b;
        }
        p{
            line-height: 1.5rem;
            color: #9699a0;
        }
    }

@media screen and (max-width: 687px){
    width: 90%;
    padding: 0;
    position: absolute;
    top: 26%;
    left: 5%;
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    height: 60vh;
}
`