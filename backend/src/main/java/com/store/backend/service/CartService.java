package com.store.backend.service;

import java.util.List;

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

    public List<Cart> getAllCartItems(String customerId) {
        return cartRepository.getAllCartItems(customerId);
    }

    public Cart getCartByID (int id) {
        return cartRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("invalid id"));
    }

    // works for adding/deleting items from a cart
    public Cart updateCart (Cart cart) {
        return cartRepository.save(cart);
    }

    public void deleteCart (int id) {
        cartRepository.deleteById(id);
    }
}
