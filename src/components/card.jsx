import '../styles/card.css'
const Card = ({name,type,price})=>{
    return(
                <div className="card">
                    <h1 className='card-title'>{name}</h1>
                    <h2 className='card-type'>{type}</h2>
                    <p>{price}</p>
                </div>

    );



}

export default Card;