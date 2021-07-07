BEGIN;

  drop table if exists users 
  CASCADE;

create table users
(
  user_id serial primary key,
  name varchar(100) not null ,
  email text UNIQUE not null ,
  password text not null,
  img text,
  address text,
  age text,
  phone text


);





COMMIT;