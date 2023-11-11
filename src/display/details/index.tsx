// react imports
import React from "react";

// project imports
import { IImageImages } from "../../model/ImageModel";
import './Details.css';

// 3rd party
import {useLocation} from 'react-router-dom';

export default function Details() {
    const location = useLocation();

    // let imagesArray: IImageImages[] | null = null;
    // if(location.state?.images?.length > 0){
    //     location.state?.images?.filter((img: IImageImages) => {
    //         if(img)
    //     })
    // } else {

    // }

    console.log(location.state)


    return(
        <>
            <div className="wrapper p-3">
                <h1>{location?.state?.title}</h1>
                <br />
                <div className="main_image_wrapper">
                    <img src={location.state?.images?.length > 0 ? (location.state?.images[0]?.type == "video/mp4" ? location.state?.images[0].gifv.slice(0, -1) : location.state?.images[0].link) : (location.state?.type == "video/mp4" ? location.state.gifv.slice(0, -1) : location.state?.link)} alt={location.state?.title} />
                </div>
            </div>
        </>
    )
}