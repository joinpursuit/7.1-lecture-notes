DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev;

-- connecting to the database
\c bookmarks_dev;

-- create our bookmarks table
CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT,
    url TEXT,
    category TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    bookmark_id INTEGER REFERENCES bookmarks (id) ON DELETE CASCADE
);
