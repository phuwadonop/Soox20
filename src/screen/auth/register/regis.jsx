import React from "react";
import './regis.css'
const Regis = () => {
    return (
        <div className = "auth-bg">
            <form className = 'regis-form'>
                <div className = 'email-box'>
                    <label>Email</label><br/>
                    <input type="email" placeholder = 'Email' />
                </div>
                <div className = 'usn-box'>
                    <label>Username</label><br/>
                    <input type="username" placeholder = 'Username' />
                </div>
                <div className = 'password-box'>
                    <label>Password</label><br/>
                    <input type="pw" placeholder = 'Password' />
                </div>
                <div className = 'cpw-box'>
                    <label>Confirm your password</label><br/>
                    <input type="cpw" placeholder = 'Confirm your password' />
                </div>
                <button type = 'signup' className = 'signupbt'>Sign up</button>
                <button type = 'back' className = 'nbackbt'>Back</button>
            </form>

        </div>
    )
}
export default Regis