package com.store.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.backend.model.Orders;
import com.store.backend.repository.OrdersRepository;

@Service
public class OrdersService {
    @Autowired
    private OrdersRepository ordersRepository;

    public Orders createOrder(Orders order) {
        return ordersRepository.save(order);
    }

    public List<Orders> findByCustomerId(String customerId) {
        return ordersRepository.findByCustomerId(customerId);
    }

    public Orders getOrderById(String orderId) {
        return ordersRepository.findById(orderId)
            .orElseThrow(() -> new RuntimeException("order not found"));
    }

    public List<Orders> getAllOrders() {
        return ordersRepository.findAll();
    }

    public Orders updateOrder(Orders order) {
        return ordersRepository.save(order);
    }

    // such as when customer cancels order
    public void deleteOrder(String orderId) {
        ordersRepository.deleteById(orderId);
    }
}
