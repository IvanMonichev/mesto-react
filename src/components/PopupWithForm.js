function PopupWithForm(props) {

  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen && 'popup_is-opened'}`}>
      <form className="popup__container" name={props.name} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="button" className="popup__close-button button-action" onClick={props.onClose}></button>
      </form>
    </section>

  );
}

export default PopupWithForm;