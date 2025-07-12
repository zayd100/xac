import '../styles/homecard.css';
const Homecard=({title,headline, content,image})=>{
    return(

        <div className="home-card">
            <h1 className="home-title">{title}</h1>
            <h2 className="home-headline">{headline}</h2>
            <img className='home-image' src={image} alt={title} />
            <p>{content}</p>
        </div>
    )
}
export default Homecard;