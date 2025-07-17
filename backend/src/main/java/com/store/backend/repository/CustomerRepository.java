package com.store.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.model.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    // CRUD methods included: 
        // C: save()
        // R: findByID(ID id), findAll(), findAllByID(Iterable<ID> ids)
        // U: save()
        // D: deleteByID(ID id), delete(T entity), deleteAll(), deleteAll(Iterable<? extends T> entities)
        Customer findByEmail (String email);
        Customer findByPhoneNumber (String phoneNumber);
}
