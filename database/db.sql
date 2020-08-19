CREATE DATABASE database_ae;

USE database_ae;

---TABLE USERS

CREATE SCHEMA app;

CREATE TABLE app.users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(250) NOT NULL,
    created_at DATETIME NOT NULL
);

ALTER TABLE app.users
    ADD PRIMARY KEY (id);

ALTER TABLE app.users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

ALTER TABLE app.users
    DROP COLUMN created_at;


DESCRIBE app.users;


--- TABLE ALUNOS

CREATE SCHEMA aln;

CREATE TABLE aln.Alunos(
    IdAluno INT(11) NOT NULL,
    Name NVARCHAR(30) NOT NULL,
    DocumentCpf NVARCHAR(11) NOT NULL,
    DocumentRg NVARCHAR(11) NOT NULL,
    Birthday DATE NOT NULL DEFAULT '00-00-0000',
    Phone NVARCHAR(11) NOT NULL,
    AddressCode NVARCHAR(10) NOT NULL,
    AddressStreet NVARCHAR(50) NOT NULL,
    AddressDistrict NVARCHAR(50) NOT NULL,
    AddressCity NVARCHAR(50) NOT NULL,
    AddressState NVARCHAR(2) NOT NULL,
    CreatedDate timestamp NOT NULL DEFAULT current_timestamp,
    user_id INT(11) NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES app.users(id)
);

ALTER TABLE aln.Alunos
    ADD PRIMARY KEY (IdAluno);

ALTER TABLE aln.Alunos
    MODIFY IdAluno INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE aln.Alunos;