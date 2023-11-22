import { useState } from "react";

function LikesPage() {

    const [likes, setLikes] = useState(0);

    const clickLikes = () => {
        setLikes(likes + 1);
    }

    
    return(
        <main>
            <button onClick={clickLikes}>Likes</button>
            <p>Vous avez likés {likes} fois</p>
        </main>
    )
}

export default LikesPage;