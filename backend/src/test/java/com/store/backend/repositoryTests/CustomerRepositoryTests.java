package com.store.backend.repositoryTests;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.store.backend.model.Customer;
import com.store.backend.repository.CustomerRepository;

@DataJpaTest
public class CustomerRepositoryTests {
    @Autowired
    private CustomerRepository customerRepository;

    @BeforeEach
    public void clearDatabase() {
        customerRepository.deleteAll();
    }
    
    @Test
    public void testFindByEmail() {
        Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        customerRepository.save(customer1);

        List<Customer> list = customerRepository.findByEmail("snoopy@gmail.com");

        assertEquals(customer1, list.get(0));
    }

    @Test
    public void testFindByPhoneNumber() {
        Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        customerRepository.save(customer1);

        List<Customer> list = customerRepository.findByPhoneNumber(123);

        assertEquals(customer1, list.get(0));
    }
}
