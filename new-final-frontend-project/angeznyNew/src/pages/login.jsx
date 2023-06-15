import React,{useState} from 'react';


const Login = (props) => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');


    const submission=(e)=>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='auth-form-container'>
    <h2>Login</h2>
     <form onSubmit={submission} className='login-form'>
     <label htmlFor="email" >
     email
     </label>
     <input type='email' placeholder='email@gmail.com' id="email" name="email" value={email}/>
     <label htmlFor="password" >
     password
     </label>
     <input type='password'  id="password"  placeholder="***********"name="password" value={password}/>
     <button type='submit'>Log In</button>
     </form>
     <button className="link-btn" onClick={()=>props.onFormSwitch("register")}>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login
