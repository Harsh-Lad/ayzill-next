import axios from "axios";

export default function fetchProducts() {
    var url = 'http://127.0.0.1:8000/allProds/'
    axios.get(url)
    .then(response =>{
        return response.data
    })
}