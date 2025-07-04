package com.store.backend.model;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import com.store.backend.model.Cart.CartItem;


@Document("orders")
public class Orders {
    @Id
    private String orderId;

    private String customerId;
    private List<CartItem> items;
    private LocalDateTime orderDate;


    public Orders() {

    }

    public Orders(String orderId, String customerId, List<CartItem> items, LocalDateTime orderDate) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.items = items;
        this.orderDate = orderDate;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerID(String customerId) {
        this.customerId = customerId;
    }

     public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items; 
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }
}
