import React from "react";
import './style.css'
const Respo = () => {
    return (
        <div className = "auth-bg">
            <form className='resetpw-form'>
                <div className='npw-box'>
                    <label>New Password</label><br />
                    <input type="email" placeholder='Email' />
                </div>
                <div className='cnpw-box'>
                    <label>Confirm Your Password</label><br />
                    <input type="username" placeholder='Username' />
                </div>
                <button type = 'back' className = 'backbt'>Confirm</button>
                <button type = 'confirm' className = 'confirmbt'>Back</button>
            </form>

        </div>
    )
}
export default Respo