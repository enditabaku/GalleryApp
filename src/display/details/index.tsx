// project imports
import { IImageImages } from "../../model/ImageModel";
import Header from "../../components/Header";
import './Details.css';

// 3rd party
import {useLocation} from 'react-router-dom';
import { BiSolidHeart, BiPlusCircle } from "react-icons/bi"
import { FiEye, FiArrowUpCircle, FiArrowDownCircle, FiHeart } from "react-icons/fi";

export default function Details() {
    const location = useLocation();

    return(
        <>
            <Header />
            <div className="wrapper p-3">
                <h1>{location?.state?.title}</h1>
                <br />
                <div className="row details_row">
                    <div className="col-6">
                        <div className="main_image_wrapper">
                            <img src={location.state?.images?.length > 0 ? (location.state?.images[0]?.type == "video/mp4" ? location.state?.images[0].gifv.slice(0, -1) : location.state?.images[0].link) : (location.state?.type == "video/mp4" ? location.state.gifv.slice(0, -1) : location.state?.link)} alt={location.state?.title} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row ta-center">
                            <div className="col-4">
                                <span className="details_text"><FiEye />{' '}{location.state.views}</span>
                            </div>
                            <div className="col-4">
                                <span className="details_text"><FiArrowUpCircle />{' '}{location.state.ups}</span>
                            </div>
                            <div className="col-4">
                                <span className="details_text"><FiArrowDownCircle />{' '}{location.state.downs}</span>
                            </div>
                        </div>
                        <div className="row ta-center mt-2">
                            <div className="col-4">
                                <span className="details_text">{location.state.favorit ? <BiSolidHeart /> : <FiHeart />}{' '}{location.state.favorite_count}</span>
                            </div>
                            <div className="col-4">
                                <span className="details_text"><BiPlusCircle />{' '}Score: {location.state?.score}</span>
                            </div>
                        </div>
                        <div className="row">
                            <span className="details_text">{location.state?.description ?? ""}</span>
                        </div>
                        <div className="row p-3">
                            {location.state?.images.length > 0 ? (
                                <>
                                    {location.state?.images?.map((img: IImageImages, index: number) => {
                                        if(index == 0) return;
                                        return(
                                            <div className="col-6 p-3" key={img.id}>
                                                <div className="main_image_wrapper">
                                                    <img src={
                                                        (img?.type == "video/mp4" ? img.gifv.slice(0, -1) : img.link)
                                                        } alt={location.state?.description} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}