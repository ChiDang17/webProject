import axios from "axios";

// chargeCard (POST)
axios
    .post("http://localhost:8080/api/payment/charge", {
        "customerId": "1",
        "amount": "10.00",
        "token": "1"
    })
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })