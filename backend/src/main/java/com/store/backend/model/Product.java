package com.store.backend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "productName")
    private String productName;

    @Column(name = "productType")
    private String productType;

    @Column(name = "price")
    private double price;

    @Column(name = "color")
    private String color;

    @Column(name = "size")
    private int size;

    @Column(name = "description")
    private String description;

    public Product() {

    }

    public Product(String productName, String productType, double price, String color, int size, String description){
        this.productName = productName;
        this.productType = productType;
        this.price = price;
        this.color = color;
        this.size = size;
        this.description = description;
    }

    public int getID() {
        return id;
    }

    public void setID(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }
    
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getSize() {
        return size;
    }

    public void setSize (int size) {
        this.size = size;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    // don't want to do cascadetype.all because if a customer decides 
    // to add/delete an item from an order, that order should still exist
    @ManyToMany(mappedBy = "product")
    // a product can belong to many orders, and an order can have many products
    private List<Orders> orders = new ArrayList<>();

    public List<Orders> getOrders() {
        return orders;
    }

    public void setOrders(List<Orders> orders) {
        this.orders = orders;
    }
}
