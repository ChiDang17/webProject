import axios from "axios";


// createProduct (POST)
axios
    .post("http://localhost:8080/api/product", {
        "productNumber": 1,
        "productType": "ring",
        "color": "gold",
        "size": 5,
        "price": 10,
        "description": "size 5 gold ring",
        "imageLink": "www.example.com"
    }) 
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// getProductById (GET)
axios
    .get("http://localhost:8080/api/product/68705ad99a8f5bec5795a141")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// getAllProducts (GET)
axios
    .get("http://localhost:8080/api/product}")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// findByColor (GET)
axios
    .get("http://localhost:8080/api/product/color/gold")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// findByProductType (GET)
axios
    .get("http://localhost:8080/api/product/productType/ring")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// findBySize (GET)
axios
    .get("http://localhost:8080/api/product/size/5")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
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
    .put("http://localhost:8080/api/product/68705ad99a8f5bec5795a141", updatedProduct)
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// deleteProduct (DELETE)
axios
    .delete("http://localhost:8080/api/product/productId=68705ad99a8f5bec5795a141")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })