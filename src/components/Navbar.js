import { Link } from "react-router-dom"

function Navbar(){
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className = "icono-nav-bar" to="/">
                    <i className='fas fa-dragon'></i>
                </Link>
                <span className="navbar-brand mb-0 h1">Actividad 4</span>
                <Link className = "icono-nav-bar" to="/profile">
                    <i className="material-icons">person_pin</i>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar