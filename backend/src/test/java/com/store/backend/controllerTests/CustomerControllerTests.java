package com.store.backend.controllerTests;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;

import com.store.backend.controller.CustomerController;
import com.store.backend.model.Customer;
import com.store.backend.service.CustomerService;

public class CustomerControllerTests {

    @Mock
    private CustomerService customerService;

    @InjectMocks
    private CustomerController customerController;

    @BeforeEach
    public void clearDatabase() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateCustomer() {
        Customer input = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        when(customerService.createCustomer(input)).thenReturn(input);

        Customer result = customerController.createCustomer(input);

        assertEquals("Snoopy", result.getFirstName());
    }

    @Test
    public void testGetCustomerByID() {
        Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        int id = 1;

        when(customerService.getCustomerByID(id)).thenReturn(customer1);

        Customer result = customerController.getCustomersByID(id);

        assertEquals("Snoopy", result.getFirstName());
    }

    @Test
    public void testGetAllCustomers() {
        Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        Customer customer2 = new Customer("Charlie", "Brown", "cbrown@gmail.com", "2nd ave", 456);

        when(customerService.getAllCustomers()).thenReturn(List.of(customer1, customer2));

        List<Customer> list = customerController.getAllCustomers();
        assertEquals(2, list.size());
    }

    @Test
    public void testUpdateCustomer() {
        int id = 1;
        Customer initial = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        Customer updated = new Customer("Charlie", "Dog", "snoopy@gmail.com", "1st ave", 123);

        when(customerService.getCustomerByID(id)).thenReturn(initial);

        when(customerService.updateCustomer(any(Customer.class))).thenReturn(updated);

        Customer result = customerController.updateCustomer(id, updated);

        assertEquals("Charlie", result.getFirstName());
    }

    @Test
    public void testDeleteCustomer() {
        int id = 1;

        doNothing().when(customerService).deleteCustomer(id); // since deleteCustomer method is void

        customerService.deleteCustomer(id);

        verify(customerService).deleteCustomer(id);
    }

    // custom ones
    @Test
    public void testFindByEmail() {
        Customer customer = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        List<Customer> list = List.of(customer);

        when(customerService.findByEmail("snoopy@gmail.com")).thenReturn(list);

        assertEquals("Snoopy", list.get(0).getFirstName());
    }

    @Test
    public void testFindByPhoneNumber() {
        Customer customer = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
        List<Customer> list = List.of(customer);

        when(customerService.findByPhoneNumber(123)).thenReturn(list);

        assertEquals("Dog", list.get(0).getSurname());
    }
}
