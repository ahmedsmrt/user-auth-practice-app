import React from "react";
import styled from "styled-components";
import { WelcomeBtn } from "./Welcome";


const LogInForm = styled.form`
     display: flex;
    flex-direction: column;
    margin: 25px auto;
    width: 90%;


    h2 {
        text-align: center;
        margin: 25px 0px;
        font-weight: 300;
    }



    input {
        border-radius: 15px;
        outline: none;
        border: none;
        width: 100%;
        text-indent: 10px;
    }

    

    label {
        position: relative;
        font-size: .85rem;
        opacity: .65;
        margin: 10px 0;
        display: inline-block;
    }

    label::before {
        position: absolute;
        content: "";
        width: 100%;
        background-color: black;
        bottom: 10%;
    }


`;

const SignUpBtn = styled(WelcomeBtn)`
    padding: 3px 10px;
    margin: 45px;
    
`;



export default function LogIn() {
  return (
    <LogInForm>
                <h2>Welcome back!</h2>
      <label htmlFor="userName">
        User Name
      </label>
      <input type="text" name="userName" id="userName" required  />
      <label htmlFor="password">Password </label>
      <input type="password" name="password" id="password" required />
      <SignUpBtn type="submit" name="login">Log In</SignUpBtn>
    </LogInForm>
  );
}
