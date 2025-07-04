// package com.store.backend.serviceTests;

// import java.util.List;

// import static org.junit.jupiter.api.Assertions.assertEquals;
// import static org.junit.jupiter.api.Assertions.assertNotNull;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;

// import com.store.backend.model.Customer;
// import com.store.backend.repository.CustomerRepository;
// import com.store.backend.service.CustomerService;

// @SpringBootTest
// public class CustomerServiceTests {
//     @Autowired
//     private CustomerService customerService;

//     @Autowired
//     private CustomerRepository customerRepository;

//     // makes sure that data from previous tests isn't going into new tests
//     @BeforeEach
//     public void clearDatabase() {
//         customerRepository.deleteAll();
//     }

//     @Test
//     public void testCreateCustomer() {
//         Customer customer = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
//         Customer saveSnoopy = customerService.createCustomer(customer);
//         assertEquals("Snoopy", saveSnoopy.getFirstName()); // makes sure saved first name is same as entered last name
//         assertNotNull(saveSnoopy.getID()); // makes sure that unique id is properly generated
//     }

//     @Test
//     public void testGetCustomerByID() {
//         Customer customer = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
//         Customer saveSnoopy = customerService.createCustomer(customer);

//         Customer getSnoopyID = customerService.getCustomerByID(saveSnoopy.getID());
    
//         assertEquals(saveSnoopy.getID(), getSnoopyID.getID());
//     }

//     @Test
//     public void testGetAllCustomers() {
//         Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
//         Customer customer2 = new Customer("Charlie", "Brown", "cbrown@gmail.com", "2nd ave", 456);
        
//         customerService.createCustomer(customer1);
//         customerService.createCustomer(customer2);

//         List<Customer> list = customerService.getAllCustomers();

//         assertEquals(2, list.size());
//     }

//     @Test
//     public void testUpdateCustomer() {
//         Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
//         Customer savedSnoopy = customerService.createCustomer(customer1);

//         savedSnoopy.setFirstName("Charlie");

//         Customer updateSnoopy = customerService.updateCustomer(savedSnoopy);

//         assertEquals("Charlie", updateSnoopy.getFirstName());
//     }

//     @Test
//     public void testDeleteCustomer() {
//         Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
//         Customer savedSnoopy = customerService.createCustomer(customer1);

//         int snoopyID = savedSnoopy.getID();

//         customerService.deleteCustomer(snoopyID);

//         // should not be present since we've deleted the customer snoopy
//         assertEquals(false, customerRepository.findById(snoopyID).isPresent());
//     }

//     // customs
//     @Test
//     public void testFindByEmail() {
//         Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
//         Customer savedSnoopy = customerService.createCustomer(customer1);

//         String snoopyEmail = savedSnoopy.getEmail();

//         List<Customer> list = customerService.findByEmail(snoopyEmail);

//         assertEquals("Snoopy", list.get(0).getFirstName());
//     }

//     @Test
//     public void testFindByPhoneNumber() {
//         Customer customer1 = new Customer("Snoopy", "Dog", "snoopy@gmail.com", "1st ave", 123);
//         Customer savedSnoopy = customerService.createCustomer(customer1);

//         int snoopyNum = savedSnoopy.getPhoneNumber();

//         List<Customer> list = customerService.findByPhoneNumber(snoopyNum);

//         assertEquals("Snoopy", list.get(0).getFirstName());
//     }
// }
