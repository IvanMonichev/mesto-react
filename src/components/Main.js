import React from "react";
import api from '../utils/Api'
import trash from '../images/trash.svg';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAllData()
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  })
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile-avatar">
                    <img src={userAvatar} alt={`Аватар пользователя – ${userName}`} className="profile-avatar__image"/>
                    <button className="profile-avatar__edit-avatar" onClick={props.onEditAvatar}></button>
                </div>

                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button button-action" onClick={props.onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button button-action" onClick={props.onAddPlace}></button>
            </section>

            <section className="photo-gallery">
                <ul className="photo-gallery__list">
                  {cards.map((card) =>
                    <li key={card._id} className="photo-gallery__item">
                      <img src={card.link} alt="Фотография загруженная пользователем" className="photo-gallery__image" />
                      <h2 className="photo-gallery__title">{card.name}</h2>
                      <div className="photo-gallery__like-section">
                      <button className="photo-gallery__like-button button-action"></button>
                      <p className="photo-gallery__like-counter">{card.likes.length}</p>
                      </div>
                      <a className="photo-gallery__delete-button button-action"><img
                      src={trash} alt="Корзина удаления" /></a>
                    </li>)}
                </ul>
            </section>

        </main>
    );
}

export default Main;

