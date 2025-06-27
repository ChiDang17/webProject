package com.store.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.model.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {
    // default CRUD methods included should be enough
}
