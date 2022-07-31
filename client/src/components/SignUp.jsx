import React from "react";
import styled from "styled-components";
import { WelcomeBtn } from "./Welcome";
const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;

    h2 {
        text-align: center;
        margin: 40px 0px;
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
        font-size: .75rem;
        opacity: .65;
        margin: 5px 0;
        display: inline-block;
        
    }

    label::before {
        position: absolute;
        content: "";
        width: 100%;
        background-color: black;
        bottom: 10%;
    }

  .name {
    display: flex;
    gap: 15px;
  }
`;

const SignUpBtn = styled(WelcomeBtn)`
    padding: 3px 10px;
    margin: 30px;
    &:hover {
        background: #BED4CD;
        color: #222;
    }
`;


export default function SignUp({}) {
  return (
    <UserForm>
        <h2>Sign up to start writing your first nuanced note!</h2>
      <div className="name">
        <div className="firstname">
          <label htmlFor="firstName" name="firstName" id="firstName" required>
            First Name
          </label>
          <input type="text" />
        </div>
        <div className="lastname">
          <label htmlFor="lastName" name="lastName" id="lastName" required>
            Last Name
          </label>
          <input type="text" />
        </div>
      </div>
      <label htmlFor="userName" name="userName" id="userName" required>
        User Name
      </label>
      <input type="text" />
      <label htmlFor="email">Email </label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">Password </label>
      <input type="password" name="password" id="password" required />
      <label htmlFor="password">Confirm Password </label>
      <input type="password" name="password" id="confirmPassword" required />
      <SignUpBtn type="submit" name="signup">
        Sign Up
      </SignUpBtn>
    </UserForm>
  );
}
