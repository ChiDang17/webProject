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

    @GetMapping("/orders/{id}")
    public Orders getOrderByID(@PathVariable int id) {
        return ordersService.getOrderByID(id);
    }

    @GetMapping
    public List<Orders> getAllOrders() {
        return ordersService.getAllOrders();
    }

    @PutMapping("/orders/{id}")
    public Orders updateOrder(@PathVariable int id, @RequestBody Orders updated) {
        Orders current = ordersService.getOrderByID(id);

        current.setCustomerID(updated.getCustomerID());
        current.setProductID(updated.getProductID());
        current.setQuantity(updated.getQuantity());

        return ordersService.updateOrder(current);
    }

    @DeleteMapping("/orders/{id}")
    public void deleteOrder(@PathVariable int id) {
        ordersService.deleteOrder(id);
    }
}
