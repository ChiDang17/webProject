// package com.store.backend.repositoryTests;

// import java.util.List;

// import static org.junit.jupiter.api.Assertions.assertEquals;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

// import com.store.backend.model.Product;
// import com.store.backend.repository.ProductRepository;

// @DataJpaTest
// public class ProductRepositoryTests {
//     @Autowired
//     private ProductRepository productRepository;

//     @BeforeEach
//     public void clearDatabase() {
//         productRepository.deleteAll();
//     }

//     @Test
//     public void testFindByColor() {
//         Product product1 = new Product(1, "necklace", "silver", 16, 10.00, "silver", "16 inch silver necklace with a flower");
//         productRepository.save(product1);

//         List<Product> list = productRepository.findByColor("silver");

//         assertEquals(product1, list.get(0));
//     }

//     @Test
//     public void testFindBySize() {
//         Product product1 = new Product(1, "necklace", "silver", 16, 10.00, "silver", "16 inch silver necklace with a flower");
//         productRepository.save(product1);

//         List<Product> list = productRepository.findBySize(16);

//         assertEquals(product1, list.get(0));
//     }

//     @Test
//     public void testFindByProductType() {
//         Product product1 = new Product(1, "necklace", "silver", 16, 10.00, "silver", "16 inch silver necklace with a flower");
//         productRepository.save(product1);

//         List<Product> list = productRepository.findByProductType("necklace");

//         assertEquals(product1, list.get(0));
//     }
// }
