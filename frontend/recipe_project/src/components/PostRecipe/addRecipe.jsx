import { AddRecipeContainer, Heading, Input, InputContainer, Label,  SubmitButton, FormContainer, TextArea, SuccessMsg, AddRecipeHeader} from "./styledComponents";
import React from 'react'
import AddRecipeSlice from "../Redux/Slices/addRecipeSlice";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
const actions = AddRecipeSlice.actions

function AddRecipe() {
  const {title, time, ingredients, process, successMsg, coverImage} = useSelector((store) => store.addRecipeState)
  const dispatch = useDispatch()

  const clickOnSubmit = async(event) => {
    event.preventDefault();
    try{
      const addNewRecipeDetails = {
        title: title,
        time: time,
        ingredients: ingredients,
        process: process,
        username: "Venky",
        image: coverImage,
        favourite: false
      }
      const options = {
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(addNewRecipeDetails)
      }
      const resp = await fetch("http://localhost:3000/createRecipe", options)
      const result = await resp.json()
      dispatch(actions.setSuccessMsg(result.message))
      dispatch(actions.setIngredients(""))
      dispatch(actions.setTime(""))
      dispatch(actions.setProcess(""))
      dispatch(actions.setTitle(""))
      dispatch(actions.setCoverImage(""))
      
      
      
    }catch(err){
      dispatch(actions.setErrorMsg(result.message))
    }
    
    
  }
  return (
    <AddRecipeContainer>
      <AddRecipeHeader>
        <Heading>Add Recipe</Heading>
        <Link to = "/">
          <CloseIcon />
        </Link>
      </AddRecipeHeader>
        
        <FormContainer action = "POST">
          <InputContainer>
            <Label>Title</Label>
            <Input type = "text" required value = {title} onChange = {(event) => {dispatch(actions.setTitle(event.target.value))}}/>
          </InputContainer>

          <InputContainer>
            <Label>Time (in minutes)</Label>
            <Input  type = "text" required value = {time} onChange = {(event)=>{dispatch(actions.setTime(event.target.value))}}  />
          </InputContainer>

          <InputContainer>
            <Label>Ingredients</Label>
            <TextArea  type = "text" required  value = {ingredients} onChange = {(event)=>{dispatch(actions.setIngredients(event.target.value))}}></TextArea>
          </InputContainer>

          <InputContainer>
            <Label>Process</Label>
            <TextArea type = "textarea" required value = {process} onChange = {(event)=>{dispatch(actions.setProcess(event.target.value))}}></TextArea>
          </InputContainer>

          <InputContainer>
            <Label>Cover image</Label>
            <Input  type = "text" required value = {coverImage} onChange = {(event)=>{dispatch(actions.setCoverImage(event.target.value))}}  />
          </InputContainer>
          <SubmitButton type = "submit" onClick = {clickOnSubmit}>Submit</SubmitButton>
          <SuccessMsg>{successMsg}</SuccessMsg>
        </FormContainer>
    </AddRecipeContainer>
  )
}

export default AddRecipe