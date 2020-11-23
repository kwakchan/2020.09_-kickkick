create table matching(
     id int(10) AUTO_INCREMENT not null,
     title varchar(30) not null,
     date date not null,
     time time not null,
     contents text(80),
     team varchar(10) not null,
     PRIMARY KEY (id)
     );

create table hero(
     id int(10) AUTO_INCREMENT not null,
     title varchar(30) not null,
     date date not null,
     time time not null,
     contents text(80),
     name varchar(30) not null,
     PRIMARY KEY (id)
     );     

create table user(
     email varchar(30) not null,
     password  varchar(30) not null,
     name varchar(30) not null,
     age varchar(10),
     team varchar(10),
     position varchar(4),
     height int(4),
     weight int(4),     
     PRIMARY KEY (email)
     );