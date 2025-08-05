import axios from "axios";
import { Payment } from "@/model/Payment";  

// chargeCard (POST)
axios
    .post<Payment>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/payment/charge", {
        "customerId": "1",
        "amount": "10.00",
        "token": "1"
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })