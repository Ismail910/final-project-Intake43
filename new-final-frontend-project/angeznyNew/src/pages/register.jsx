import React, { useState } from 'react'

const Register = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const registration = (e) => {
    e.preventDefault()
    console.log(email)
    console.log('Form submitted:', { name, email, password })
    // Reset form fields
    setName('')
    setEmail('')
    setPassword('')
    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with registration logic
      // ...
    } else {
      setErrors(validationErrors)
    }
  }
  // form validation
  const validateForm = () => {
    let errors = {}

    // Validate name field
    if (!name.trim()) {
      errors.name = 'Name is required'
    }

    // Validate email field
    if (!email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid'
    }

    // Validate password field
    if (!password.trim()) {
      errors.password = 'Password is required'
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long'
    }

    // Validate confirm password field
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required'
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match'
    }

    return errors
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={registration}>
        <label htmlFor="name">Full name</label>
        <input
          type="name"
          placeholder="enter your full name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-danger">{errors.name}</p>}
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}

        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          placeholder="***********"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}
        <label htmlFor="co">Confirm your password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="***********"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword}</p>
        )}
        <button type="submit" className="submission">
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  )
}

export default Register
