import axios from "axios";

// createCustomer (POST)
axios
    .post("http://localhost:8080/api/customer", {
        "customerId": "1",
        "firstName": "Charlie",
        "surname": "Brown",
        "email": "cbrown@gmail.com",
        "address": "123 street",
        "phoneNumber": "1234567890"
    })
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// getCustomerById (GET)
axios
    .get("http://localhost:8080/api/customer/1")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// findByEmail (GET)
axios
    .get("http://localhost:8080/api/customer/email/cbrown%40gmail.com")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// findByPhoneNumber (GET)
axios
    .get("http://localhost:8080/api/customer/phoneNumber/1234567890")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// getAllCustomers (GET)
axios
    .get("http://localhost:8080/api/customer")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
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
    .put("http://localhost:8080/api/customer/1", updatedCustomer)
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })

// deleteCustomer (DELETE)
axios
    .delete("http://localhost:8080/api/customer/1")
    .then((response: { data: any; }) => {
        console.log(response.data)
    })
    .catch((error: any) => {
        console.error(error)
    })