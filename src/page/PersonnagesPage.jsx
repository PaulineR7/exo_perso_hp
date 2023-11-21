import Footer from "../component/Footer";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { persoOfHp } from "../utils/persoUtils";


function PersonnagesPage() {

    return(
        <>
        <Header />
        <main>
           {persoOfHp.map((perso) => {
            return(
                <Link to={"/detail/" + perso.id + "/perso"}>
                    <p>{perso.name}</p>
                    <img src={perso.img} alt="" />
                </Link>
            )
           })} 
        </main>
        <Footer />
        </>
    )
}

export default PersonnagesPage;