import {useState} from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState("");
    
    const handleChange = (e) =>{
        setTerm(e.target.value);
        
    }

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(term);
        onSubmit(term);
        
    };

    return <div className="search-bar">
        <form onSubmit={handleClick}>
            <label>Enter Search Term</label>
            <input value={term} type="text" onChange={handleChange}/>
            {/* <button type="submit"> Click me</button> */}
        </form>
    </div>;
}

export default SearchBar;