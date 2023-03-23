import styled from "styled-components";

export const PickAddWrapper = styled.div`
    padding-top: 3rem;
    padding-left: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 55%;

    .wrapper{
        .pick-wrapper{
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


    .check-boxs{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 95%;
        .check-box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #dbdadf;
            padding: 1.5rem;
            border-radius: 7px;
            cursor: pointer;

            .left-box{
                display: flex;
                align-items: center;
                gap: 1rem;
                .text{
                    h4{
                        color: #314871;
                        font-size: 19px;
                        margin-bottom: 0.3rem;
                    }
                    p{
                        color: #9699a0;
                        font-size: 15px;
                    }
                }
            }

            .right-box{
                span{
                    color: #46428c;
                    font-weight: bold;
                }
            }
        }
    }
    }

    .button-box{
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
    }

    @media screen and (max-width: 991px){
        width: 60%;
    }
    @media screen and (max-width: 756px){
        padding-top: 2.5rem;
        padding-left: 2.5rem;
    }
    @media screen and (max-width: 687px){
        width: 100%;
        padding: 0;
        position: absolute;
        top: 16%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 84%;

        .wrapper{
            background-color: #fff;
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
            height: 82%;
        }

        .button-box{
            margin-top: 0;
            height: 15%;
            align-items: center;
            background: #fff;
            button{
                margin-right: 0.5rem;
            }
            span{
                margin-left: 0.5rem;
            }
        }
    }

    @media screen and (max-width: 464px){
        .wrapper{
            .pick-wrapper{
                gap: 1rem;

                h2{
                    font-size: 30px;
                }
                p{
                    font-size: 15px;
                }
            }

            .check-boxs{
                gap: 0.5rem;
            }
        }
    }
    @media screen and (max-width: 424px){
        .wrapper{
            .check-boxs{
                .check-box{
                    .left-box{
                        .text{
                            h4{
                                font-size: 17px;
                            }
                            p{
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
    
    @media screen and (max-width: 400px){
        .wrapper{
            .check-boxs{
                .check-box{
                    padding: 1rem;
                    .left-box{
                        .text{
                            h4{
                                font-size: 17px;
                            }
                            p{
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 390px){
        .wrapper{
            padding: 1rem;
            .pick-wrapper{
                gap: 0.2rem;
            }
            .check-boxs{
                .check-box{
                    padding: 1rem;

                    .left-box{
                        .text{
                            h4{
                                font-size: 17px;
                            }
                            p{
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 320px){
        .wrapper{

            .check-boxs{
                margin-top: 0.5rem;
                .check-box{
                    padding: 0.5rem;
                    .left-box{
                        .text{
                            h4{
                                font-size: 15px;
                            }
                            p{
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
`