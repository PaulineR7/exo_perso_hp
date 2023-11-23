import { useState } from "react";

function LikesPage() {

    const [likes, setLikes] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false)

    const clickLikes = () => {
        if (likes < 5 ) {
            setLikes(likes + 1);
        } else {
            setDisplayMessage(true)
        }    
    }

    const closeMessage = () => {
        setDisplayMessage(false);
        setLikes(0)
    }
    
    return(
        <main>
            {displayMessage && 
            <div>
                <p>Vous ne pouvez pas liker plus de 5 fois</p>
                <button onClick={closeMessage}>Fermer le message</button>
            </div>}
            <button onClick={clickLikes}>Likes</button>
            <p>Vous avez likés {likes} fois</p>
        </main>
    )
}

export default LikesPage;