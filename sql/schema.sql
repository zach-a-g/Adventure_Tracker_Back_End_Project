CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    email varchar(2000),
    password varchar(2000)
);

CREATE TABLE location (
    id serial PRIMARY KEY,
    location_name text NOT NULL,
    location_img text,
    location_description varchar(250)
);

CREATE TABLE activity (
    id serial PRIMARY KEY,
    activity_name text NOT NULL,
    activity_img text
);

CREATE TABLE plans (
    id serial PRIMARY KEY,
    day date NOT NULL,
    user_id integer REFERENCES users(id),
    location_id integer REFERENCES users(id),
    activity_id integer REFERENCES users(id)
);