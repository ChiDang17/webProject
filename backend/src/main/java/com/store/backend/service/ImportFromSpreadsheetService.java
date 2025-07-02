package com.store.backend.service;

import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.store.backend.model.Product;
import com.store.backend.repository.ProductRepository;


@Service
public class ImportFromSpreadsheetService {
    private final ProductRepository productRepository;

    public ImportFromSpreadsheetService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> bulkImport(String filename) throws Exception {
        try (InputStreamReader reader = new InputStreamReader(
                new ClassPathResource(filename).getInputStream())) {

            CSVFormat csvFormat = CSVFormat.DEFAULT.builder()
                    .setHeader()
                    .setSkipHeaderRecord(true)
                    .build();

            Iterable<CSVRecord> records = csvFormat.parse(reader);

            List<Product> products = new ArrayList<>();
            for (CSVRecord record : records) {
                Product product = new Product();
                product.setProductNumber(Integer.parseInt(record.get("productNumber")));
                product.setProductType(record.get("productType"));
                product.setColor(record.get("color"));
                product.setSize(Integer.parseInt(record.get("size")));
                product.setPrice(Double.parseDouble(record.get("price")));
                product.setDescription(record.get("description"));
                product.setImageLink(record.get("imageLink"));

                products.add(product);
            }

            productRepository.deleteAll();
            return productRepository.saveAll(products);
        }
    }
}
