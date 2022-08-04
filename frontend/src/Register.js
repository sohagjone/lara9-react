import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  Header  from './Header';

const Register = () => {
  
  useEffect(() => {
      if(localStorage.getItem('user-info'))
      {
        navigate('/add')
      }
  }, [])
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  //const history = useHistory();

  async function signUp(){
      let item = {name:name, email:email, password:password}
      let result = await fetch("http://127.0.0.1:8000/api/register",{
      method:'POST',
      body:JSON.stringify(item),
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      } 
    })
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate('/add');


  }
 /* const http = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
    method:'POST',
    headers:{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    },
    body:JSON.stringify({
      name: name,
      email:email,
      password: password
  })
});


const signUp = () =>{
 
  // api call 
  let result = http.post('/register', {name:name, email:email, password:password}).then((res)=>{
      navigate('/add');   
  });
  result = result.json()  
  localStorage.setItem("user-info", JSON.stringify(result))
}
*/

  return (
    <>
    <Header />
    <div className="col-sm-6 offset-sm-3">
   
      <h1>User Registration</h1><br/>
      <input type="text" value={name} className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/><br/>
      <input type="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/><br/>
      <input type="password" value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Your Password"/><br/>
      <button onClick={signUp} className="btn btn-primary">SignUp</button>
    </div>
    </>
  );
}

export default Register;
