import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  function handleEditAvatarClick() {
    console.log('Working');
  }

  function handleEditProfileClick() {
    console.log('Working');
  }

  function handleAddPlaceClick() {
    console.log('Working');
  }

  return (
      <>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer/>
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          children={
              <>
                <input type="url"
                       id="avatar-input"
                       className="popup__text-input
                        popup__text-input_type_avatar"
                     name="avatar"
                     placeholder="Ссылка на аватар"
                       required />
                  <span className="popup__input-error avatar-input-error">Ошибка</span>
                  <button className="popup__save-button button-action">Сохранить</button>
                  <button type="button" className="popup__close-button button-action"></button>
              </>
          } />
        <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        children={
            <>
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
                <button type="submit" className="popup__save-button button-action">Сохранить</button>
                <button type="button" className="popup__close-button button-action"></button>
            </>
        } />

        <PopupWithForm
          name="add-card"
          title="Новое место"
          children={
            <>
              <input type="text" id="title-input" className="popup__text-input popup__text-input_type_title" name="name"
                     placeholder="Название"
                     required minLength="2" maxLength="30" />
                <span className="popup__input-error title-input-error">Ошибка</span>
                <input type="url" id="link-input" className="popup__text-input popup__text-input_type_link" name="link"
                       placeholder="Ссылка на картинку" required />
                  <span className="popup__input-error link-input-error">Ошибка</span>
                  <button className="popup__save-button button-action">Создать</button>
                  <button type="button" className="popup__close-button button-action"></button>
            </>
          } />



        <template className="photo-gallery__item-template">
          <li className="photo-gallery__item">
              <img src="../images" alt="Фотография загруженная пользователем «{title}»" className="photo-gallery__image" />
                  <h2 className="photo-gallery__title"></h2>
                  <div className="photo-gallery__like-section">
                      <button className="photo-gallery__like-button button-action"></button>
                      <p className="photo-gallery__like-counter">0</p>
                  </div>
                  <a className="photo-gallery__delete-button button-action"><img
                      src="<%=require('./images/trash.svg')%>" alt="Корзина удаления" /></a>
          </li>
        </template>

      </>
  );
}

export default App;
