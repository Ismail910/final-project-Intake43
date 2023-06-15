import React,{useState} from 'react';

// import { useHistory } from 'react-router-dom';
const Login = (props) => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    // const history = useHistory();

    const submission=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log('Form submitted:', { email, password });
        // Reset form fields
        setEmail('');
        setPassword('');
        // history.push('/home');
    }
  return (
    <div className='auth-form-container'>
    <h2>Login</h2>
     <form onSubmit={submission} className='login-form'>
     <label htmlFor="email" >
     Email
     </label>
     <input type='email' placeholder='email@gmail.com' id="email" name="email" value={email}   onChange={(e) => setEmail(e.target.value)}/>
     <label htmlFor="password" >
     Password
     </label>
     <input type='password'  id="password"  placeholder="***********"name="password" value={password}   onChange={(e) => setPassword(e.target.value)}/>
     <button type='submit' className='submission'>Log In</button>
     </form>
     <button className="link-btn" onClick={()=>props.onFormSwitch("register")}>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login
