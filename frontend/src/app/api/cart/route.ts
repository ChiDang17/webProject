import axios from "axios";


// createCart (POST)
axios
    .post("http://localhost:8080/api/cart", {
        customerId: '1',
        items: [
            {
                productId: '123',
                quantity: 1
            }
        ]
    })
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// findByCustomerId (GET)
axios
    .get("http://localhost:8080/api/cart/find/1")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// updateCart (PUT)
const updatedCart = {
    customerId: '1',
    items: [
        {
            productId: '123',
            quantity: 2
        }
    ]
}
axios
    .put("http://localhost:8080/api/cart/1", updatedCart)
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })


// deleteByCustomerId (DELETE)
axios   
    .delete("http://localhost:8080/api/cart/1")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })