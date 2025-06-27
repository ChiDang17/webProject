package com.store.backend.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.stripe.Stripe;
import com.stripe.model.Charge;
import com.stripe.model.Customer;

import jakarta.annotation.PostConstruct;

@Service
public class PaymentService {

    @Value("${stripe.secret.key}")
    private String stripeSecretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeSecretKey;
    }

    public Charge chargeNewCard(String token, double amount) throws Exception {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", (int)(amount * 100));
        chargeParams.put("currency", "usd");
        chargeParams.put("source", token);

        return Charge.create(chargeParams);
    }

    public Charge chargeCustomerCard(String customerId, int amount) throws Exception {
        Customer customer = Customer.retrieve(customerId);
        String sourceCard = customer.getDefaultSource();

        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", amount);
        chargeParams.put("currency", "usd");
        chargeParams.put("customer", customerId);
        chargeParams.put("source", sourceCard);

        return Charge.create(chargeParams);
    }
}
