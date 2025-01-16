import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Container, Title, Form, InputGroup, Input, Label, Success, Error, Button, LoginText } from './styledComponents';

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(formData)
  const handleRegister = async(e) => {
    try{
      e.preventDefault();
      const { fullName, email, password, confirmPassword } = formData;

      // Basic validation
      if (!fullName || !email || !password || !confirmPassword) {
        setError('Please fill in all fields.');
        setSuccess('');
        return;
      }
      console.log(formData)
      const options = {
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
      }
      const resp = await fetch("http://localhost:3000/user/register", options)
      const result = await resp.json()
      // console.log(result)
      
      setError('');
      setSuccess(result.status);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }catch(err){
      console.log(err.status)
    }
    
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form action = "POST">
        <InputGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
          />
        </InputGroup>
        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}
        <Button type="submit" onClick ={handleRegister}>Register</Button>
        <Link to = "/login">
        <LoginText>
          <FaLongArrowAltLeft />
          Login
        </LoginText>
        </Link>
      </Form>
    </Container>
  );
}

export default RegisterPage;
