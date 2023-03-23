import styled from "styled-components";

export const PlanWrapper = styled.div`
    padding-top: 4rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 55%;

    .wrapper{
        .text-box{
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 0.5rem;

        h2{
            color: #072e65;
            font-size: 35px;
        }
        p{
            color: #9c9da2;
        }
    }

    .plan-box{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        

        .card-box{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;

            .card{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            border: 1px solid #dadadc;
            padding: 1rem 0 1rem 1rem;
            border-radius: 5px;
            cursor: pointer;



            img{
                width: 40px;
                height: 40px;
            }

            .text-card{
                h3{
                    margin-bottom: 0.5rem;
                    color: #323e54;
                }
                p{
                    color: #95959f;
                    margin-bottom: 0.1rem;
                }
            }
            }

            .focus{
                border-color: #524e98 !important;
                background-color: #f8f9fe !important;
            }
        }
        .toggel-button{
            margin-top: 2rem;
            padding:0.7rem 0 ;
            width: 100%;
            background-color: #f8f9fe;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            
            span{
                color: #9f9fa9;
                transition: 0.2s;
                font-size: 17px;
                font-weight: bold;
            }

            .month,
            .year{
                color: #172a48;
                transition: 0.2s;
            }

            button{
                width: 70px;
                height: 25px;
                border: none;
                background-color: #03285c;
                border-radius: 13px;
                cursor: pointer;

                span{
                    width: 20px;
                    height: 20px;
                    background-color: #fff;
                    display: flex;
                    border-radius: 50%;
                    
                }
                .right{
                    transform: translateX(43px);
                    transition: 0.2s;
                }
                .left{
                    transform: translateX(8px);
                    transition: 0.2s;
                }
            }
        }
    }

    }
    .button-box{
        margin-top: 3.5rem;
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

            .text-box{
                h2{
                    font-size: 25px;
                }
                p{
                    font-size: 17px;
                }
            }

            .plan-box{
                .card-box{
                    grid-template-columns: repeat(1,1fr);
                    gap: 0.5rem;

                    .card{
                        flex-direction: row;

                        .text-card{

                            h3{
                                margin-bottom: 0.3rem;
                                font-size: 17px;
                            }

                            p{
                                font-size: 14px;
                            }
                        }
                    }
                }
                .toggel-button{
                    margin: 0;
                }
            }
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

    @media screen and (max-width: 380px){
        .wrapper{
            .text-box{
                h2{
                    font-size: 20px;
                }
                p{
                    font-size: 13px;
                }
            }
            .plan-box{
                .card-box{
                    .card{
                        .text-card{
                            h3{
                                margin-bottom: 0.1rem;/
                            }
                        }
                    }
                }
                .toggel-button{
                    gap: 0.2rem;
                }
            }
        }
    }

    `