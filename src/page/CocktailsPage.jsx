import { useState } from "react";

function CocktailsPage () {

    const [cocktails, setCocktails] = useState(null)

    if (!cocktails) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        setCocktails(json)
    })
    }

    return(
        <div>
        {cocktails ? <p> Cocktail prêt </p> : <p>Cocktails en cours de chargement</p> }
        </div>
    )
    
}

export default CocktailsPage;