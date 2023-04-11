import axios from 'axios';

const Products = (apiCall) => {

    axios.get(apiCall)
    .then((response) => {
        console.log(response);
    });
}