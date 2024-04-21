use aspire;
create table programmer(
pname varchar(10) not null,
dob date not null,
doj date not null,
sex varchar(10),
prof1 varchar(10),
prof2 varchar(10),
salary int not null
);
insert into programmer values('somdutt', '1966-01-21',  '1992-04-21','m','pascal','basic','3000');
insert into programmer values('devdutt', '1967-04-26',  '1993-04-19','m','c sharp','angular','9000');
insert into programmer values('priya', '1969-09-09',  '1992-05-02','f','java','react','7000');
insert into programmer values('roshini', '1970-04-15',  '1992-03-12','f','pascal','js','3000');
insert into programmer values('Revanth', '1966-07-21',  '1992-06-21','m','c','css','5000');
insert into programmer values('Deepan', '1971-08-09',  '1992-04-21','m','python','basic','10000');
insert into programmer values('Deepan', '1969-08-09',  '1992-04-21','m','python','basic','10000');
create table software(
pname varchar(10) not null,
title varchar(20) not null,
dev_in varchar(20) not null,
scost double(7,2),
dcost double(5,0),
sold double(3,0)
);
insert into software values('somdutt', 'parachutes',  'basic',399.95,6000,43);
insert into software values('athi', 'bmi',  'pascal',378.95,6900,43);
insert into software values('Deepan', 'cal',  'c',45600.78,9000,63);
insert into software values('Ramesh', 'todo',  'c',399.95,6000,49);
insert into software values('athila', 'athji',  'pascal',379.95,8900,43);
select * from software;
create table studies(
pname varchar(10) not null,
splace varchar(20) not null,
course varchar(20) not null,
ccost int not null
);
insert into studies values('somdutt','sabhari','pgdca',4500);
insert into studies values('devdutt','bdps','dcs',5000);
insert into studies values('Deepan','bgl','cse',9000);
insert into studies values('priya','cbe','embedded',9900);
select avg(dcost+scost) from software 
where dev_in='pascal';
select name from programmer;
 select YEAR(CURDATE()) - YEAR(dob) from programmer;
 select name, YEAR(CURDATE()) - YEAR(dob) AS age from programmer
 where name=(select pname from studies where course='dcs');
 select max(sold) from software;
 select name, dob from programmer 
WHERE MONTH(dob) = 1;
select min(ccost) from studies;
 select count(*) from studies where course='pgdca';
 select sum(scost) from software where dev_in='c';
 select * from software where pname='Ramesh';
 select count(*) from studies where splace='sabhari';
 select * from software where scost>=20000;
 select max(scost) from software where dev_in='basic';
 select count(*) from software where dev_in='dbase';
 SELECT COUNT(*) AS num_programmers
FROM studies
WHERE splace = 'paragathi';
SELECT title, CEIL(dcost / scost) AS copies_to_sell_per_package FROM software
GROUP BY title;
select count(*) from studies where ccost between 5000 and 10000;
select avg(ccost) from studies;
select * from programmer where prof1='c' or prof2='c';
select count(*) from programmer where prof1 NOT IN ('pascal', 'c') AND prof2 NOT IN ('pascal', 'c');
select count(*) from programmer where prof1 IN ('cobol', 'pascal') OR prof2 IN ('cobol', 'pascal');
select  datediff(CURRENT_DATE,dob)/365 AS oldestage, name
 from programmer where sex='m' order by oldestage desc limit  1;
 select avg(datediff(CURRENT_DATE,dob)/365) AS femaleprogrammer from programmer where sex='f';
 select  ceil(datediff(CURRENT_DATE,doj)/365) AS experience, name
 from programmer  order by experience desc ;
 select name from programmer where month(dob)=month(current_date());
 select count(*) from programmer where sex='f';
 select name, prof1,prof2 from programmer where sex='m';
 select avg(salary) AS salary from programmer;
 select count(*) from programmer where salary between 2000 and 4000;
 select * from programmer where prof1 not in ('pascal', 'Clipper', 'Cobol') and prof2 not in ('pascal', 'Clipper', 'Cobol') ;
 select count(*) from programmer where sex='f' and prof1 in ('c') and prof2 in ('c') and datediff(curdate(),dob)>=24;
 select name from programmer where dob BETWEEN CURRENT_DATE AND DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY) ;
 select * from programmer where datediff(curdate(),doj)<1;
SELECT name, doj FROM programmer
WHERE DATE_ADD(doj, INTERVAL 2 YEAR) BETWEEN CONCAT(YEAR(CURRENT_DATE()), '-01-01') AND CONCAT(YEAR(CURRENT_DATE()), '-12-31');

 
 
 




 
 
 
