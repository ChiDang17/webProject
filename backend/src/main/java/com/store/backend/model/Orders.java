package com.store.backend.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "customerID")
    private String customerID;

    @Column(name = "productID")
    private int productID;

    @Column(name = "orderDate")
    private LocalDateTime orderDate;

    @Column(name = "quantity")
    private int quantity;

    public Orders() {

    }

    public Orders(String customerID, int productID, LocalDateTime orderDate, int quantity) {
        this.customerID = customerID;
        this.productID = productID;
        this.orderDate = orderDate;
        this.quantity = quantity;
    }

    public int getID() {
        return id;
    }

    public void setID(int id) {
        this.id = id;
    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    // each row of productsInOrder pair an order's foreign key with a product's foreign key
    // basically showing which products are part of the order
    @JoinTable(
        name = "productsInOrder",
        joinColumns = @JoinColumn(
            name = "orderID"
        ),
        inverseJoinColumns = @JoinColumn(
            name = "productID"
        )
    )
    // one order can have many products, and products can be apart of many orders
    private List <Product> product = new ArrayList<>(); 

    public List<Product> getProduct() {
        return product;
    }

    public void setProduct(List<Product> product) {
        this.product = product;
    }

    @ManyToOne
    // only one order belongs to a customer, but a customer can have many orders
    private Customer customer;

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer (Customer customer) {
        this.customer = customer;
    }
}
