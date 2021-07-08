INSERT INTO users
    (first_name, last_name, email, password)
VALUES
    ('Bob', 'Marley', 'bmarley@email.com', 'password');

INSERT INTO itinerary
    (title, user_id)
VALUES
    ('Summer Vacation', 1);

INSERT INTO date
    (itinerary_id, day, location, event, detail)
VALUES
    (1, '2020-07-06', 'Daytona Beach', 'Swimming', 'Hanging out with my family, enjoying the water');