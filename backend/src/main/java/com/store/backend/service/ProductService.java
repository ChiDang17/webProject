package com.store.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.backend.model.Product;
import com.store.backend.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductByID(int id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("invalid id"));
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    // custom ones
    public List<Product> findByColor(String color) {
        return productRepository.findByColor(color);
    }

    public List<Product> findBySize (int size) {
        return productRepository.findBySize(size);
    }

    public List<Product> findByProductType(String productType) {
        return productRepository.findByProductType(productType);
    }
}
