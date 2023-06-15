import React,{useState} from 'react';




const Register = (props) => {

    const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const registration=(e)=>{
    e.preventDefault();
    console.log(email);
}
  return (
    <div className='auth-form-container'>
    <h2>Register</h2>
    <form className='register-form' onSubmit={registration}>
    <label htmlFor="name" >
    Full name
    </label>
    <input type='name' placeholder='enter your full name' id="name" name="name" value={name}/>
    <label htmlFor="email" >
    email
    </label>
    <input type='email' placeholder='email@gmail.com' id="email" name="email" value={email}/>

    <label htmlFor="password" >
    password
    </label>
    <input type='password'  id="password"  placeholder="***********"name="password" value={password}/>
    <button type='submit' className='submission'>Register</button>
    </form>
    <button className="link-btn" onClick={()=>props.onFormSwitch("login")}>Already have an account? Login here.</button>
    </div>
  )
}

export default Register
