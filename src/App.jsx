import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bitcoin from "./components/Bitcoin.jsx";
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import Navbar from "./navbar.jsx";

function App() {
    return (
      <BrowserRouter>
       <Navbar/>
    

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Bitcoin" element={<Bitcoin />} />
      </Routes>
    </BrowserRouter>
    );
}

  

    
export default App;
