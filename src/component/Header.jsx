import { Link } from "react-router-dom";
import "./Header.scss"

function Header({currentPage}) {
    return(
        <header>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/438px-HP_-_Harry_Potter_wordmark.svg.png" alt="" />
            <nav>
                <ul>
                    
                    <li>
                    {currentPage === "home" ? (
                        <strong>
                        <Link to="/">Accueil</Link>
                        </strong>
                    ) :  (
                        <Link to="/">Accueil</Link>
                    )}
                    </li>
                    <li>
                    {currentPage === "perso" ? (
                        <strong>
                        <Link to="/perso">Personnages</Link>
                        </strong>
                    ) : (
                        <Link to="/perso">Personnages</Link>
                    )}
                    </li>
                    <li>
                    {currentPage === "persorandom" ? (
                        <strong>
                        <Link to="/persorandom">Personnage aléatoire</Link>
                        </strong>
                    ) : (
                        <Link to="/persorandom">Personnage aléatoire</Link> 
                    )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;