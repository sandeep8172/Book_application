import "./SearchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../../store/bookSlice";

const SearchBar = () => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const searchInput = (event) => {
        setInput(event.target.value);
    }
    const searchHandler = (event) => {
        event.preventDefault()
        dispatch(bookActions.search(input));
        setInput("")
    };

    return (
        <form onSubmit={searchHandler} className="searchBar_wrapper">
            <input
                type="text"
                className="search "
                placeholder="Search your favourite book here"
                value={input}
                onChange={searchInput}
            />
            <button type="submit">Search</button>
        </form>
    );
};
export default SearchBar;
