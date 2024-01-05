import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
    
    const [ value, setValue ] = useState("");

    const handleForm = evt => {
        evt.preventDefault();
        onSearch(value);
    };

    const handleChange = evt => {
        setValue(evt?.target?.value);
    };

    return (
        <form onSubmit={handleForm}>
            <input 
                placeholder="Search restaurants"
                value = {value}
                onChange={handleChange}
            />
            <button>Search</button>
        </form>
    );
};