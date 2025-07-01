package com.store.backend.model;

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
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "customerID")
    private String customerID;

    @Column(name = "productID")
    private int productID;

    @Column(name = "quantity")
    private int quantity;

     public Cart() {

    }

    public Cart(String customerID, int productID, int quantity) {
        this.customerID = customerID;
        this.productID = productID;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @OneToOne
    @JoinColumn(name = "customerID")
    // one customer has one cart, and a cart belongs to one customer
    private Customer customer;

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer (Customer customer) {
        this.customer = customer;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    // a cart can have many products, and those products can belong to many different carts
    @JoinTable(
        name = "productsInCart",
        joinColumns = @JoinColumn(
            name = "cartID"
        ),
        inverseJoinColumns = @JoinColumn(
            name = "productID"
        )
    )

    private List <Product> product = new ArrayList<>(); 

    public List<Product> getProduct() {
        return product;
    }

    public void setProduct(List<Product> product) {
        this.product = product;
    }
}
