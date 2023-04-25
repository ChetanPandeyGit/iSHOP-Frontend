import React, { useState } from 'react'
import "./styling/login.css"
import { Link, useHistory } from 'react-router-dom'

const Signin= () => {
    const history = useHistory()
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

    const register = () => {
        const { username, email, password, reEnterPassword } = user
        if( username && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3001/register", user)
            .then( res => {
                alert(res.data.message)
                history.push('/login')
            })
        } else {
            alert("invlid input")
        }
        
    }

	return (<>
		<div class="container right-panel-active" >
			<div class="form-container sign-in-container">
				<form>	
				<h1>Sign in</h1>	
                <input type="text" name="username" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
					<button onClick={register}>Sign In</button>
				</form>
			</div>
	
			<div class="overlay-container ">
				<div class="overlay ">
					<div class="overlay-panel overlay-left ">
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						
                        <Link to={'/login'}><button class="ghost"  >Log In</button></Link>
					</div>
				
				</div>
			</div>
		</div>
	</>
	)
}

export default Signin