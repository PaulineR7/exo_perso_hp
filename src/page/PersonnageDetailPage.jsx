
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { persoOfHp } from "../utils/persoUtils";

function PersonnageDetailPage () {

    
    
    const { persoId } = useParams();

    const persoFound = persoOfHp.find((perso) => {
        return(
            perso.id == persoId
        )
    })
    return(
        <>
        <Header />
        <main>
            <article>
                <p>{persoFound.name}</p>
                <p>Maison : {persoFound.house}</p>
                <p>Date d'anniversaire : {persoFound.dateOfBirth}</p>
                <img src={persoFound.img} alt="" />
              
            </article>
        </main>
        <Footer />
        </>
    )
}

export default PersonnageDetailPage;