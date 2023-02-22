import "./card.css"
export default function Card({character}){
    return (
        <div className="card">
            <h2><u>{character?.name}</u></h2>
            <img src={character?.image} alt={character?.name}/>
            <h3><u>Status:</u> {character?.status}</h3>
        </div>
    )
};