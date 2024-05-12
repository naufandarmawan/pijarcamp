-- CREATE TABLE products(
--   id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
--   name VARCHAR(64),
--   description TEXT,
--   stock INT DEFAULT 0,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP,
--   PRIMARY KEY(id)
-- );

CREATE TYPE user_role AS ENUM ('Worker', 'Recruiter');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(128),
    password VARCHAR(64),
    role user_role,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE workers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    photo VARCHAR(255),
    name VARCHAR(128),
    position VARCHAR(128),
    location VARCHAR(128),
    workplace VARCHAR(128),
    description TEXT,
    email VARCHAR(128),
    phone VARCHAR(20),
    instagram VARCHAR(255),
    github VARCHAR(255),
    gitlab VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recruiters (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    photo VARCHAR(255),
    name VARCHAR(128),
    company VARCHAR(128),
    email VARCHAR(128),
    industry VARCHAR(128),
    location VARCHAR(128),
    description TEXT,
    instagram VARCHAR(255),
    phone VARCHAR(20),
    linkedin VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    worker_id INT REFERENCES workers(id),
    skills_name VARCHAR(128),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE portfolio_type AS ENUM ('Aplikasi Web', 'Aplikasi Mobile');

CREATE TABLE portfolio (
    id SERIAL PRIMARY KEY,
    worker_id INT REFERENCES workers(id),
    image VARCHAR(255),
    name VARCHAR(128),
    type portfolio_type,
    link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    worker_id INT REFERENCES workers(id),
    position VARCHAR(128),
    company VARCHAR(128),
    start_date DATE,
    end_date DATE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE hire_purpose AS ENUM ('Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship', 'Apprenticeship', 'Seasonal');

CREATE TABLE hire (
    id SERIAL PRIMARY KEY,
    purpose hire_purpose,
    description TEXT,
    recruiter_id INT REFERENCES recruiters(id),
    recruiter_photo VARCHAR(255),
    recruiter_company VARCHAR(128),
    recruiter_location VARCHAR(128),
    recruiter_industry VARCHAR(128),
    recruiter_email VARCHAR(128),
    worker_id INT REFERENCES workers(id),
    worker_photo VARCHAR(255),
    worker_name VARCHAR(128),
    worker_position VARCHAR(128),
    worker_location VARCHAR(128),
    worker_workplace VARCHAR(128),
    worker_email VARCHAR(128),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


    -- recruiter_photo VARCHAR(255),
    -- recruiter_company VARCHAR(128),
    -- recruiter_location VARCHAR(128),
    -- recruiter_industry VARCHAR(128),
    -- recruiter_email VARCHAR(128),

    -- worker_photo VARCHAR(255),
    -- worker_name VARCHAR(128),
    -- worker_position VARCHAR(128),
    -- worker_location VARCHAR(128),
    -- worker_workplace VARCHAR(128),
    -- worker_email VARCHAR(128),

ALTER TABLE hire  
DROP COLUMN recruiter_photo,
DROP COLUMN recruiter_company,
DROP COLUMN recruiter_location,
DROP COLUMN recruiter_industry,
DROP COLUMN recruiter_email,
DROP COLUMN worker_photo,
DROP COLUMN worker_name,
DROP COLUMN worker_position,
DROP COLUMN worker_location,
DROP COLUMN worker_workplace,
DROP COLUMN worker_email;


CREATE TABLE hire (
    id SERIAL PRIMARY KEY,
    purpose hire_purpose,
    description TEXT,
    recruiter_id INT REFERENCES recruiters(id),
    worker_id INT REFERENCES workers(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Materi: node.js, express.js, postgresql, API
-- Modularisasi: routes, controller, model.
-- CRUD
-- fitur search and sort (Query Parameter)
-- URL Parameter
-- SQL : QUERY LIKE (SEARCH), ORDER (SORTING), JOIN (RELASI ANTAR TABEL), LIMIT (PAGINATION)
-- ENV
-- Linter: ESLinter
-- Response Standar
-- Error Handling
-- Flowchart
-- Postman Collection

-- 1. auth
-- 2. workers
-- 3. recruiters
-- 4. skill
-- 5. experience
-- 6. portfolio
-- 7. hire
-- 8. assets

-- ALTER TABLE workers
-- ADD COLUMN password VARCHAR(64);

-- ALTER TABLE recruiters
-- ADD COLUMN password VARCHAR(64);

ALTER TABLE skill 
RENAME COLUMN skills_name TO skill_name;

ALTER TABLE experience
ADD duration_in_months VARCHAR(128);

ALTER TABLE hire
ADD company VARCHAR(128),
ADD email VARCHAR(128),
ADD phone VARCHAR(20);

ALTER TABLE recruiters
ADD position VARCHAR(128);

ALTER TABLE hire
ADD name VARCHAR(128);

ALTER TABLE users
ADD verified BOOLEAN,
ADD verification_token VARCHAR(255);

ALTER TABLE users ALTER COLUMN verification_token TYPE varchar(800)

ALTER TYPE user_role RENAME VALUE 'worker' TO 'Worker';
ALTER TYPE user_role RENAME VALUE 'recruiter' TO 'Recruiter';

-- -- -- -- --


CREATE TYPE user_role AS ENUM ('Worker', 'Recruiter');
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(128),
    password VARCHAR(64),
    role user_role,
    verified BOOLEAN,
    verification_token VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE workers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name VARCHAR(128),
    position VARCHAR(128),
    location VARCHAR(128),
    workplace VARCHAR(128),
    description TEXT,
    email VARCHAR(128),
    phone VARCHAR(20),
    instagram VARCHAR(255),
    github VARCHAR(255),
    gitlab VARCHAR(255),
    photo VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recruiters (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name VARCHAR(128),
    position VARCHAR(128),
    company VARCHAR(128),
    industry VARCHAR(128),
    email VARCHAR(128),
    location VARCHAR(128),
    description TEXT,
    instagram VARCHAR(255),
    phone VARCHAR(20),
    linkedin VARCHAR(255),
    photo VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    worker_id INT REFERENCES workers(id),
    skill_name VARCHAR(128),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE portfolio_type AS ENUM ('Aplikasi Web', 'Aplikasi Mobile');
CREATE TABLE portfolio (
    id SERIAL PRIMARY KEY,
    worker_id INT REFERENCES workers(id),
    image VARCHAR(255),
    name VARCHAR(128),
    type portfolio_type,
    link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    worker_id INT REFERENCES workers(id),
    position VARCHAR(128),
    company VARCHAR(128),
    start_date DATE,
    end_date DATE,
    duration_in_months VARCHAR(128),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE hire_purpose AS ENUM ('Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship', 'Apprenticeship', 'Seasonal');
CREATE TABLE hire (
    id SERIAL PRIMARY KEY,
    purpose hire_purpose,
    description TEXT,
    recruiter_id INT REFERENCES recruiters(id),
    worker_id INT REFERENCES workers(id),
    name VARCHAR(128),
    company VARCHAR(128),
    email VARCHAR(128),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ALTER TABLE hire  
-- DROP COLUMN recruiter_photo,
-- DROP COLUMN recruiter_company,
-- DROP COLUMN recruiter_location,
-- DROP COLUMN recruiter_industry,
-- DROP COLUMN recruiter_email,
-- DROP COLUMN worker_photo,
-- DROP COLUMN worker_name,
-- DROP COLUMN worker_position,
-- DROP COLUMN worker_location,
-- DROP COLUMN worker_workplace,
-- DROP COLUMN worker_email;

-- ALTER TABLE skill 
-- RENAME COLUMN skills_name TO skill_name;

-- ALTER TABLE experience
-- ADD duration_in_months VARCHAR(128);

-- ALTER TABLE hire
-- ADD company VARCHAR(128),
-- ADD email VARCHAR(128),
-- ADD phone VARCHAR(20);

-- ALTER TABLE recruiters
-- ADD position VARCHAR(128);

-- ALTER TABLE hire
-- ADD name VARCHAR(128);

-- ALTER TABLE users
-- ADD verified BOOLEAN,
-- ADD verification_token VARCHAR(255);

-- ALTER TABLE users ALTER COLUMN verification_token TYPE varchar(800)