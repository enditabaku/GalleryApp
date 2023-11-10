interface Props {
    loading: boolean,
    source?: string,
    alt?: string,
    title?: string,
    description?: string | null,
}

export const LoadImage = ({ loading, source, alt, title, description }: Props) => {

    return (
        <>
            <div className={`grid__item ${loading ? 'is-loading' : ''}`}>
                <div className="card">
                    {loading ? (
                        <>
                            <div className="image"></div>
                            <div className="card__content">
                                <h2 className="card__header"></h2>
                                <p className="card__text"></p>
                                <div className="card__btn" />
                            </div>
                        </>
                    ) : (
                        <>
                            <img className="card__img" src={source ?? ""} alt={alt} />
                            <div className="card__content">
                                <h2 className="card__header">{title ?? ""}</h2>
                                <p className="card__text">{description ?? ""}</p>
                                <button className="card__btn">View details</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
export default LoadImage;