import React, { useState, useEffect } from "react";
import api from "../utils/api"

const Login = (props) => {
  console.log(props)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin]=useState({
    username:"",
    password:""
  })
  
  const handleChange=(event)=>{
    setLogin({...login,[event.target.name]:event.target.value})
  }

  const sendLogin=values=>{
    api()
    .post("/api/login",values)
    .then(res=>{
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      props.history.push("/bubblespage")
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  const handleSubmit=(event,values)=>{
    event.preventDefault()
    sendLogin(login)
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="User Name" value={login.username} onChange={handleChange}/>
        <input name="password" type="password" placeholder="Password" value={login.password} onChange={handleChange}/>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
