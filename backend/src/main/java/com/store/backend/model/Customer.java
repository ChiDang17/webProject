package com.store.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("customer")
public class Customer {
    @Id
    private String customerId;

    private String firstName;
    private String surname;
    private String email;
    private String address;
    private String phoneNumber;

    public Customer() {

    }

    public Customer(String firstName, String surname, String email, String address, String phoneNumber) {
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }


    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId (String customerId) {
        this.customerId = customerId;
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

    public String getPhoneNumber() {
        return phoneNumber;
    } 

    public void setPhoneNumber (String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}