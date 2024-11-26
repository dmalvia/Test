CREATE DATABASE IF NOT EXISTS express_crud;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
    created_at TIMESTAMP DEFAULT NOW()
)
