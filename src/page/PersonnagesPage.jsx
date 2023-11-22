import Footer from "../component/Footer";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { persoOfHp } from "../utils/persoUtils";
import PersoCard from "../component/PersoCard";


function PersonnagesPage() {

    return(
        <>
        <Header currentPage="perso" />
        <main>
           {persoOfHp.map((perso) => {
            return(
                <PersoCard perso={perso}/>
            )
           })} 
        </main>
        <Footer />
        </>
    )
}

export default PersonnagesPage;