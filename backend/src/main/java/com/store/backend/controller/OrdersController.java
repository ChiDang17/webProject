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

import com.store.backend.model.Orders;
import com.store.backend.service.OrdersService;

@RestController
@RequestMapping("/api/orders")
public class OrdersController {
    @Autowired
    public OrdersService ordersService;

    @PostMapping
    public Orders createOrder(@RequestBody Orders order) {
        return ordersService.createOrder(order);
    }

    @GetMapping("/customer/{customerId}")
    public List<Orders> findByCustomerId(@PathVariable String customerId) {
        return ordersService.findByCustomerId(customerId);
    }

    @GetMapping("/orderId/{orderId}")
    public Orders getOrderById(@PathVariable String orderId) {
        return ordersService.getOrderById(orderId);
    }

    @GetMapping
    public List<Orders> getAllOrders() {
        return ordersService.getAllOrders();
    }

    @PutMapping("/{orderId}")
    public Orders updateOrder(@PathVariable String orderId, @RequestBody Orders updated) {
        Orders current = ordersService.getOrderById(orderId);

        current.setCustomerId(updated.getCustomerId());
        current.setItems(updated.getItems());

        return ordersService.updateOrder(current);
    }

    @DeleteMapping("/{orderId}")
    public void deleteOrder(@PathVariable String orderId) {
        ordersService.deleteOrder(orderId);
    }
}
