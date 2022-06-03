import PopupWithForm from "./PopupWithForm";
import React, {useEffect, useRef} from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = React.useRef();


  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdateAvatar(
      {avatar: avatarRef.current.value}
    )
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input type="url"
             id="avatar-input"
             className="popup__text-input
                    popup__text-input_type_avatar"
             name="avatar"
             placeholder="Ссылка на аватар"
             ref={avatarRef}
             required/>
      <span className="popup__input-error avatar-input-error">Ошибка</span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;