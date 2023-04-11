CREATE DATABASE ecomm_app;
USE ecomm_app;

CREATE TABLE products (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    prod_desc TEXT NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO products (title, prod_desc, user_id)
VALUES
('Test Product 1', 'This product is a test product and not a real one.', 'admin');
('Test Product 2', 'This product is a test product and not a real one.', 'admin');