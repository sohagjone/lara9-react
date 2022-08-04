
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  Header  from './Header';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      navigate('/add')
    }
}, [])
  /*const http = axios.create({
  baseURL:"http://127.0.0.1:8000/api",
  method:'POST',
  headers:{
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
  },
  body:JSON.stringify({
    email:email,
    password: password
})
});

const submitForm = () =>{
  // api call
  http.post('/login',{email:email,password:password}).then((res)=>{
     navigate('/add');
      
  })
}*/
async function login(){
  console.log('data', email, password)
  let item = {email, password}
  let result = await fetch('http://127.0.0.1:8000/api/login', {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    body:JSON.stringify(item)

  })
  result = await result.json();
  localStorage.setItem("user-info", JSON.stringify(result))
  navigate('/');

}
return (
  <>
  <Header />
  <div className="col-sm-6 offset-sm-3">
     <h1>User Login</h1><br/>
    <input type="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/><br/>
    <input type="password" value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Your Password"/><br/>
    <button onClick={login} className="btn btn-primary">Login</button>
  </div>
  </>
);
}
export default Login;
