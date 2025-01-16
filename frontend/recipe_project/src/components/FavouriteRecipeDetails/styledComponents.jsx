import styled from "styled-components";

export const RecipeDetailsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #806b33;
    color: black;
    display: flex;
    position: relative;
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`
export const FavouriteRecipeDetailsLeftContainer = styled.div`
    margin-left: 30px;
    background-color: #8c241b;
    width: 40%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const IngredientsHeading = styled.h1`
    font-size: 20px;
    font-weight: 700;
    text-decoration: underline;
`
export const RecipeIngredients = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    margin-left: 10px;
    color:#adadac;
    text-align: center;
`
export const RecipeTitle = styled.h1`
    font-weight: 700;
    font-size: 42px;
    font-style: italic;
    font-family: "Times New Roman", Times, serif;
    text-decoration: underline;
    color: black;
    @media screen and (max-width: 767px){
        font-size: 28px;
        text-align: center;
    }
`
export const TimeDurationHeading = styled.h1`
    font-size: 20px;
    font-weight: 700;
    text-decoration: underline;
`
export const TimeDuration = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    margin-left: 10px;
    color:#adadac;
    text-align: center;
`
export const FavouriteRecipeDetailsRightContainer = styled.div`
    background-color: #2b7560;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const ImageTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const RecipeImage = styled.img`
    background-size: cover;
    height: 250px;
    width: 450px;
    margin: 20px;
    box-shadow: 0px 0px 15px 10px #01170e;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    @media screen and (max-width: 576px){
        height: 200px;
        width: 90%;
    }
    @media screen and (max-width: 767px) and (min-width: 577px){
        height: 200px;
        width: 320px;
    }
`
export const ProcessHeading = styled.h3`
    font-family: Roboto;
    margin-left: 30px;
    text-decoration: underline;
`
export const Process = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    margin-left: 10px;
    color:#010a5e;
    text-align: center;
`
export const FavouriteRecipeDetailsMobileViewContainer = styled.div`
    @media screen and (max-width: 767px){
        display: flex;
    }
    @media screen and (min-width: 768px){
        display: none;
    }
    
    background-color: #8c241b;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`












export const RecipeDetailsTopContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
    }
`

export const RecipeDetailsTopDescrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    margin-left: 30px;
`


export const Span = styled.span`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    color: grey;
`
export const HRLine = styled.hr`
    border: solid 1px grey;
    width: 90%;
`
export const RecipeDetailsTopProcessContainer = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

