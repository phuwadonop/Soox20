import React from 'react'
import './forgot.css'
const Forgot = () => {
    return (
        <div className = "auth-bg">
            <form className ='email-form'>
                <div className = 'emailBar'>
                    <label className = 'emfont'>Email</label><br/><br/>
                    <input className = 'em-box' type="email" placeholder="Email" />
                </div>
                <button type = 'next' className = 'next-bt'>Next</button>
                <button type = 'back' className = 'back-bt'>Back</button>
            </form>
        </div>
    )
}
export default Forgot