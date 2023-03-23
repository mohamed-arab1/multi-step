import styled from "styled-components";

export const SideBarWrapper = styled.div`
    width: 30%;
    height: calc(100% - 2rem);
    background-repeat: no-repeat;
    background-size: auto;
    margin: 1rem;

    .Box-nav{
        display: flex;
        flex-direction: column;
        padding: 2rem 0 0 2rem;
        gap: 1.5rem;
        .Box{
            display: flex;
            gap: 1rem;
            align-items: center;
            span{
                    width: 30px;
                    height: 30px;
                    border: 1px solid #e3e1ff;
                    text-align: center;
                    border-radius: 50%;
                    line-height: 30px;
                    font-weight: bold;
                    color: #e3e1ff;
                    cursor: pointer;
                }
                .active-step{
                    background-color: #bee2f8;
                    color: #02264a;
                    border: none;
                }
            div{
                display: flex;
                flex-direction: column;

                h3{
                    color: #e3e1ff;
                }
                
                p{
                    color: #afafff;
                }
            }
        }
    @media screen and (max-width: 687px){
        padding: 2rem 0 0 0.7rem; 
    }
    }

    @media screen and (max-width: 687px){
        width: 100%;
        height: 250px;
        margin: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: 85%;

        .Box-nav{
            flex-direction: row;
            justify-content: center;
            .Box div{
                display: none;
            }
        }
    }
`