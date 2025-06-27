package com.store.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.backend.service.PaymentService;
import com.stripe.model.Charge;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/charge")
    public Charge chargeCard(HttpServletRequest request) throws Exception {
        String token = request.getHeader("token");
        Double amount = Double.valueOf(request.getHeader("amount"));
        return this.paymentService.chargeNewCard(token, amount);
    }
}
