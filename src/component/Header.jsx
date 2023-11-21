import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {
    return(
        <header>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/438px-HP_-_Harry_Potter_wordmark.svg.png" alt="" />
            <nav>
                <ul>
                    <Link to="/">Accueil</Link>
                    <Link to="/perso">Personnages</Link>
                    <Link to="/persorandom">Personnage aléatoire</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;