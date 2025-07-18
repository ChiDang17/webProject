import axios from "axios";
import { productData } from "@/model/Product";


// createProduct (POST)
axios
    .post<productData>("http://localhost:8080/api/product", {
        "productNumber": 1,
        "productType": "ring",
        "color": "gold",
        "size": 5,
        "price": 10,
        "description": "size 5 gold ring",
        "imageLink": "www.example.com"
    }) 
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// getProductById (GET)
axios
    .get<productData>("http://localhost:8080/api/product/68705ad99a8f5bec5795a141")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// getAllProducts (GET)
axios
    .get<productData>("http://localhost:8080/api/product")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByColor (GET)
axios
    .get<productData>("http://localhost:8080/api/product/color/gold")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByProductType (GET)
axios
    .get<productData>("http://localhost:8080/api/product/productType/ring")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findBySize (GET)
axios
    .get<productData>("http://localhost:8080/api/product/size/5")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// updateProduct (PUT)
const updatedProduct = {
    "productNumber": 1,
    "productType": "ring",
    "color": "gold",
    "size": 5,
    "price": 25,
    "description": "size 5 gold ring",
    "imageLink": "www.example.com"
}
axios
    .put<productData>("http://localhost:8080/api/product/68705ad99a8f5bec5795a141", updatedProduct)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// deleteProduct (DELETE)
axios
    .delete("http://localhost:8080/api/product/68705ad99a8f5bec5795a141")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })