package com.store.backend.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("cart")
public class Cart {

    @Field("customerId")
    private String customerId;
    @Field("items")
    private List<CartItem> items;

    public static class CartItem {
        private String productId;
        private int quantity;

        public CartItem() {

        }

        public CartItem(String productId, int quantity) {
            this.productId = productId;
            this.quantity = quantity;
        }

        public String getProductId() {
            return productId;
        }   

        public void setProductId(String productId) {
            this.productId = productId;
        }

        public int getQuantity() {
            return quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }
    }



     public Cart() {

    }

    public Cart(String customerId, List<CartItem> items) {
        this.customerId = customerId;
        this.items = items;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items; 
    }
}
