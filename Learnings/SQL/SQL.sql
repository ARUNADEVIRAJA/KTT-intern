use demo;
create table employees(id int primary key,job varchar(20),name varchar(30),salary int);

insert into employees values(11,"analyst","aruna",20000);
insert into employees values(12,"engineer","saru",35000);
insert into employees values(13,"sales","pavi",10000);
insert into employees values(14,"analyst","rani",15000);
insert into employees values(15,"manager","raja",21000);
insert into employees values(16,"sales","thilaga",9000);
insert into employees values(17,"engineer","devi",34000);
insert into employees values(18,"analyst","bharathi",29000);
insert into employees values(19,"analyst","vicky",35000);
insert into employees values(20,"sales","siva",17000);
insert into employees values(21,"manager","prithiga",120000);

show tables;

select * from employees;

select * from employees where salary>20000 and salary<=35000;

select name from employees where job in("analyst","sales");

drop table employee;

select * from employees where name like '%ru%';
select * from employees where name like '__i%';
select * from employees where name like '_r%';
update employees set salary=36000 where name='saru';
update employees set salary=32000 where name='thilaga';
update employees set salary=25000 where name='rani';
update employees set salary=28000 where name="pavi";

select * from employees;

select NOW();
select CURDATE();
SELECT year(Now());

show tables;
select * from employees where job="analyst" order by salary;
select * from employees order by(case job
when 'manager' then 1
when 'engineer' then 2
when 'analyst' then 3
else 100 end),name;
select distinct job from employees;
select replace('techonthenet','c','zab');
select date_format(curdate(),"%Y/%m/%d");
select datediff(curdate(),"2024/08/02");
select date_add(curdate(),interval 3 day) as "after some days";
select date(now());
select avg(salary) from employees;
select max(salary) from employees;
select sum(salary) from employees;
select count(*) from employees;
select count(salary) from employees;
select name  from employees order by salary;
select *  from employees where job='analyst' order by salary,name;
select name as ename from employees where job='engineer' order by name;
select name as ename from employees ;
select * from employees order by(case job when 'manager' then 1 when 'analyst' then 3 when 'engineer' then 2 else 100 end),name;
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    class VARCHAR(10)
);
INSERT INTO students (id, name, class) VALUES
(1, 'Anu', '10A'),
(2, 'Ravi', '10B'),
(3, 'Kavi', '10A'),
(4, 'Sita', '10B');
CREATE TABLE marks (
    student_id INT,
    subject VARCHAR(20),
    mark INT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);
INSERT INTO marks (student_id, subject, mark) VALUES
(1, 'Maths', 95),
(2, 'Maths', 85),
(3, 'Maths', 78),
(4, 'Maths', 88),
(1, 'Science', 89),
(2, 'Science', 92),
(3, 'Science', 70),
(4, 'Science', 80);
alter table students add email varchar(100);
describe students;
ALTER TABLE marks
MODIFY mark FLOAT;
alter table marks rename column mark to total_marks;
alter table students drop column email;
alter table students rename to school_students;
delete from students where name="ravi";

select count(*) from school_students;
select sum(total_marks) from marks;
select max(total_marks) from marks;
select min(total_marks) from marks;
select avg(total_marks) from marks;

CREATE TABLE students (
    id INT PRIMARY KEY,               
    name VARCHAR(50) NOT NULL,      
    class VARCHAR(10) DEFAULT '10A', 
    marks INT CHECK (marks >= 0),     
    email VARCHAR(100) UNIQUE         
);

select s.name, s.class ,m.total_marks from school_students as s inner join marks as m
on s.id=m.student_id; 

delete from marks where student_id=4;

select s.name, s.class ,m.total_marks from 
school_students as s left join marks as m
on s.id=m.student_id; 

set sql_safe_updates=0;

insert into marks values(5,'social',98);

select s.name, s.class ,m.total_marks from 
school_students as s right join marks as m
on s.id=m.student_id;

select s.name, s.class ,m.total_marks from school_students as s cross join marks as m;

select s.name, s.class ,m.total_marks from school_students as s join marks as m;
