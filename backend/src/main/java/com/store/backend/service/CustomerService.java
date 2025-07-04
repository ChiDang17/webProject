package com.store.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.backend.model.Customer;
import com.store.backend.repository.CustomerRepository;

@Service
public class CustomerService {
    // CRUD -> POST = creating new customers, GET = getting customer's id & getting all customers, PUT = update customer info 
    // if they want to, DELETE = delete customer (such as if they choose to delete their account)

    @Autowired
    private CustomerRepository customerRepository;

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    // finding customer by their unique id, but throws error if the id isn't found
    public Customer getCustomerByID(String customerId) {
        return customerRepository.findById(customerId)
            .orElseThrow(() -> new RuntimeException("invalid id"));
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer updateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public void deleteCustomer(String customerId) {
        customerRepository.deleteById(customerId);
    }

    // custom ones
    public Customer findByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    public Customer findByPhoneNumber(int phoneNumber) {
        return customerRepository.findByPhoneNumber(phoneNumber);
    }
}
