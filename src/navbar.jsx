import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Login</Link>
            <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
            <Link to="/Bitcoin">Bitcoin</Link>
            </nav>

    );
}