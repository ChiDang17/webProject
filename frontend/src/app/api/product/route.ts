import axios from "axios";
import { productData } from "@/model/Product";


// createProduct (POST)
axios
    .post<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product", {
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
    .get<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms//api/product/68799a419a8f5bec5795a187")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// getAllProducts (GET)
axios
    .get<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByColor (GET)
axios
    .get<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/color/gold")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByProductType (GET)
axios
    .get<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/productType/ring")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findBySize (GET)
axios
    .get<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/size/5")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByProductNumber (GET)
axios
    .get<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/productNumber/1")
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
    .put<productData>("https://cg0jnzdv-8080.usw2.devtunnels.ms//api/product/68799a419a8f5bec5795a187", updatedProduct)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// deleteProduct (DELETE)
axios
    .delete("https://cg0jnzdv-8080.usw2.devtunnels.ms//api/product/68799a419a8f5bec5795a187")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })