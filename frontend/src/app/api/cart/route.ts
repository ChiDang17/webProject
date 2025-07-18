import axios from "axios";
import { cartData } from "@/model/Cart";    

// createCart (POST)
axios
    .post<cartData>("http://localhost:8080/api/cart", {
        customerId: '1',
        items: [
            {
                productId: '123',
                quantity: 1
            }
        ]
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByCustomerId (GET)
axios
    .get<cartData>("http://localhost:8080/api/cart/find/1")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
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
    .put<cartData>("http://localhost:8080/api/cart/1", updatedCart)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })


// deleteByCustomerId (DELETE)
axios   
    .delete("http://localhost:8080/api/cart/1")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })