package com.store.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.model.HomepageBanners;

@Repository
public interface HomepageBannersRepository extends MongoRepository<HomepageBanners, String> {
    
}
