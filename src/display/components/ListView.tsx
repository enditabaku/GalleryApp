// react imports
import React, { useEffect } from "react";

// project imports
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { fetchGallery } from "../../store/actions/GalleryAction";
import LoadImage from "./LoadImage";
import { IImage } from "../../model/ImageModel";
import Filters from "./Filters";
import './List.css';

// 3rd party

export const ListView = () => {
  const dispatch = useAppDispatch();
  const galleryValue = useAppSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchGallery({ size: 20 }))
  }, []);

  console.log(galleryValue)

  return (
    <>
      <Filters />
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
                <div className="grid__item">
                  <div className="card">
                    <img className="card__img" src={img?.images?.length > 0 ? (img?.images[0]?.type == "video/mp4" ? img?.images[0].gifv.slice(0, -1) : img?.images[0].link) : ""} alt={img?.title} />
                    <div className="card__content">
                      <p className="card__text">{img?.title}</p>
                      <button className="card__btn">View details</button>
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
