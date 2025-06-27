package com.store.backend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "surname")
    private String surname;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

    @Column(name = "phoneNumber")
    private int phoneNumber;

    public Customer() {

    }

    public Customer(String firstName, String surname, String email, String address, int phoneNumber) {
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }


    public int getID() {
        return id;
    }

    public void setID (int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    } 

    public void setPhoneNumber (int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    // one customer can have many orders, but an order can only have one customer
    private List<Orders> orders = new ArrayList<>();

    public List<Orders> getOrders() {
        return orders;
    }

    public void setOrders(List<Orders> orders) {
        this.orders = orders;
    }
}