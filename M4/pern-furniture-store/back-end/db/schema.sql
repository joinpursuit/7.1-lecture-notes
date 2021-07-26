DROP DATABASE IF EXISTS furniture_dev;
CREATE DATABASE furniture_dev;

\c furniture_dev;

CREATE TABLE furniture_pieces (
    id SERIAL PRIMARY KEY,
    model_number INTEGER,
    name TEXT,
    description TEXT,
    price NUMERIC,
    year INTEGER,
    is_flat_pack BOOLEAN
);