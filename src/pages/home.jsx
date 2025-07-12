import React from "react";
import Homecard from '../components/HomeCard'
import { useState } from "react";
import '../styles/home.css';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
function Home(){
    const homedata = [
        {
            title:"Best Prices",
            headline: "Style Your Space Without Owning a Thing",
            image: home1,
            content: "Tired of empty rooms or moving heavy furniture? Whether you're new in town, setting up your dream space temporarily, or just want beautiful furniture without the big spend—you’re in the right place. We offer high-quality, stylish furniture for rent—fast delivery, flexible plans, and zero stress. Rent it. Use it. Love it. Return it when you’re ready"
        },
        {
            title: "Top Quality",
            headline: "Move In. Plug In. Sit Down. We’ve Got the Rest.",
            image: home2,
            content: "We get it—life moves fast. Maybe you're settling into a new city, launching a new chapter, or just not ready to buy. That doesn’t mean you have to settle for bare rooms or uncomfortable chairs. We offer beautifully designed, high-quality furniture you can rent on your terms. No big upfront costs, no moving trucks, no regrets. Just comfort, style, and freedom—delivered. Make your space feel like you, without the long-term baggage."
        }
    ];
    const [home,sethome]=useState(homedata);
    return(
     <div className="home-container">
       
     <h1>Welcome to Rent The Furn!</h1>
     <p>Here you can find the best prices! </p>
     {        homedata.map((data, index) => (
            <Homecard title={data.title} headline={data.headline} content={data.content} image={data.image}/>
     ))}
     </div>
    );
}
export default Home;