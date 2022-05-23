function Main() {

    function handleEditAvatarClick() {
        const editAvatarPopupElement = document.querySelector('.popup-edit-avatar');
        handleEditAvatarClick.classList.add("popup_is-opened");
    }

    function handleEditProfileClick() {
        const editProfilePopupElement = document.querySelector('.popup_type_edit-profile');
        editProfilePopupElement.classList.add("popup_is-opened");
    }

    function handleAddPlaceClick() {
        const addCardPopupElement = document.querySelector('.popup-add-card');
        addCardPopupElement.classList.add("popup_is-opened");
    }
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile-avatar">
                    <img src="#" alt="Аватар профиля" className="profile-avatar__image"/>
                    <button className="profile-avatar__edit-avatar" onClick={handleEditAvatarClick}></button>
                </div>


                <div className="profile__info">
                    <h1 className="profile__title"></h1>
                    <button className="profile__edit-button button-action" onClick={handleEditProfileClick}></button>
                    <p className="profile__subtitle"></p>
                </div>
                <button className="profile__add-button button-action" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="photo-gallery">
                <ul className="photo-gallery__list">
                </ul>
            </section>
        </main>
    );
}

export default Main;