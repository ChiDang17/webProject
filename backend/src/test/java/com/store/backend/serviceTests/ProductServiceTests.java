package com.store.backend.serviceTests;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.store.backend.model.Product;
import com.store.backend.repository.ProductRepository;
import com.store.backend.service.ProductService;

@SpringBootTest
public class ProductServiceTests {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @BeforeEach
    public void clearDatabase() {
        productRepository.deleteAll();
    }

    @Test
    public void testCreateProduct() {
        Product product = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product saveProduct = productService.createProduct(product);

        assertEquals("silver", saveProduct.getColor());
        assertNotNull(saveProduct.getID());
    }

    @Test
    public void testGetProductByID() {
        Product product = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product saveProduct = productService.createProduct(product);

        Product getProductID = productService.getProductByID(saveProduct.getID());

        assertEquals(saveProduct.getID(), getProductID.getID());
    }

    @Test
    public void testGetAllProducts() {
        Product product1 = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product product2 = new Product("Diamond ring", "ring", 50.00, "gold", 5, "Gold diamond ring at size 5");

        productService.createProduct(product1);
        productService.createProduct(product2);

        List<Product> list = productService.getAllProducts();

        assertEquals(2, list.size());
    }

    @Test
    public void testUpdateProduct() {
        Product product1 = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product saveProduct = productService.createProduct(product1);

        saveProduct.setColor("gold");

        Product updated = productService.updateProduct(saveProduct);

        assertEquals("gold", updated.getColor());
    }

    @Test
    public void testDeleteProduct() {
        Product product1 = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product saveProduct = productService.createProduct(product1);

        int prodID = saveProduct.getID();

        productService.deleteProduct(prodID);

        assertEquals(false, productRepository.findById(prodID).isPresent());
    }

    // customs
    @Test
    public void testFindByColor() {
        Product product1 = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product product2 = new Product("Diamond ring", "ring", 50.00, "gold", 5, "Gold diamond ring at size 5");

        productService.createProduct(product1);
        productService.createProduct(product2);

        List<Product> list = productService.findByColor("silver");
        
        assertEquals("Flower necklace", list.get(0).getProductName());
    }

    @Test
    public void testFindBySize() {
        Product product1 = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product product2 = new Product("Diamond ring", "ring", 50.00, "gold", 5, "Gold diamond ring at size 5");

        productService.createProduct(product1);
        productService.createProduct(product2);

        List<Product> list = productService.findBySize(5);

        assertEquals("ring", list.get(0).getProductType());
    }

    @Test
    public void testFindByProductType() {
        Product product1 = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product product2 = new Product("Diamond ring", "ring", 50.00, "gold", 5, "Gold diamond ring at size 5");

        productService.createProduct(product1);
        productService.createProduct(product2);

        List<Product> list = productService.findByProductType("ring");

        assertEquals(50.00, list.get(0).getPrice());
    }
}
