import React, { useState } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
// import PasswordAndConfirmPasswordValidation from "./PasswordAndConfirmPasswordValidation";


import "./reg.css";

import { mobile } from "../responsive";
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/CBPT2sp/Mahatma-Gandhi-Independence-Quote-Desktop-Wallpaper.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-items:center;
  justify-content: center;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
  background-color: #f0f0f0;
  border:none;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  width: 90%;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: cream;
  color: black;
  cursor: pointer;
`;


const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "", email: "",phone:"", password: ""
  })
  // console.log(user)

  let name, value;
  const handelChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    
    // await setTimeout(function () {
    //   console.log('I will run after 2 seconds');
    // }, 2000);
    
    e.preventDefault();
    const { name, email, phone, password} = user;
    
    // if(password === cpassword){
    //   swal("Please Check Your Password");
    // }

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password
      })
    });
    const data = await res.json();
    if (res.status === 201) {
      console.log(data)
      swal("Account Created Successfull")
      history.push("/login");
    } else {
      swal("There is some error");
    }
  }


  return (
    <div className="">
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form method='POST' onSubmit={postData} >
            <Input  

            type="text" 
            required
            pattern="[a-zA-Z\s]{3,20}"
            title="Can Contain 3 to 16 characters only."  
            
            onChange={handelChange}
            value={user.name}
            name="name" 
            placeholder="Name" />

            
            <Input onChange={handelChange} value={user.phone} 
            type="tel"
            
            pattern="^[0-9]{10}$"
            title="Enter a Valid 10 Digit Number"
            required
            name="phone" 
            placeholder="Phone" />
            
            <Input onChange={handelChange} value={user.email} 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title='Match The Requested Format (name@example.com) '
                type="mail"
                required
                name="email" 
                placeholder="Email" />


            <Input onChange={handelChange} 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must Contain At Least One Number And One Uppercase And Lowercase Letter, And At Least 8 Or More Characters" 
            value={user.password} 
            name="password" 
            type="password"
            placeholder="Password" 
            required/>
            
            
           
            
            
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type='submit' >CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;