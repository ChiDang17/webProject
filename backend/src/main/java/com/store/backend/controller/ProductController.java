package com.store.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.backend.model.Product;
import com.store.backend.service.ProductService;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<List<Product>> createProduct() {
        try {
            List<Product> products = productService.createProduct();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/{productId}")
    public Product getProductByID(@PathVariable String productId) {
        return productService.getProductByID(productId);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PutMapping("/{productId}") 
    public Product updateProduct(@PathVariable String productId, @RequestBody Product updated) {
        Product current = productService.getProductByID(productId);

        current.setProductId(updated.getProductId());
        current.setProductNumber(updated.getProductNumber());
        current.setProductType(updated.getProductType());
        current.setColor(updated.getColor());
        current.setSize(updated.getSize());
        current.setPrice(updated.getPrice());
        current.setDescription(updated.getDescription());
        current.setImageLink(updated.getImageLink());

        return productService.updateProduct(current);
    }

    @DeleteMapping("/{productId}")
    public void deleteProduct(@PathVariable String productId) {
        productService.deleteProduct(productId);
    }

    // custom ones
    @GetMapping("/color/{color}")
    public List<Product> findByColor(@PathVariable String color) {
        return productService.findByColor(color);
    }

    @GetMapping("/size/{size}")
    public List<Product> findBySize(@PathVariable int size) {
        return productService.findBySize(size);
    }

    @GetMapping("/productType/{productType}")
    public List<Product> findByProductType(@PathVariable String productType) {
        return productService.findByProductType(productType);
    }
}
