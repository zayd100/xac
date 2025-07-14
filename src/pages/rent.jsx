import Card from "../components/card";
import sofa from "../assets/sofa.png";
import bed from "../assets/bed.png";
import lamp from "../assets/lamp.png";
import chair from "../assets/chair.png";
import rt from "../assets/rt.png";
import Searchbar from "../components/searchbar";
import { useState } from "react";
import '../styles/rent.css';
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
},
{
    name: "Royal Side Tables",
    type: "Luxury",
    price: 320,
    image: rt,
    country: "Sweden"
}
    ];
    const [cards,setcards]=useState(carddata);
    const [searchquery,setsearch]=useState("");
    const sortcheap=()=>{
        const cheap = [...carddata].sort((a,b)=>a.price-b.price);
        setcards(cheap)
    }
    const sorttop = () => {
        const top = [...carddata].sort((a,b)=>b.price-a.price);
        setcards(top);
    }
    //filter the cards based on the user's search query
    const filterCards= cards.filter(card=> 
    card.name.toLowerCase().includes(searchquery.toLowerCase()));
    
    const handleSearch= (event)=>{
        setsearch(event.target.value);
    }  

        
        return(

        <div className="rent">
    <Searchbar value={searchquery} onChange={handleSearch}/>
    <div className="rent-btn-container">
        <button className = "rent-button" onClick={sortcheap}>Most Economical</button>
        <button className="rent-button" onClick={sorttop}> Top Of The Line</button>
            </div>
        {filterCards.map((item, index) => (
            <Card key={index} name={item.name} type={item.type} price={item.price} image={item.image} country={item.country}/>
        ))}
        </div>
    );
}
export default Rent;