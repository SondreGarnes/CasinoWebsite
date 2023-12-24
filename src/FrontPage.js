import React from "react";
import { useNavigate } from "react-router-dom";
import './FrontPage.css';
const FrontPage = () => {
    const navigate = useNavigate();
    return (
        
        <div>
            <h1 className="title">Sondre Casino</h1>
            <p className="Bio">Her får du alltid penger tilbake</p>
            <div className="Button">
                <button className="Play" onClick={()=>navigate('/play')}>Spill Slots</button>
            </div>
            
        </div>
           
        
    );
};

export default FrontPage;
