import React from 'react'

import {Container, Title, Form, Input, InputGroup, Label, Button, RegisterText, Error} from "./styledComponents"
import Header from '../Header/Header'
import Cookies from "js-cookie"
import { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate, Navigate} from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken")
  if(userToken !== undefined){
    return <Navigate to ="/" />
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleLogin = async(e) => {
    try{
      e.preventDefault();
      if (!email || !password) {
        setError('Please fill in all fields.');
      }
      // if (!/\S+@\S+\.\S+/.test(email)) {
      //   setError('Please enter a valid email address.');
      // }
      const userData = {
        email: email,
        password: password
      }
      const options = {
        method: "POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(userData)
      }
      const resp = await fetch("http://localhost:3000/user/login", options)
      const result = await resp.json()
      console.log(result)
      if(result.status === "Success"){

        Cookies.set('userDetails', JSON.stringify(result.message.userData), { expires: 7 });
        Cookies.set('userToken', result.message.token, { expires: 7 });
        navigate("/")
      }
      else{
        setError(result.message)
      }
    }catch(err){
      setError(err.message);
    }
    // console.log('Logging in with', { email, password });
    // setError('');
    // alert('Login successful!');
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleLogin} action = "POST">
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </InputGroup>
        {error && <Error>{error}</Error>}
        <Button type="submit">Login</Button>
        <Link to = "/register">
          <RegisterText>
            Register
            < FaLongArrowAltRight />
          </RegisterText>
        </Link>
        
      </Form>
      
    </Container>
  );
}

export default LoginPage;