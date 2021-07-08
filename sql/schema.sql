--Create 3 tables: User, Itinerary, and Date
--
CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    email varchar(2000),
    password varchar(2000)
);

CREATE TABLE itinerary (
    id serial PRIMARY KEY,
    title text NOT NULL,
    user_id int REFERENCES users(id)
);

CREATE TABLE date (
    id serial PRIMARY KEY,
    itinerary_id int REFERENCES itinerary(id),
    day date NOT NULL,
    location text NOT NULL,
    event text NOT NULL,
    detail text
);