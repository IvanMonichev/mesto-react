import trash from "../images/trash.svg";

function Card(props) {
  return (
    <li className="photo-gallery__item">
      <img src={props.card.link} alt="Фотография загруженная пользователем" className="photo-gallery__image" />
      <h2 className="photo-gallery__title">{props.card.name}</h2>
      <div className="photo-gallery__like-section">
        <button className="photo-gallery__like-button button-action"></button>
        <p className="photo-gallery__like-counter">{props.card.likes.length}</p>
      </div>
      <a className="photo-gallery__delete-button button-action"><img
        src={trash} alt="Корзина удаления" /></a>
    </li>)
}

export default Card;