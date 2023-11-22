import { useState } from "react";

function FormMessage() {

    const [message, setMessage] = useState("");

    const changeMessage = (event) => {
        setMessage(event.target.value);
    }

    return(
        <>
        <form>
            <label>Message :</label>
            <input onChange={changeMessage} type="text" name="message" />
        </form>

        <p>{message}</p>
        </>
    )
}

export default FormMessage;