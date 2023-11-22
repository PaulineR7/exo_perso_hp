import Footer from "../component/Footer";
import Header from "../component/Header";
import PersoCard from "../component/PersoCard";
import { persoOfHp } from "../utils/persoUtils";

function HomePage() {
   

    const persoOfHpSortByDateofBirth = persoOfHp.sort((perso1, perso2) => {
        return new Date(perso1.dateOfBirth) - new Date (perso2.dateOfBirth)
    })

    const persoOfHpSelected = persoOfHp.filter((perso) => {
        return perso.isPickedByTeam
    })

    console.log(persoOfHpSelected)

    const threePersoOfHpSelected = persoOfHpSelected.slice(-3)

    console.log(threePersoOfHpSelected)

    return(
        <>
        <Header currentPage="home" />
        <main>
            <section>
                <div>
                    <h2>Personnages du plus vieux au plus jeune : </h2>
                </div>

                
                {persoOfHpSortByDateofBirth.map((perso) => {
                    return(
                      <PersoCard perso={perso} />
                    )
                })}

                <h2>Trois personnages sélectionnés :</h2>
                {threePersoOfHpSelected.map((perso) => {
                    return(
                       <PersoCard perso={perso} />
                    )
                } )}

            </section>
        </main>
        <Footer />
        </>
    )
}

export default HomePage;