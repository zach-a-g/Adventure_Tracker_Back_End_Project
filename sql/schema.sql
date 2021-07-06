CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    email varchar(2000),
    password varchar(2000)
);

CREATE TABLE plans (
    id serial PRIMARY KEY,
    content text NOT NULL,
    user_id integer REFERENCES users(id),
     varchar(2000),
     varchar(2000)
);