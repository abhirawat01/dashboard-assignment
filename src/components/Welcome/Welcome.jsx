import "./Welcome.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome(){

    const [loading,setLoading] = useState(false);
    const [formInput, setformInput] = useState({ username: "", password: "" });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setformInput((prevalue)=>{

        return {
            ...prevalue,
            [name]: value
        }
        })

    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(formInput);
          if(formInput.username == 'trial' && formInput.password == 'assignment123'){
            localStorage.setItem('auth', formInput.username);
            navigate('/dashboard');
          }
        } catch (error) {
          console.log("User Details Mismatched!!");
          setLoading(false);
        }
        
      };

    return (
        <>
            <div className="loginScreen">
                <div className="background">
                    <div className="shape" />
                    <div className="shape" />
                </div>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <h3>Login Here</h3>
                    <label class="username" htmlFor="username">Username</label>
                    <input type="text" name="username" value={formInput.username} onChange={handleInput} placeholder="Username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input class="password" type="password" name="password" value={formInput.password} onChange={handleInput} placeholder="Password" id="password" />
                    <button type="submit">{!loading ? 'Log in' : 'Loading...'}</button>
                </form>
            </div>
        </>
    )
}