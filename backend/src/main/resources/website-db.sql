-- CREATE TABLE product (
--     id SERIAL PRIMARY KEY,
--     productName VARCHAR(255),
--     productType VARCHAR(255),
--     price DECIMAL(10, 2),
--     color VARCHAR(255),
--     size INTEGER,
--     description TEXT
-- );

-- CREATE TABLE customer (
--     id SERIAL PRIMARY KEY,
--     firstName VARCHAR(255),
--     surname VARCHAR(255),
--     email VARCHAR(255),
--     address TEXT,
--     phoneNumber INTEGER
-- );

-- CREATE TABLE orders (
--     id SERIAL PRIMARY KEY,
--     customerID VARCHAR(255) NOT NULL REFERENCES customer(id),
--     productID INTEGER NOT NULL REFERENCES product(id),
--     orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     quantity INTEGER NOT NULL
-- );

-- -- CREATE TABLE cart (
-- --     id SERIAL PRIMARY KEY,
-- --     customerID VARCHAR(255) NOT NULL REFERENCES customer(id),
-- --     productID INTEGER NOT NULL REFERENCES product(id),
-- --     quantity INTEGER NOT NULL
-- -- );

-- INSERT INTO product
-- (productName, price, color, size, description)
-- VALUES
-- ('a', 'necklace', 10.00, 'silver', 16, 'silver necklace with length of 16 inches'),
-- ('b', 'ring', 5.50, 'gold', 5, 'size 5 gold ring');

-- INSERT INTO customer
-- (firstName, surname, email, address, phoneNumber)
-- VALUES
-- ('bob', 'b', 'bobb@gmail.com', '123 4th st', 1234567890),
-- ('tom', 't', 'tomt@outlook.com', '456 7th ave', 0987654321);

-- INSERT INTO orders
-- (id, customerID, productID, orderDate, quantity)
-- VALUES
-- -- example with customer #3a, item #1, and 2 of that item 
-- ('3a', 1, '2025-06-24 16:37:48', 2);