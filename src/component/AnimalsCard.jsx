function AnimalsCard({animals}) {

    const animalsOfHp = [
        {
            id: 1,
            name: "Hedwige",
            race: "Chouette",
            master: "Harry",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupJL1-NYT--RW5NS7gnIl705le2gfMN0OSg&usqp=CAU",
        },
        {
            id: 2,
            name: "Ulysses",
            race: "Hibou",
            master: "Drago",
            img: "https://i.pinimg.com/736x/2d/55/aa/2d55aa31f49d23974869a79dcf07f290.jpg", 
        },
        {
            id: 3,
            name: "Pattenrong",
            race: "chat",
            master: "Hermione",
            img: "https://i.pinimg.com/474x/64/a2/60/64a2600326c9f0023cb3d077436d43ad.jpg",
        },
        {
            id: 4,
            name: "Croutard",
            race: "rat",
            master: "Ron",
            img: "https://static.wikia.nocookie.net/harrypotter/images/6/60/Cro%C3%BBtard.png/revision/latest?cb=20130906202831&path-prefix=fr",
            
        },
        {
            id: 5,
            name: "Basilic",
            race: "reptile",
            master:"Tom",
            img: "https://pm1.aminoapps.com/7082/5c689b6cf242d8fe3eaa12e472f87d0272a7507br1-736-520v2_uhq.jpg",
        }
    ]

    return(
        <main>
            <article>
                {animalsOfHp.map((animal) => {
                    return(
                        <>
                        <h2>{animal.name}</h2>
                        <img src={animal.img} alt="" />
                        </>
                    )
                })}
               
            </article>
        </main>
    )
}

export default AnimalsCard;