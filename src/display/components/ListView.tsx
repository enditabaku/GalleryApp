// react imports
import React, { useEffect, useState } from "react";

// project imports
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { fetchGallery } from "../../store/actions/GalleryAction";
import LoadImage from "./LoadImage";
import { IImage } from "../../model/ImageModel";
import Filters from "./Filters";
import './List.css';

// 3rd party
import { useNavigate } from "react-router-dom";

export const ListView = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const galleryValue = useAppSelector((state) => state.gallery);
  const [paramsObject, setParamsObject] = useState<any>({});

  useEffect(() => {
    dispatch(fetchGallery(paramsObject))
  }, [paramsObject]);

  const filtersChangeHandler = (newValues: any) => {
    setParamsObject(newValues)
  }

  return (
    <>
      <Filters onChange={filtersChangeHandler} />
      <div className="list">
        <div className="grid">
          {galleryValue.loading ? (
            <>
              <LoadImage loading={true} />
              <LoadImage loading={true} />
              <LoadImage loading={true} />
              <LoadImage loading={true} />
              <LoadImage loading={true} />
              <LoadImage loading={true} />
              <LoadImage loading={true} />
              <LoadImage loading={true} />
              <LoadImage loading={true} />
            </>
          ) : (
            <>
              {galleryValue?.gallery?.data?.map((img: IImage) => (
                <div className="grid__item" key={img.id}>
                  <div className="card">
                    <img className="card__img" src={img?.images?.length > 0 ? (img?.images[0]?.type == "video/mp4" ? img?.images[0].gifv.slice(0, -1) : img?.images[0].link) : (img?.type == "video/mp4" ? img.gifv.slice(0, -1) : img?.link)} alt={img?.title} />
                    <div className="card__content">
                      <p className="card__text">{img?.title}</p>
                      <button className="card__btn" onClick={() => {navigate(`/gallery/${img.id}`, {state: img})}}>View details</button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
