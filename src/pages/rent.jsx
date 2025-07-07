import Card from "../components/card";

const Rent= () =>{
    const carddata = [
{
    name: "sofa",
    type:"luxury",
    price:231
},
{
    name: "sofa",
    type:"luxury",
    price:231
}
    ];
    return(
        <div >
        <p>Rent</p>
        {carddata.map((item, index) => (
            <Card key={index} name={item.name} type={item.type} price={item.price} />
        ))}
        </div>
    );
}
export default Rent;