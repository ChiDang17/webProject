package com.store.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.model.Cart;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {
    // delete a cart by customer ID
    void deleteByCustomerId(String customerId);
    // find (all info) of cart by customer ID
    Cart findByCustomerId(String customerId);
}
