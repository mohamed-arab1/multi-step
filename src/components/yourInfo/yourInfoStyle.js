import styled from "styled-components";

export const YourInfoWrapper = styled.div`
    padding-top: 4.5rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 55%;

    .wrapper{
        .info{
        display:flex;
        flex-direction: column;
        gap: 0.5rem;

        h2{
            color: #072e65;
            font-size: 35px;
        }
        p{
            color: #9c9da2;
        }
    }

    .form-info{
        form{
            display: flex;
            flex-direction: column;
            gap: 2rem;

            div{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;

                input{
                    height: 2.5rem;
                    padding: 0.5rem;
                    border-radius: 5px;
                    border: 2px solid #d9d9db;

                    &:focus{
                        outline: none;
                        border-color: #544c95;
                    }
                }
                label{
                    color: #072e65;
                }
                .text-box{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    color: #e3334a;
                }
                .warning{
                    border-color: #e3334a;
                }
            }
        }
    }
    }

    .submit-button{
                width: 100%;
                display: flex;
                justify-content: end;
                align-items: end;
                margin-top: 1.5rem;
                button{
                    width: 5.3rem;
                    padding: 0.7rem 0;
                    background: #174a8b;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }

    @media screen and (max-width: 991px){
        width: 60%;
    }
    @media screen and (max-width: 756px){
        padding-left: 2.5rem;
    }
    @media screen and (max-width: 687px){
        width: 100%;
        padding: 0;
        position: absolute;
        top: 26%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 74%;

        .wrapper{
            background-color: #fff;
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
        }

        .submit-button{
            margin-top: 0;
            height: 15%;
            align-items: center;
            background: #fff;
            button{
                margin-right: 1rem;
            }
        }
    }

    @media screen and (max-width: 410px){
        .wrapper{
            .info{
                h2{
                    font-size: 25px;
                }
                p{
                    font-size: 15px;
                }
            }
            .form-info{
                form{
                    div{
                        label{
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 320px){
        .wrapper{
            .info{
                h2{
                    font-size: 20px;
                }
                p{
                    font-size: 12px;
                }
            }
            .form-info{
                form{
                    div{
                        label{
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }

`