import Footer from "../component/Footer";
import Header from "../component/Header";
import { persoOfHp } from "../utils/persoUtils";

function RandomPersoPage() {

    
    const randomIndex = (Math.random() * (persoOfHp.length - 1)).toFixed(0);

    const randomPerso = persoOfHp[randomIndex];

    return(
        <>
        <Header />
        <main>
            <article>
                <p>{randomPerso.name}</p>
                <p>{randomPerso.house}</p>
                <p>{randomPerso.dateOfBirth}</p>
                <img src={randomPerso.img} alt="" />
            </article>
        </main>
        <Footer />
        </>
    )
}


export default RandomPersoPage;