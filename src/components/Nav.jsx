import SearchBar from './sub-components/SearchBar';
import { useState } from 'react';

const Nav = ({callback}) => {
    const [test, setTest] = useState("");

    // Send data to App component 
    const sendSearchData = (obj) => {
        callback(obj);
    }
    // Recieve data from searchbar
    const getSearchData = (value) => {
        setTest(value.status);
        sendSearchData(value);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg justify-content-center">
                <ul className="navbar-nav w-75 ">
                    <a className="navbar-brand px-2" href="/"><img src="/shop.svg" className="home-icon" width="30px" height="30px" alt="home icon"></img></a>
                    <li className="nav-item px-2 w-75"><SearchBar callback={getSearchData}/></li>
                    <li className="nav-item px-2" ><a className="nav-link" href="/create-product">Create Product</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="/signup">Sign Up</a></li>
                    <li className="nav-item px-2"><a className="nav-link" href="/login">Login</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;