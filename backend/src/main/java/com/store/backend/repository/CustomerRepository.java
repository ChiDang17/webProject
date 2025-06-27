package com.store.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    // CRUD methods included: 
        // C: save()
        // R: findByID(ID id), findAll(), findAllByID(Iterable<ID> ids)
        // U: save()
        // D: deleteByID(ID id), delete(T entity), deleteAll(), deleteAll(Iterable<? extends T> entities)
        List<Customer> findByEmail (String email);
        List<Customer> findByPhoneNumber (int phoneNumber);
}
