package com.store.backend.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class CloudinaryService {
    private final Cloudinary cloudinary;

    public CloudinaryService() {
        cloudinary = new Cloudinary(ObjectUtils.asMap(
            "cloud_name", "dmxl3isk1",
            "api_key", "513547214458781",
            "api_secret", "dAEC3d_-LyamNF5oRFcK21GzKd8"
        ));
    }

    @SuppressWarnings("unchecked")
    public String uploadImageLink(MultipartFile file) throws IOException {
        Map<String, Object> upload = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
        return (String) upload.get("url");
    }
}
