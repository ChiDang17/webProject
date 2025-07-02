package com.store.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
    
import com.store.backend.model.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String>{
    // filters: find by color, size, product type
    List<Product> findByColor (String color);
    List<Product> findBySize (int size);
    List<Product> findByProductType(String productType);
}
