import Card from "../components/card";
import sofa from "../assets/sofa.png";
import bed from "../assets/bed.png";
import lamp from "../assets/lamp.png";
import chair from "../assets/chair.png";
const Rent= () =>{
    const carddata = [
{
    name: "sofa",
    type:"luxury",
    price:600,
    image: sofa,
    country:"armenia"
},
{
    name: "chair",
    type:"luxury",
    price:230,
    image: chair,
    country: "azerbaijan"
},
{
    name: "King Size Bed",
    type : "Premium",
    price: 900,
    image: bed,
    country: "belgium"
},
{
    name: "Study Lamp",
    type: "Standard",
    price: 200,
    image: lamp,
    country: "usa"
}
    ];
    return(
        <div >
        <p>Rent</p>
        {carddata.map((item, index) => (
            <Card key={index} name={item.name} type={item.type} price={item.price} image={item.image} country={item.country}/>
        ))}
        </div>
    );
}
export default Rent;