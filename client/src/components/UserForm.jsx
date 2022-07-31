import React from "react";
import styled from "styled-components";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const UserDiv = styled.div`
    max-width: 400px;
`


export default function UserForm({formState}) {

  return (
    <UserDiv>
      {formState === "Log In" ?  <LogIn /> : <SignUp />}
    </UserDiv>
  );
}
