import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="Nav-bar">
            <Link to={"/"} />
        </nav>
    )
}

export default NavBar;