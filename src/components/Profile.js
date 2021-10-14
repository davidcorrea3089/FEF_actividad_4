function Profile(props) {

    function handleClick(){
        props.onClickLogout()
    }

    return(
        <div className="container-profile">
            <div className="profile-photo">
                <img src={props.avatar} className="rounded-circle" alt="profile" width="100"/>
            </div>
            <div className="user-name mt-1">
                <span className="author-post">{props.username}</span>    
            </div>
            <div className="biography">
                <p className="card-text mt-3">{props.bio}</p>
            </div>
            <div className="boton-logout mt-3" onClick={handleClick}>
                Salir
            </div>
        </div>
    )
}

export default Profile