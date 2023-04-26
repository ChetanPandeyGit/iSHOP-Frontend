import React, { useState } from 'react'
import "./styling/login.css"
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";

const Signin= () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        username: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = (e) => {
        e.preventDefault()
        console.log('chetan');
        const { username, email, password, reEnterPassword } = user
        if( username && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3001/register",user)
            .then( res => {
                toast.success('Sign In Successful');
                navigate('/login')
            })
        } else {
            alert("invalid input")
        }
    }

	return (<>
		<div className="container right-panel-active" >
			<div className="form-container sign-in-container">
				<form onSubmit={register}>	
				<h1>Sign in</h1>	
                <input type="text" name="username" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
					<button >Sign In</button>
				</form>
			</div>
	
			<div className="overlay-container ">
				<div className="overlay ">
					<div className="overlay-panel overlay-left ">
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						
                        <Link to={'/login'}><button className="ghost"  >Log In</button></Link>
					</div>
				
				</div>
			</div>
		</div>
	</>
	)
}

export default Signin