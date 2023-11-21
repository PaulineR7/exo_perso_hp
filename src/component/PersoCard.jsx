import { Link } from "react-router-dom";

function PersoCard({ perso }) {
    return(
        <Link to={"/detail/" + perso.id + "/perso"}>
            <p>{perso.name}</p>
            <img src={perso.img} alt="" />
        </Link>
    )
}

export default PersoCard;