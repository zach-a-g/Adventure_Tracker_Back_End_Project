INSERT INTO users
    (first_name, last_name, email, password)
VALUES
    ('Bob', 'Marley', 'bmarley@email.com', 'password');

INSERT INTO location
    (location_name, location_img, location_description)
VALUES
    ('Yosemite National Park', 'https://blog.campnative.com/wp-content/uploads/2016/08/yosemite-national-park-3.jpg', 'Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.');

INSERT INTO activity
    (activity_name, activity_img)
VALUES
    ('Hiking', 'https://clipartmag.com/images/free-hiking-clipart-15.jpg');

INSERT INTO plans
    (day, user_id, location_id, activity_id)
VALUES
    ('Monday', 1, 1, 1);