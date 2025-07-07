import Card from "../components/card";
import sofa from "../assets/sofa.png";
import chair from "../assets/chair.png";
const Rent= () =>{
    const carddata = [
{
    name: "sofa",
    type:"luxury",
    price:1200,
    image: sofa
},
{
    name: "chair",
    type:"luxury",
    price:300,
    image: chair
}
    ];
    return(
        <div >
        <p>Rent</p>
        {carddata.map((item, index) => (
            <Card key={index} name={item.name} type={item.type} price={item.price} image={item.image}/>
        ))}
        </div>
    );
}
export default Rent;