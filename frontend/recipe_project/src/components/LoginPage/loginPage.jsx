import React from 'react'

import {LoginPageContainer} from "./styledComponents"
import Header from '../Header/Header'

function LoginPage() {
  return (
    <LoginPageContainer className="login-page-container">
        <Header></Header>
        <h1>Login</h1>
    </LoginPageContainer>
  )
}

export default LoginPage