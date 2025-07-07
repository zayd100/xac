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
    price:1200,
    image: sofa
},
{
    name: "chair",
    type:"luxury",
    price:800,
    image: chair
},
{
    name: "King Size Bed",
    type : "Premium",
    price: 1500,
    image: bed
},
{
    name: "Study Lamp",
    type: "Standard",
    price: 200,
    image: lamp
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