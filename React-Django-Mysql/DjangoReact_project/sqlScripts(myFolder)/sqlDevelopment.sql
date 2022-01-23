-- Create a database
create database mytestdb

-- Departments
select * from mytestdb.workers_departments;
insert into mytestdb.workers_departments values(1, 'Digital');
insert into mytestdb.workers_departments values(2, 'GSC');
insert into mytestdb.workers_departments values(3, 'Finance');
insert into mytestdb.workers_departments values(4, 'Engineering');


-- Employees
select * from mytestdb.workers_employees;
insert into mytestdb.workers_employees values(1, 'Armando', 'GSC', '2021-12-12', 'file.png')