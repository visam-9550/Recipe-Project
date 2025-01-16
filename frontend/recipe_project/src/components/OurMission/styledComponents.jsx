import styled from "styled-components";

export const OurMissionContainer = styled.div`
    background-color: #1E1E1E;
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 30px;
`
export const OurMissionTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const OurMissionHeading = styled.h1`
    font-size: 35px;
    margin-bottom: 5px;
    font-family: Monton;
    color: rgba(188, 82, 25, 0.75);
`
export const OurMissionLogoImage = styled.img`
    height: 250px;
    width: 600px;
    background-size: cover;
    margin-top: 0px;
    @media screen and (max-width: 767px){
        width: 70%;
    }
    // @media screen and (max-width: 767px) and (min-width: 577px){
    //     width: 40%;
    // }
`
export const OurMissionDescription = styled.p`
    font-size: 16px;
    text-align: center;
    font-weight: 700;
`
export const HRLine = styled.hr`
    border: 1px solid white;
`
export const OurMissionCardContainersHeading = styled.h1`
    color: rgba(209, 200, 75, 0.75);
    text-align: left;
    font-size: 20px;
    text-align: center;
    text-decoration: underline;
`
export const OurMissionCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 576px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    // @media screen and (max-width: 767px) and (min-width: 577px){
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     flex-wrap: wrap;
    // }
`
export const CardContainer1 = styled.div`
    background-color:rgba(174, 169, 95, 0.75);
    width: 20%;
    margin: 10px;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px;
    position: relative;
    &:hover{
        background-color: rgba(12, 23,4,5,5);
    }
    @media screen and (max-width: 576px){
        width: 70%;
    }
    @media screen and (max-width: 767px) and (min-width: 577px){
        width: 40%;
    }
`
export const CardContainer2 = styled.div`
    background-color:rgba(184, 99, 42, 0.75);
    width: 20%;
    margin: 10px;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px;
    position: relative;
    &:hover{
        background-color: rgba(12, 23,4,5,5);
    }
    @media screen and (max-width: 576px){
        width: 70%;
    }
    @media screen and (max-width: 767px) and (min-width: 577px){
        width: 40%;
    }
`
export const CardContainer3 = styled.div`
    background-color:rgba(131, 60, 118, 0.75);
    width: 20%;
    margin: 10px;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px;
    position: relative;
    &:hover{
        background-color: rgba(12, 23,4,5,5);
    }
    @media screen and (max-width: 576px){
        width: 70%;
    }
     @media screen and (max-width: 767px) and (min-width: 577px){
        width: 40%;
    }
`
export const CardContainer4 = styled.div`
    background-color:rgba(78, 119, 156, 0.75);
    width: 20%;
    margin: 10px;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px;
    position: relative;
    &:hover{
        background-color: rgba(12, 23,4,5,5);
    }
    @media screen and (max-width: 576px){
        width: 70%;
    }
    @media screen and (max-width: 767px) and (min-width: 577px){
        width: 40%;
    }
`
export const CardContainerImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 0.5;
    border-radius: 10px;
    &:hover{
        display: none;
        // opacity: 1;
    }
`
export const CardContainerTitle = styled.h1`
    color: black;
    font-size: 28px;
    text-align: center;
    position: absolute;
    @media screen and (min-width: 768px) and (max-width: 991px){
        font-size: 24px;
    }

`
