package com.store.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.backend.model.HomepageBanners;
import com.store.backend.repository.HomepageBannersRepository;

@RestController
@RequestMapping("/api/banners")
public class HomepageBannersController {
    
    private final HomepageBannersRepository homepageBannersRepository;

    public HomepageBannersController(HomepageBannersRepository repository) {
        this.homepageBannersRepository = repository;
    }

    @GetMapping
    public HomepageBanners getBanner() {
        List<HomepageBanners> banners = homepageBannersRepository.findAll();
        if (banners.isEmpty()) {
            return null;
        }
        return banners.get(0);
    }
}
