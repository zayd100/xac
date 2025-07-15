import { Link } from "react-router-dom";
import '../styles/navbar.css';
function Navbar(){
    return(
        <nav className="navbar">
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/pages/rent">Rent</Link></ul>
            <ul><Link to="/pages/about">Contact Us</Link></ul>
        </nav>
    );
}
export default Navbar;