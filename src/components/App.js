import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
      <div>
        <Header />
        <Main />
        <Footer/>
        <section className="popup popup-edit-profile">
          <form className="popup__container" noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <input type="text" id="name-input" className="popup__text-input popup__text-input_type_name" name="name"
                     placeholder="Имя" required minLength="2" maxLength="40" />
                  <span className="popup__input-error name-input-error">Ошибка</span>
                  <input type="text" id="about-input" className="popup__text-input popup__text-input_type_about"
                         name="about" placeholder="О себе" required minLength="2" maxLength="200" />
                      <span className="popup__input-error about-input-error">&nbsp;</span>
                      <button type="submit" className="popup__save-button button-action">Сохранить</button>
                      <button type="button" className="popup__close-button button-action"></button>
          </form>
        </section>

        <section className="popup popup-add-card">
          <form className="popup__container" noValidate>
              <h2 className="popup__title">Новое место</h2>
              <input type="text" id="title-input" className="popup__text-input popup__text-input_type_title" name="name"
                     placeholder="Название"
                     required minLength="2" maxLength="30" />
                  <span className="popup__input-error title-input-error">Ошибка</span>
                  <input type="url" id="link-input" className="popup__text-input popup__text-input_type_link"
                         name="link"
                         placeholder="Ссылка на картинку" required />
                      <span className="popup__input-error link-input-error">Ошибка</span>
                      <button className="popup__save-button button-action">Создать</button>
                      <button type="button" className="popup__close-button button-action"></button>
          </form>
        </section>

        <section className="popup popup-delete-card">
          <form className="popup__container" noValidate>
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__save-button button-action">Да</button>
              <button type="button" className="popup__close-button button-action"></button>
          </form>
        </section>

        <section className="popup popup-edit-avatar">
          <form className="popup__container" noValidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <input type="url" id="avatar-input" className="popup__text-input popup__text-input_type_avatar"
                     name="avatar"
                     placeholder="Ссылка на аватар" required />
                  <span className="popup__input-error avatar-input-error">Ошибка</span>
                  <button className="popup__save-button button-action">Сохранить</button>
                  <button type="button" className="popup__close-button button-action"></button>
          </form>
        </section>

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

      </div>
  );
}

export default App;
