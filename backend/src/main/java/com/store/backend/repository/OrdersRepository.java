package com.store.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.model.Orders;

@Repository
public interface OrdersRepository extends MongoRepository<Orders, String> {
    List<Orders> findByCustomerId (String customerId);
}
