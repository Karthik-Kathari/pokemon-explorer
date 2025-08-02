import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#eee",
        color: "black"
      }}
    >
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>  
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokemonapiimg" height={50}/>
      </h2>
      
      <div style={{ display: "flex", gap: "15px"}}>
        <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
        <button className="nav-btn" onClick={() => navigate("/about")}>About</button>
        <button className="nav-btn" onClick={() => navigate("/category")}>Category</button>
      </div>
    </nav>
  );
}
