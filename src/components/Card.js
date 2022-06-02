import trash from "../images/trash.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

function Card({card, onCardClick, onCardDelete, onCardLike}) {
  // Подписываемся на контекст «CurrentUserContext».
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки.
  const isOwn = card.owner._id === currentUser._id;

  const handleDeleteClick = () => {
    onCardDelete(card);
  }

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем.
  const isLiked = card.likes.some(like => like._id === currentUser._id);

  // Включаем стиль активного лайка, если лайкнули мы.
  const cardLikeButtonClassName = (
    `photo-gallery__like-button button-action ${isLiked && 'photo-gallery__like-button_active'}`
  );

  const handleClick = () => {
    onCardClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  }



  return (
    <li className="photo-gallery__item">
      <img onClick={handleClick} src={`${card.link}`}
           alt={`Фотография «${card.name}» загруженная пользователем – ${card.owner.name}`}
           className="photo-gallery__image"/>
      <h2 className="photo-gallery__title">{card.name}</h2>
      <div className="photo-gallery__like-section">
        <button onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
        <p className="photo-gallery__like-counter">{card.likes.length}</p>
      </div>
      {isOwn && <a onClick={handleDeleteClick} className="photo-gallery__delete-button button-action"><img
        src={trash} alt="Корзина удаления"/></a>}
    </li>)
}

export default Card;