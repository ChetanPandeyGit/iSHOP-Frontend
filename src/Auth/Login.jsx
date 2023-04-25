import React, { useState } from 'react'
import "./styling/login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {

	const navigate = useNavigate()

	const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

	const login = () => {
        axios.post("http://localhost:3001/login", user)
        .then(res => {
            alert(res.data.message)
            navigate('/')
        })
    }
	return (<>
		<div className="container" >
			
			<div className="form-container log-in-container">
				<form >
					<h1>Log in</h1>					
					<input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
          		   <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>		
					<button onClick={login}>Log In</button>
				</form>
			</div>
			<div className="overlay-container">
				<div className="overlay">				
					<div className="overlay-panel overlay-right">
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
						
						<Link to={'/signin'}><button className="ghost" >Sign In</button></Link>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default Login