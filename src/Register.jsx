import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    function handleRegister() {
        if (password.length < 8) {
            setMsg("Password must be at least 8 characters.");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        setMsg("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/"), 1500);
    }

    return (
        <div className="container">
            <h2>Register</h2>

            <input 
            type="text" 
            placeholder="Username"
            onChange= {(e) => setUsername(e.target.value)}  
            />

            <input 
            type="password" 
            placeholder="Password"
            onChange= {(e) => setPassword(e.target.value)}  
            />

            <button onClick={handleRegister}>Register</button>

            <p>{msg}</p>

            <p>
                Already have an account? <a href="/">Login</a>
            </p>
        </div>
    );
}


    