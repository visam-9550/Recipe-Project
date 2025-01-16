import styled from "styled-components"

export const AddRecipeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(65, 65, 65);
`
export const AddRecipeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`

export const Heading = styled.h1`
    font-size: 26px;

`

export const FormContainer = styled.form`
    background-color:rgb(141, 143, 137);
    min-height: 40%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-conetnt: center;
    flex-direction: column;
    padding: 20px;
    @media screen and (max-width: 576px){
        width: 90%;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

`

export const Label = styled.label`
    color: black;
    font-weight: 500;
    font-family: Roboto;

`

export const Input = styled.input`
    height: 25px;
    width: 300px;
    padding: 5px;
    background-color: rgb(102, 102, 100);
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    color: black;
    font-family: Caveat;
    font-weight: 700;
    @media screen and (max-width: 576px){
        width: 250px;
    }
`
export const TextArea = styled.textarea`
    min-height: 70px;
    width: 300px;
    padding: 5px;
    background-color: rgb(102, 102, 100);
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    color: black;
    font-family: Caveat;
    font-weight: 700;
    @media screen and (max-width: 576px){
        width: 250px;
    }
`

export const SubmitButton = styled.button`


`
export const SuccessMsg = styled.p`
    color:rgb(2, 15, 1);
    font-weight: bold;
    font-family: Roboto;
    text-align: center;
`