create table matching(
     id int(10) AUTO_INCREMENT not null,
     title varchar(30) not null,
     date date,
     time time,
     content text(80),
    PRIMARY KEY (id)
     );

create table hero(
     id int(10) AUTO_INCREMENT not null,
     name varchar(30) not null,
     date date,
     time time,
     content text(80),
    PRIMARY KEY (id)
     );     

create table user(
     email varchar(30) not null,
     password  varchar(30) not null,
     nickname varchar(30) not null,
     age int(3),
     team varchar(10),
     position varchar(4),
     height int(4),
     weight int(4),     
     PRIMARY KEY (email)
     );          