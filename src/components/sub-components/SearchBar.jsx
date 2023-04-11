import axios from 'axios';


const SearchBar = ({ callback }) => {

    function handleSearch(e) {
        e.preventDefault();
       // const userInput = document.querySelector('input[name=sbar]').value;

        axios.get(`http://localhost:3000/sbar=${sbar.value}`)
        .then((response) => {
            callback(response.data);
        });
    }

    return (
        <>
            <form onSubmit={handleSearch}  className="searchbar-container">
                <input type="text" id="searchBar" name="sbar" />
                <img id="searchbar-img" src="src/assets/search-svgrepo-com.svg" width="25px" alt="Search Icon"/>
                <input type="submit" value="Search" id="searchButton" className="btn btn-primary"></input>
            </form>
        </>
    );
}

export default SearchBar;