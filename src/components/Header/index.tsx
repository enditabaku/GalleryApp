// react imports
import React from "react";

// project imports
import './Header.css';
import logo from '../../assets/images/logo.png';

export default function Header () {
    return(
        <>
            <div className={`header`}>
                <div className="row">
                    <div className="col-6 ta-center">
                        <img src={logo} className={`logo`}/>
                    </div>
                </div>
            </div>
        </>
    )
}