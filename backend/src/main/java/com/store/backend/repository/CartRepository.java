package com.store.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.model.Cart;
import com.store.backend.model.Cart.CartItem;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {
    // get all cart items in a certain customer's cart
    List<CartItem> getAllCartItems(String customerId);
    // delete a cart by customer ID
    void deleteByCustomerId(String customerId);
    // find (all info) of cart by customer ID
    Cart findByCustomerId(String customerId);
}
