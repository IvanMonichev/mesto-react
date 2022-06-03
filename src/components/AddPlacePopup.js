import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose}) {

  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleLink = () => {

  }


  const handleAddPlaceSubmit = event => {
    event.preventDefault();


  }

  return(
    <PopupWithForm
      name="add-card"
      title="Новое место"
      textButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <input type="text" id="title-input" className="popup__text-input popup__text-input_type_title" name="name"
             placeholder="Название"
             required minLength="2" maxLength="30" />
      <span className="popup__input-error title-input-error">Ошибка</span>
      <input type="url" id="link-input" className="popup__text-input popup__text-input_type_link" name="link"
             placeholder="Ссылка на картинку" required />
      <span className="popup__input-error link-input-error">Ошибка</span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;