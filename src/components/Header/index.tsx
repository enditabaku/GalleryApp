// react imports
import React from "react";

// project imports
import './Header.css';
import logo from '../../assets/images/logo.png';

// 3rd party
import { useNavigate } from "react-router-dom";

export default function Header () {

    const navigate = useNavigate();
    return(
        <>
            <div className={`header`}>
                <div className="row">
                    <div className="col-6 ta-center">
                        <img src={logo} className={`logo`} onClick={() => {navigate("/")}}/>
                    </div>
                </div>
            </div>
        </>
    )
}