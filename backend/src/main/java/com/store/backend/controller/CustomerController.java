package com.store.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.store.backend.model.Customer;
import com.store.backend.service.CustomerService;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    // CRUD -> POST = creating new customers, GET = getting customer's id & getting all customers, PUT = update customer info 
    // if they want to, DELETE = delete customer (such as if they choose to delete their account)
    
    @Autowired
    private CustomerService customerService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    // use requestbody so spring can process the customer object and doesn't poss it as null
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    @GetMapping("/{id}")
    // use pathvariable to extract the value of id
    public Customer getCustomersByID(@PathVariable int id) {
        return customerService.getCustomerByID(id);
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    // updates based on whatever the user changes
    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer updated) {
        Customer current = customerService.getCustomerByID(id);

        current.setFirstName(updated.getFirstName());
        current.setSurname(updated.getSurname());
        current.setEmail(updated.getEmail());
        current.setAddress(updated.getAddress());
        current.setPhoneNumber(updated.getPhoneNumber());

        return customerService.updateCustomer(current);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteCustomer(id);
    }

    // custom ones
    @GetMapping("/email/{email}")
    public List<Customer> findByEmail(@PathVariable String email) {
        return customerService.findByEmail(email);
    }

    @GetMapping("/phoneNumber/{phoneNumber}")
    public List<Customer> findByPhoneNumber(@PathVariable int phoneNumber) {
        return customerService.findByPhoneNumber(phoneNumber);
    }

}
