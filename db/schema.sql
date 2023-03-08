-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db ;


CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    review TEXT,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL(65, 2) NOT NULL,
    stock INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(id),  
    PRIMARY KEY (id)
);


CREATE TABLE tags (
    id INT AUTO_INCREMENT NOT NULL,
    tag_name TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE productTags (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
     product_id INT NOT NULL,
     tag_id INT NOT NULL,
    FOREIGN KEY(product_id) REFERENCES products(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id)  
)