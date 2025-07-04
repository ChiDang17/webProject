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

    public Orders getOrderByID(String customerId) {
        return ordersRepository.findById(customerId)
            .orElseThrow(() -> new RuntimeException("order id not found"));
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
