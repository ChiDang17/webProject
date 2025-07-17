package com.store.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.store.backend.model.Cart;
import com.store.backend.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cart createCart(@RequestBody Cart cart) {
        return cartService.createCart(cart);
    }

    @PutMapping("/{customerId}")
    public Cart updateCart(@PathVariable String customerId, @RequestBody Cart updated) {
        Cart current = cartService.findByCustomerId(customerId);

        current.setCustomerId(updated.getCustomerId());
        current.setItems(updated.getItems());

        return cartService.updateCart(current);
    }

    @DeleteMapping("/{customerId}")
    public void deleteByCustomerId(@PathVariable String customerId) {
        cartService.deleteByCustomerId(customerId);
    }

    @GetMapping("/find/{customerId}")
    public Cart findByCustomerId(@PathVariable String customerId) {
        return cartService.findByCustomerId(customerId);
    }
}
