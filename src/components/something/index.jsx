import React from 'react'
import './style.css';


const Account = () => {
    return (
        <div className="bg">
            <div className="username_email">
            <tr>
                    <td><label>Username/Email</label></td> 
            </tr>
            </div>

            <div className="password">
                    <td><label>Password</label></td>
            </div>
            
            <button className = "login">Login</button>
            
        </div>
    )
}

export default Account
