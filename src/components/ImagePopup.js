function ImagePopup({card, onClose}) {

  const isOpen = () => {
      if(!(card.link === '')) {
          return true;
      }
      return false;
  }

  return (

        <section className={`popup popup_dark-overlay image-zoom ${isOpen() && 'popup_is-opened'}`}>
            <div className="image-zoom__container">
                <figure className="image-zoom__figure">
                    <img className="image-zoom__image" src={`${isOpen() ? card.link : ""}`}
                         alt={`Фотография «${card.name}»`}/>
                    <figcaption className="image-zoom__caption">{card.name}</figcaption>
                </figure>
                <button onClick={onClose} type="button" className="popup__close-button button-action"></button>
            </div>
        </section>
    );
}

export default ImagePopup;