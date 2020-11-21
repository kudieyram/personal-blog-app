import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link ,
    useHistory,
  } from "react-router-dom"; 

function LogInComponent() {
    // these is is the routehistory, allows us to route to the blog post
    const routeHistory = useHistory()

    // these are the constants of the email and password
    const [emailState, setEmail] = React.useState({
        email: "",
    })

    const [passwordState, setPassword] = React.useState({
        password: "",
    })

    // this function is called when someone is typing email
    function handleEmailChange(event) {
            setEmail ({
                'email': event.target.value
            }) 
    }

    // this function is called when someone is typing password
    function handlePasswordChange(event) {
        setPassword ({
           'password' : event.target.value        
        })
    }

        // this function handles the login action.
    function handleLogin(event) {
        event.preventDefault();
        if (emailState.email === '' || passwordState.password === ''){
            alert('Provide a valid Email/Password, Try again')
            return
        }
        
            // alert('😍Log In Successful   '+ emailState.email)

            routeHistory.push('/new_post')
    }   
   
  return (
    <div className="login-wrapper" >
        <div className="login-form">
    <form>
        <h2 className="text-center">Log in</h2>       
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" required="required" name="email" onChange={handleEmailChange} value={emailState.email}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="required" name="password" onChange ={handlePasswordChange} value={passwordState.password}/>
            </div>
            <div className="form-group">
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={handleLogin}>Log in</button>
            </div>
    </form>
    <p className="text-center">New Here?<Link to= '/signup'>Create an Account</Link></p>
</div>
    </div>
  );
}

export default LogInComponent;
