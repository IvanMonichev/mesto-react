import React from "react";

function PopupWithForm({name, title, textButton, children, isOpen, onClose}) {

  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_is-opened'}`}>
      <form className="popup__container" name={name} noValidate>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__save-button button-action">{textButton}</button>
        <button type="button" className="popup__close-button button-action" onClick={onClose}></button>
      </form>
    </section>

  );
}

export default PopupWithForm;