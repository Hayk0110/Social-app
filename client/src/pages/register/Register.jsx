import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login")
            } catch (err) {
                console.log(err)
            }
        }
    }


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Social.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} type='email' className="loginInput" />
                        <input placeholder="Password" required ref={password} type='password' minLength='6' className="loginInput" />
                        <input placeholder="Password Again" required ref={passwordAgain} type='password' className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <Link to="/login" style={{textAlign:"center"}}>
                        <button className="loginRegisterButton">Log into your Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register