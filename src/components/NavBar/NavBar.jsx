import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

function NavBar() {

    return (
        <nav className="Nav-bar">
            <Link to={"/"}>
                <img src={logo} alt="logo" className="logo"/>
                <a className="Nav-bar-title1">Pronostico<a className="Nav-bar-title2">App</a></a>
            </Link>
        </nav>
    )
}

export default NavBar;