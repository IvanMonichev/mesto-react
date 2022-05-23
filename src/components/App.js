import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
      <div>
        <Header />
        <Main />
        <Footer/>
        <PopupWithForm />
        <ImagePopup />

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
