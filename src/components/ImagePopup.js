function ImagePopup() {
    return (
        <section className="popup popup_dark-overlay image-zoom">
            <div className="image-zoom__container">
                <figure className="image-zoom__figure">
                    <img className="image-zoom__image" src="https://picsum.photos/1400/1300"
                         alt="Фотография загруженная пользователем «{title}»" />
                    <figcaption className="image-zoom__caption">Lorem ipsum dolor.</figcaption>
                </figure>
                <button type="button" className="popup__close-button button-action"></button>
            </div>
        </section>
    );
}

export default ImagePopup;