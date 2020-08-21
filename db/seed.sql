INSERT INTO users ( user_name, photo, lists) VALUES 
    (
        'Arianna',
        'https://res.cloudinary.com/dh41vh9dx/image/upload/v1537956763/40126138_10216010805956818_1131332306032656384_o.jpg',
        1
    ),

    (
        'Frida',
        'https://res.cloudinary.com/dh41vh9dx/image/upload/v1538344728/frida_K.jpg',
        2
    ),
    (
        'Julie',
        'https://res.cloudinary.com/dh41vh9dx/image/upload/v1546220901/JuleyD.png',
        3
    ),
    (
        'Lisa',
        "https://res.cloudinary.com/dh41vh9dx/image/upload/v1569855135/26801590.jpg",
        4
    );

INSERT INTO lists (name, type, lists) VALUES
(
    'Arianna''s Favorite Restaurants',
    'restaurants',
    1
),
(
    'Frida''s Hotels',
  'hotels',
  2
),
(
    'Julie''s Favorite Restaurants',
    'restaurants',
    1
),
(
    'Lisa''s list',
    'custom',
    3
);

INSERT INTO list_entries (name, description, img, city, address, rating, link) VALUES
(
    'The Grill',
    'Steakhouse in an iconic Seagram Building setting with midcentury style, classic dishes & cocktails.',
    'https://res.cloudinary.com/dh41vh9dx/image/upload/v1569856958/AF1QipNGnlu1u_-DJY2JIhZMeWxEkkXO08Pull4-BMx3_w240-h160-k-no.jpg',
    'New York',
    '99 E 52nd St',
    4.7
),
(
    'Kimpton Hotel Eventi',
    'In storied Chelsea, this upscale high-rise hotel filled with local art',
    'https://res.cloudinary.com/dh41vh9dx/image/upload/v1569857216/civkxguh0bd83jvmx0j9.jpg',
    'New York',
    '851 6th Ave',
    4.4
),
(
    'Rome',
    'Reasons for Rome: pasta is calling my name. Also History and Art',
    'https://en.wikipedia.org/wiki/Rome'
),
(
    'Paris',
    'Reasons for Paris: wine',
    'https://en.wikipedia.org/wiki/Paris'
);
