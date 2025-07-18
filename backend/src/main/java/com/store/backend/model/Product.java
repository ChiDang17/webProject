package com.store.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("product")
public class Product {

    @Field("_id")
    private String productId;
    @Field("productNumber")
    private int productNumber;
    @Field("productType")
    private String productType;
    @Field("color")
    private String color;
    @Field("size")
    private int size;
    @Field("price")
    private double price;
    @Field("description")
    private String description;
    @Field("imageLink")
    private String imageLink;

    public Product() {

    }

    public Product(String productId, int productNumber, String productType, String color, int size, double price, String description, String imageLink) {
        this.productId = productId;
        this.productNumber = productNumber;
        this.productType = productType;
        this.color = color;
        this.size = size;
        this.price = price;
        this.description = description;
        this.imageLink = imageLink;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public int getProductNumber() {
        return productNumber;
    }

    public void setProductNumber(int productNumber) {
        this.productNumber = productNumber;
    }

    public String getProductType() {
        return productType;
    }   

    public void setProductType(String productType) {
        this.productType = productType;
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

    public void setSize(int size) {
        this.size = size;
    }

    public double getPrice() {
        return price;
    }   

    public void setPrice (double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }
}
