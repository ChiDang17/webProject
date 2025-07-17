package com.store.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.backend.model.Cart;
import com.store.backend.repository.CartRepository;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    // works for adding/deleting items from a cart
    public Cart updateCart (Cart cart) {
        return cartRepository.save(cart);
    }

    // custom ones
    public void deleteByCustomerId (String customerId) {
        cartRepository.deleteByCustomerId(customerId);
    }

    public Cart findByCustomerId(String customerId) {
        return cartRepository.findByCustomerId(customerId);
    }
}
