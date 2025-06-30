package com.store.backend.serviceTests;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.store.backend.model.Orders;
import com.store.backend.repository.OrdersRepository;
import com.store.backend.service.OrdersService;

@SpringBootTest
public class OrdersServiceTests {
    @Autowired
    private OrdersService ordersService;

    @Autowired
    private OrdersRepository ordersRepository;

    @BeforeEach
    public void clearDatabase() {
        ordersRepository.deleteAll();
    }

    @Test
    public void testCreateOrder() {
        Orders order = new Orders("123", 456, LocalDateTime.now(), 1);
        Orders saveOrder = ordersService.createOrder(order);

        assertEquals((123), saveOrder.getCustomerID());
        assertNotNull(saveOrder.getID());
    }

    @Test
    public void testGetOrderByID() {
        Orders order = new Orders("123", 456, LocalDateTime.now(), 1);
        Orders saveOrder = ordersService.createOrder(order);

        Orders getOrderID = ordersService.getOrderByID(saveOrder.getID());

        assertEquals(saveOrder.getID(), getOrderID.getID());
    }

    @Test
    public void testGetAllOrders() {
        Orders order1 = new Orders("123", 456, LocalDateTime.now(), 1);
        Orders order2 = new Orders("456", 789, LocalDateTime.now(), 3);

        ordersService.createOrder(order1);
        ordersService.createOrder(order2);

        List<Orders> list = ordersService.getAllOrders();

        assertEquals(2, list.size());
    }

    @Test
    public void testUpdateOrder() {
        Orders order1 = new Orders("123", 456, LocalDateTime.now(), 1);
        Orders saveOrder = ordersService.createOrder(order1);

        saveOrder.setQuantity(2);

        Orders updated = ordersService.updateOrder(saveOrder);

        assertEquals(2, updated.getQuantity());
    }

    @Test
    public void testDeleteOrder() {
        Orders order1 = new Orders("123", 456, LocalDateTime.now(), 1);
        Orders saveOrder = ordersService.createOrder(order1);
        
        int orderID = saveOrder.getID();

        ordersService.deleteOrder(orderID);

        assertEquals(false, ordersRepository.findById(orderID).isPresent());
    }
}
