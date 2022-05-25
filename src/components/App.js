import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  // Установка хуков на управление состояния формы (открыта/закрыта)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  // Вызов обработчиков для изменения состояния
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleCardClick = (card) => {
      setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''})
  }


  return (
      <>
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer/>

        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          textButton="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
            <input type="url"
                   id="avatar-input"
                   className="popup__text-input
                    popup__text-input_type_avatar"
                 name="avatar"
                 placeholder="Ссылка на аватар"
                   required />
            <span className="popup__input-error avatar-input-error">Ошибка</span>
        </PopupWithForm>

        <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
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

        <PopupWithForm
          name="add-card"
          title="Новое место"
          textButton="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>

              <input type="text" id="title-input" className="popup__text-input popup__text-input_type_title" name="name"
                     placeholder="Название"
                     required minLength="2" maxLength="30" />
                <span className="popup__input-error title-input-error">Ошибка</span>
                <input type="url" id="link-input" className="popup__text-input popup__text-input_type_link" name="link"
                       placeholder="Ссылка на картинку" required />
                  <span className="popup__input-error link-input-error">Ошибка</span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <template className="photo-gallery__item-template">

        </template>

      </>
  );
}

export default App;
