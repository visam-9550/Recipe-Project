import styled from "styled-components"
export const HomeContainer = styled.div`
    height: 80vh;
    width: 100vw;
`

export const BannerContainer = styled.div`
    width: 100vw;
    min-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://t3.ftcdn.net/jpg/07/11/56/50/240_F_711565001_KjqAggJipxx6wz9kXq0BJKoEAEw9bKTw.jpg");
    opacity: 0.7;
    background-size: cover;
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-height: 90vh;
    }
`
export const BannerTitle = styled.h1`
    font-family: 'Lobster', cursive;
    font-weight: bold;
    font-size: 72px;
    color: rgb(231, 244, 244);
    opacity: 1;
    text-align: center;
    margin-bottom: 10px;
    @media screen and (max-width: 767px){
        font-size: 52px;
        font-weight: 700;
    }
`
export const BannerDescription = styled.p`
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-top: 0px;
    font-family:  Monton;
    color: white;
    @media screen and (max-width: 767px){
        font-size: 16px;
        font-weight: 700;
    }
`
export const BannerLeftContainer = styled.div`
    width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
export const BannerRightContainer = styled.div`
    opacity: 1px;
`
export const ShareRecipeButton = styled.button`
    outline: none;
    background-color: rgb(4, 76, 176);
    @media screen and (max-width: 767px){
        font-size: 14px;
        font-weight: 700;
    }
`
export const BannerImage = styled.img`
    margin-left: auto;
    width: 500px;
    @media screen and (max-width: 767px){

        display: none;
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
        width: 400px;
        height: 400px;
        background-size: cover;
    }
`
export const RecipesContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    padding-top: 20px;
    background-color: rgb(191, 191, 112);
    padding-bottom: 30px;
`

