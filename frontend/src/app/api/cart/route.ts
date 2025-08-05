import axios from "axios";
import { cartData } from "@/model/Cart";    

// createCart (POST)
axios
    .post<cartData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/cart", {
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
    .get<cartData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/cart/find/1")
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
    .put<cartData>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/cart/1", updatedCart)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })


// deleteByCustomerId (DELETE)
axios   
    .delete("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/cart/1")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })