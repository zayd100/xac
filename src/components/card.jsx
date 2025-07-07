import '../styles/card.css'
const Card = ({name,type,price,image})=>{
    return(
        <div className="cards-grid">
                <div className="card">
                    <div className='card-image'>
                        <img src={image} alt={name} />
                    </div>
                    <h1 className='card-title'>{name}</h1>
                    <h2 className='card-type'>{type}</h2>
                    <p>{price}$</p>
                </div>
                        </div>

    );



}

export default Card;