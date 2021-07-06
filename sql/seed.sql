INSERT INTO users
    (first_name, last_name, email, password)
VALUES
    ('Bob', 'Marley', 'bmarley@email.com', 'password');

INSERT INTO plans
    ('content', user_id)
VALUES
    ('Monday', 1);