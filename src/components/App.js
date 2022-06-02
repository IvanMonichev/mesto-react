import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {

  // Хуки
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  // Установка хуков на управление состояния формы (открыта/закрыта)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  React.useEffect(() => {
    api.getAllData()
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, [])
  console.log(currentUser);
  const handleUpdateUser = ({name, about}) => {
    api.setUserInfo({name, about})
      .then(() => {
        console.log(...currentUser);
        setCurrentUser({...currentUser, name, about});
        setEditProfilePopupOpen(false);
      })
  };

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

  // Удаление карточки
  function handleDeleteCard(card) {
    api.deleteCard(card._id)
      .then(() => {
        // Устанавливаем в стейт новый массив без удалённой карточки.
        setCards(cards.filter(item => item._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(cards => cards.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardDelete={handleDeleteCard}
          onCardLike={handleCardLike}
        />
        <Footer/>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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

      </CurrentUserContext.Provider>
  );
}

export default App;
