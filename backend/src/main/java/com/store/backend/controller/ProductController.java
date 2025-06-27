package com.store.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @GetMapping("/product/{id}")
    public Product getProductByID(@PathVariable int id) {
        return productService.getProductByID(id);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PutMapping("/product/{id}") 
    public Product updateProduct(@PathVariable int id, @RequestBody Product updated) {
        Product current = productService.getProductByID(id);

        current.setProductName(updated.getProductName());
        current.setProductType(updated.getProductType());
        current.setPrice(updated.getPrice());
        current.setColor(updated.getColor());
        current.setSize(updated.getSize());
        current.setDescription(updated.getDescription());

        return productService.updateProduct(current);
    }

    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }

    // custom ones
    @GetMapping("/product/{color}")
    public List<Product> findByColor(@PathVariable String color) {
        return productService.findByColor(color);
    }

    @GetMapping("/product/{size}")
    public List<Product> findBySize(@PathVariable int size) {
        return productService.findBySize(size);
    }

    @GetMapping("/product/{productType}")
    public List<Product> findByProductType(@PathVariable String productType) {
        return productService.findByProductType(productType);
    }
}
