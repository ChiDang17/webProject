import axios from "axios";
import { Payment } from "@/model/Payment";  

// chargeCard (POST)
axios
    .post<Payment>("http://localhost:8080/api/payment/charge", {
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