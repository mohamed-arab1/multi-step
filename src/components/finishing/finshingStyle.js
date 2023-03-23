import styled from "styled-components";

export const FinishingWrapper = styled.div`
    padding-top: 4.5rem;
    padding-left: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 65%;

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

    .finshing-box{
        display: flex;
        flex-direction: column;
        width: 75%;
        gap: 1.5rem;

        p{
            color: #95959f;
        }

        span{
            color: #314871;
        }


        .details{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            background-color: #f8f9fe;
            padding: 1.3rem;
            border-radius: 7px;

            .content{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .head-text{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    h3{
                        color: #314871;
                    }
                    a{
                        color: #95959f;
                    }
                }

                .price{
                    span{
                        color: #314871;
                        font-weight: bold;
                    }
                }
            }

            .sub-text{
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .box{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }

        .total{
            padding: 1.3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3{
                font-weight: bold;
                color: #493efe;
            }
        }
    }
    }

    .button-box{
        width: 75%;
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
            background: #493efe;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 991px){
        width: 65%;
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

            .finshing-box{
                width: 100%;
            }
        }

        .button-box{
            width: 100%;
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

    @media screen and (max-width: 360px){
        .wrapper{
            .info{
                h2{
                    font-size: 27px;
                }
                p{
                    font-size: 15px;
                    margin-bottom: 0.5rem;
                }
            }
            .finshing-box{
                .details{
                    .content {
                        .head-text{
                            h3{
                                font-size: 16px;
                            }
                            a{
                                font-size: 14px;
                            }
                        }
                        .price{
                            span{
                                font-size: 14px;
                            }
                        }
                    }

                    .sub-text{
                        .box{
                            p,
                            span{
                                font-size: 14px;
                            }
                        }
                    }
                }
                .total{
                    padding: 0.5rem;
                    p{
                        font-size: 14px;
                    }
                    h3{
                        font-size: 15px;
                    }
                }
            }
        }
    }
`