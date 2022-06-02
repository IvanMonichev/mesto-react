import React from "react";
import api from '../utils/Api'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  // Подписываемся на контекст «CurrentUserContext».
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  //  Установка эффекта для стейта, где обрабатываются данные.
  React.useEffect(() => {
    api.getAllData()
      .then(([userData, cardsData]) => {
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, [])
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(cards => cards.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
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
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile-avatar">
                    <img src={currentUser.avatar} alt={`Аватар пользователя – ${currentUser.name}`} className="profile-avatar__image"/>
                    <button className="profile-avatar__edit-avatar" onClick={onEditAvatar}></button>
                </div>

                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button className="profile__edit-button button-action" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__add-button button-action" onClick={onAddPlace}></button>
            </section>

            <section className="photo-gallery">
                <ul className="photo-gallery__list">
                  {cards.map((card) =>
                    <Card key={card._id}
                          card={card}
                          onCardClick={onCardClick}
                          onCardLike={handleCardLike}
                          onCardDelete={handleDeleteCard}
                    />)}
                </ul>
            </section>
        </main>
    );
}

export default Main;

