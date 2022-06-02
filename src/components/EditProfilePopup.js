import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}>
      <input type="text"
             id="name-input"
             className="popup__text-input popup__text-input_type_name"
             name="name"
             placeholder="Имя"
             required minLength="2"
             maxLength="40" />
      <span className="popup__input-error name-input-error">Ошибка</span>
      <input type="text"
             id="about-input"
             className="popup__text-input
                       popup__text-input_type_about"
             name="about"
             placeholder="О себе"
             required minLength="2"
             maxLength="200" />
      <span className="popup__input-error about-input-error">&nbsp;</span>

    </PopupWithForm>
  )
}

export default EditProfilePopup;