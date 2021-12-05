import React from 'react'
import './style.css';
const Home = () => {
    return (
        <div className="bg">
            <div>
                <form className="login_form">
                    <label className = "font_username">Username/Email <br/>
                        <input 
                            className = 'username_box'
                            type="text" 
                        />  
                    </label>
                </form>
            </div>
           
            {/* <div className="username_email">
            <tr>
                    <td><label>Username/Email</label></td> 
            </tr>
            </div>

            <div className="password">
                    <td><label>Password</label></td>
            </div> */}
            
            <button className = "login">Login</button>
            
        </div>
    )
}

export default Home
