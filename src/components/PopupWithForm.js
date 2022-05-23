function PopupWithForm(props) {

    return (
        <section className={`popup popup_type_${props.name}`}>
            <form className="popup__container" name={props.name} noValidate>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
            </form>
        </section>

    );
}

export default PopupWithForm;