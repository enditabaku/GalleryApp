export const LoadImage = () => {

    return (
        <>
            <div className={`grid__item is-loading`}>
                <div className="card">
                    <div className="image"></div>
                    <div className="card__content">
                        <h2 className="card__header"></h2>
                        <p className="card__text"></p>
                        <div className="card__btn" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default LoadImage;