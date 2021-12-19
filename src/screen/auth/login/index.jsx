import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div className = "auth-bg">
            <form className='login_form'>
                <div className='logoBar'>
                    <label>Log in LOGO</label>
                </div>
                <div className='userBar'>
                    <label className='usem-font'>Username/Email</label><br /><br />
                    <input className='usem-box' type="username-email" placeholder="Username/Email" />
                </div>
                <div className='passwordBar'>
                    <label className='pw-font'>Password</label><br /><br />
                    <input className='pw-box' type="password" placeholder="Password" />
                    <Link to ={'/forgot'} className = 'forgot'>Forgot Password?</Link>
                    <Link to ={'/register'} className = 'signup'>Doesn’t have any account?</Link>
                    
                </div>
                <button type="signin" className='signinBt'>
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default Home
