create table matching(
     id int(10) AUTO_INCREMENT not null,
     title varchar(30) not null,
     date date,
     time time,
     content text(80),
    PRIMARY KEY (id)
     );