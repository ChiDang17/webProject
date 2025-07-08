package com.store.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.backend.model.Product;
import com.store.backend.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final ImportFromSpreadsheetService importFromSpreadsheetService;

    @Autowired
    public ProductService(ProductRepository productRepository, ImportFromSpreadsheetService importFromSpreadsheetService) {
        this.productRepository = productRepository;
        this.importFromSpreadsheetService = importFromSpreadsheetService;
    }

    public List<Product> createProduct() throws Exception {
        return importFromSpreadsheetService.bulkImport("products.csv");
    }

    public Product getProductById(String productId) {
        return productRepository.findById(productId)
            .orElseThrow(() -> new RuntimeException("invalid id"));
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(String productId) {
        productRepository.deleteById(productId);
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
