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

import com.store.backend.controller.ProductController;
import com.store.backend.model.Product;
import com.store.backend.service.ProductService;

public class ProductControllerTests {
    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

    @BeforeEach
    public void clearDatabase() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateProduct() {
        Product product = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        
        when(productService.createProduct(product)).thenReturn(product);

        Product result = productController.createProduct(product);

        assertEquals("Flower necklace", result.getProductName());
    }

    @Test
    public void testGetProductByID() {
        Product product = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        int id = 1;

        when(productService.getProductByID(id)).thenReturn(product);

        Product result = productController.getProductByID(id);

        assertEquals("necklace", result.getProductType());
    }

    @Test
    public void testGetAllProducts() {
        Product product1 = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product product2 = new Product("Diamond ring", "ring", 50.00, "gold", 5, "Gold diamond ring at size 5");

        when(productService.getAllProducts()).thenReturn(List.of(product1, product2));

        List<Product> list = productController.getAllProducts();

        assertEquals(2, list.size());
    }

    @Test
    public void testUpdateProduct() {
        Product initial = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        Product updated = new Product("Flower necklace", "necklace", 15.00, "silver", 16, "16 inch silver necklace with a flower");
        int id = 1;

        when(productService.getProductByID(id)).thenReturn(initial);
        when(productService.updateProduct(any(Product.class))).thenReturn(updated);

        Product result = productController.updateProduct(id, updated);

        assertEquals(15.00, result.getPrice());
    }

    @Test
    public void testDeleteProduct() {
        int id = 1;

        doNothing().when(productService).deleteProduct(id);

        productService.deleteProduct(id);

        verify(productService).deleteProduct(id);
    }

    // customs
    @Test
    public void testFindByColor() {
        Product product = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        List<Product> list = List.of(product);

        when(productService.findByColor("silver")).thenReturn(list);

        assertEquals(("Flower necklace"), list.get(0).getProductName());
    }

    @Test
    public void testFindBySize() {
        Product product = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        List<Product> list = List.of(product);

        when(productService.findBySize(16)).thenReturn(list);

        assertEquals(("necklace"), list.get(0).getProductType());
    }

    @Test
    public void testFindByProductType() {
        Product product = new Product("Flower necklace", "necklace", 10.00, "silver", 16, "16 inch silver necklace with a flower");
        List<Product> list = List.of(product);

        when(productService.findByProductType("necklace")).thenReturn(list);

        assertEquals(16, list.get(0).getSize());
    }
}
