function PopupWithForm(props) {

    return (
        <section className={`popup popup_type_${props.name}`}>
            <form className="popup__container" name={props.name} noValidate>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button type="submit" className="popup__save-button button-action">Сохранить</button>
                <button type="button" className="popup__close-button button-action"></button>
            </form>
        </section>

    );
}

export default PopupWithForm;