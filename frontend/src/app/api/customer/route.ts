import axios from "axios";
import { customerData } from "@/model/Customer";

// createCustomer (POST)
axios
    .post<customerData>("http://localhost:8080/api/customer", {
        "customerId": "1",
        "firstName": "Charlie",
        "surname": "Brown",
        "email": "cbrown@gmail.com",
        "address": "123 street",
        "phoneNumber": "1234567890"
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// getCustomerById (GET)
axios
    .get<customerData>("http://localhost:8080/api/customer/1")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByEmail (GET)
axios
    .get<customerData>("http://localhost:8080/api/customer/email/cbrown%40gmail.com")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// findByPhoneNumber (GET)
axios
    .get<customerData>("http://localhost:8080/api/customer/phoneNumber/1234567890")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// getAllCustomers (GET)
axios
    .get<customerData>("http://localhost:8080/api/customer")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// updateCustomer (PUT)
const updatedCustomer = {
    "customerId": "1",
        "firstName": "Charlie",
        "surname": "Brown",
        "email": "cbrown@gmail.com",
        "address": "456 street",
        "phoneNumber": "1234567890"
}
axios
    .put<customerData>("http://localhost:8080/api/customer/1", updatedCustomer)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })

// deleteCustomer (DELETE)
axios
    .delete("http://localhost:8080/api/customer/1")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    })