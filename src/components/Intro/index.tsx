// react imports
import React from "react";

// project imports
import background from '../../assets/images/bg.png'
import Header from "../Header";

export default function Intro () {
    return(
        <>
            <div className={`header`}>
                <div className="row">
                    <div className="col-8" style={{backgroundImage: `url(${background})`}}>
                        <Header />
                        <p className="large-text fs-45">
                            Discover  <br />
                            the magic of <br />
                            the internet
                        </p>
                    </div>
                    <div className="col-4 p-relative">
                        <span className="small-text fs-12">Discover More</span>
                    </div>
                </div>
            </div>
        </>
    )
}   