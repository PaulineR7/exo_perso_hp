import { useState } from "react";

function CopyrightPage() {
    // création de la variable displayText qui à pour valeur "true"
    // setDisplayText va me permettre de pouvoir modifier la valeur de displayText au rechargement du composant
    const [displayText, setDisplayText] = useState(true)

    // je déclare au click que la valeur de displayText change et prend pour valeur "false"
    const buttonclick = () => {
        setDisplayText(false);
    }

    return(
        <>
        {/* si displayText est "true" il s'affiche */}
        {displayText && <p>Texte à enlever</p>}
        <button onClick={buttonclick}>Cacher le texte</button>
        </>
    )
}

export default CopyrightPage;