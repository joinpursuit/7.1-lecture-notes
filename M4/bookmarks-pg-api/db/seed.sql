-- connect to our database in psql
\c bookmarks_dev;

INSERT INTO bookmarks
(name, url, category, is_favorite)
VALUES
('MDN', 'https://developer.mozilla.org/en-US/', 'educational', true),
('Apartment Therapy', 'https://www.apartmenttherapy.com', 'inspirational', true),
('DMV', 'https://dmv.ny.gov', 'adulting', true);