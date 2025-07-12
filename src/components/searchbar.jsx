
import '../styles/searchbar.css';
const Searchbar= ({value,onChange})=>{
    return (
        <div className="searchbar-containter">
            <input
            type="text"
            className="searchbar-input"
            placeholder="search furniture"
            value={value}
            onChange={onChange}

            /> 


        </div>
    )
}
export default Searchbar;