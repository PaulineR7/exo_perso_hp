import { useState } from "react";

function FormMessage() {
    // création de la variable message qui prend la valeur d'une chaîne de caractère vide
    // setMessage permet de modifier la valeur de message et entraîne le rechargement de la page
    const [message, setMessage] = useState("");

    // setMessage prend la valeur de la chaine de caractère de l'input
    const changeMessage = (event) => {
        setMessage(event.target.value);
    }

    return(
        <>
        <form>
            <label>Message :</label>
            {/* je déclare un évent qui permet de récupérer la chaîne de caractère à l'intérieur de l'input */}
            <input onChange={changeMessage} type="text" name="message" />
        </form>
        {/* dans ma balise <p> je demande la valeur de message */}
        <p>{message}</p>
        </>
    )
}

export default FormMessage;