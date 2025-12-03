import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    function handleLogin() {
        const storedUser = localStorage.getItem("username");
        const storedPass = localStorage.getItem("password");

        if (username === storedUser && password === storedPass) {
            setMsg("Login successful!");
            setTimeout(() => navigate("/game"), 1000);
        } else {
            setMsg("Incorrect username or password.");
        }
    }

    return (
        <div className="container">
            <h2>Login</h2>

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

            <button onClick={handleLogin}>Login</button>

            <p>{msg}</p>

            <p>
                No account? <a href="/register">Register here</a>
            </p>
        </div>
    );
}
