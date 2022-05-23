import React from "react";
import api from '../utils/Api'
import Card from './Card'

function Main(props) {

  // Установка хуков.
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  //  Установка эффекта для стейта, где обрабатываются данные.
  React.useEffect(() => {
    api.getAllData()
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, [])
    
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
                    <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)}
                </ul>
            </section>
        </main>
    );
}

export default Main;

