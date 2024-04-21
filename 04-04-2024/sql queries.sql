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
insert into programmer values('somdutt', '1998-04-09',  '1992-04-21','m','pascal','basic','3000');
insert into programmer values('devdutt', '1967-04-26',  '1993-04-19','m','c sharp','angular','9000');
insert into programmer values('priya', '1969-09-09',  '1992-05-02','f','java','react','7000');
insert into programmer values('roshini', '1970-04-15',  '1992-03-12','f','pascal','js','3000');
insert into programmer values('Revanth', '1966-07-21',  '1992-06-21','m','c','css','5000');
insert into programmer values('Deepan', '1971-08-09',  '1992-04-21','m','python','basic','10000');
insert into programmer values('Deepika', '1962-08-09',  '1990-04-21','f','apple','python','basic','10000');
insert into programmer values('hari', '1963-12-12',  '1991-09-29','m','apple','python','12800');
insert into programmer values('pragthi', '1969-08-09',  '1992-04-21','f','c','basic','1000');
insert into programmer values('thika', '1999-08-09',  '2020-04-21','f','dbase','basic','100000');
insert into programmer values('mitheun', '2001-08-09',  '2024-04-21','m','apple','dbase','100000');
insert into programmer values('riya', '2001-08-09',  '2024-04-21','f','cobol','dbase','100000');
insert into programmer values('Ramesh', '2001-09-09',  '2024-12-21','m','cobol','dbase','100000');
insert into programmer values('athila', '2001-09-09',  '2024-12-21','f','cobol','dbase','100000');
select * from programmer;
create table software(
pname varchar(10) not null,
title varchar(20) not null,
dev_in varchar(20) not null,
scost double(7,2),
dcost double(5,0),
sold double(3,0)
);
insert into software values('somdutt', 'parachutes',  'basic',399.95,6000,43);
insert into software values('athi', 'bmi',  'pascal',3788.95,6900,43);
insert into software values('Deepan', 'cal',  'c',45600.78,9000,63);
insert into software values('Ramesh', 'todo',  'c',399.95,600,49);
insert into software values('riya', 'todo',  'c',399.95,600,49);
insert into software values('athila', 'athji',  'pascal',379.95,8900,43);
insert into software values('mitheun','healthcare', 'apple',300.95,89020,24);
insert into software values('Deepika','ecommerse', 'cobol',190.95,980,31);
insert into software values('thi','ecommerse', 'cobol',379.95,9800,3);
insert into software values('pragathi','ecommerse', 'c',372.95,9600,3);
ALTER TABLE software MODIFY COLUMN pname VARCHAR(20);

insert into software values('vijay kanan M ','ecommerse', 'cobol',379.95,9800,43);
select * from software;
create table studies(
pname varchar(10) not null,
splace varchar(20) not null,
course varchar(20) not null,
ccost int not null
);
insert into studies values('somdutt','sabhari','pgdca',4500);
insert into studies values('devdutt','bdps','dcs',5000);
insert into studies values('mitheun','bgl','apple',10000);
insert into studies values('priya','cbe','embedded',9900);
insert into studies values('riya','cbe','embedded',99900);
insert into studies values('thi','cbe','embedded',99900);
insert into studies values('thira','cbe','embedded',99900);
insert into studies values('thi','s.s.i.l','',99100);
select avg(scost) from software 
where dev_in='pascal';
select name from programmer;
 select YEAR(CURDATE()) - YEAR(dob) from programmer;
 select name, YEAR(CURDATE()) - YEAR(dob) AS age from programmer
 where name=(select pname from studies where course='dcs');
 select max(sold) from software;
 select name, dob from programmer WHERE MONTH(dob) = 1;
select min(ccost) from studies;
 select count(*) from studies where course='pgdca';
 select sum(sold*scost) from software where dev_in='c';
 select * from software where pname='Ramesh';
 select count(*) from studies where splace='sabhari';
 select * from software where scost*sold>=20000;
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
 select name from programmer where (month(dob)=month(now())) and (day(now())-day(dob))<=7;
 Select name from programmer where dayofyear(dob) between dayofyear (curdate()) and dayofyear(date_add(curdate(), interval 7 day));
 SELECT name
FROM programmer
WHERE dob = DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY);

 select * from programmer where datediff(curdate(),doj)<1;
SELECT name, doj FROM programmer
WHERE DATE_ADD(doj, INTERVAL 2 YEAR) BETWEEN CONCAT(YEAR(CURRENT_DATE()), '-01-01') AND CONCAT(YEAR(CURRENT_DATE()), '-12-31');
SELECT pname, title, dcost - (sold * scost) AS amount_to_recover FROM software
WHERE dcost > (sold * scost);
select pname, title from software where sold=0;
select SUM(dcost) from software where pname='Mary';
select distinct(splace) from studies;
select  count(distinct(course)) from studies;
select name from programmer where name LIKE '%A%A%' AND name NOT LIKE '%A%A%A% ';
SELECT name FROM programmer
WHERE LENGTH(name) <= 5;
select  count(name) from programmer where sex='f' and (prof1 ='Cobol' or prof2='Cobol') and datediff(current_date(),doj)/365>=2;
select min(length(name)) from programmer;
select avg(dcost) from software where dev_in='cobol';
SELECT name,sex,
       CONCAT(
           LPAD(DAY(dob), 2, '0'), 
           '/', 
           LPAD(MONTH(dob), 2, '0'), 
           '/', 
           RIGHT(YEAR(dob), 2)
       ) AS dob,
       doj
FROM programmer;
select name from programmer where DAY(dob) = DAY(LAST_DAY(dob));
SELECT SUM(salary) AS total_salary_paid FROM programmer
WHERE sex = 'm' AND name NOT IN (
    SELECT name
    FROM programmer
    WHERE sex = 'm' AND (prof1 = 'COBOL' OR prof2 = 'COBOL')
);
select title, scost, dcost, (dcost-scost) AS diff from software order by diff desc;
select name,dob,doj from programmer where month(dob)=month(doj);
SELECT pname FROM software WHERE pname LIKE '% %';
-- queries 2
select dev_in, count(*) AS num_of_package from software group by dev_in;
select pname, count(*) AS num_of_package from software group by pname;
SELECT sex, COUNT(*) AS num_programmers
FROM programmer
GROUP BY sex;
SELECT 
    dev_in AS language,
    (SELECT title FROM software WHERE dev_in = s.dev_in ORDER BY scost DESC LIMIT 1) AS costliest_package,
    (SELECT title FROM software WHERE dev_in = s.dev_in ORDER BY sold DESC LIMIT 1) AS highest_selling_package
FROM 
    (SELECT DISTINCT dev_in FROM software) AS s;
    select * from software;
select year(dob) ,count(*) as no_of_programmer from programmer group by year(dob) ;
select year(doj) as year_of_joining, count(*) as num_of_programmer_join from programmer group by year(doj);
select month(dob) as month_of_born, count(*) as num_of_programmer from programmer group by month(dob);
select month(doj) as month_of_joining, count(*) as num_of_programmer from programmer group by month(doj);
select prof1 as known_language, count(*) as num_of_programmer from programmer group by(prof1);
select prof2 as known_language, count(*) as num_of_programmer from programmer group by(prof2);
select
    case
        when salary BETWEEN 2000 AND 3000 THEN '2000-3000'
        when salary BETWEEN 3001 AND 4000 THEN '3001-4000'
        when salary BETWEEN 4001 AND 5000 THEN '4001-5000'
        -- Add more salary ranges as needed
        else 'Above 5000'
    END AS salary_group,
    COUNT(*) AS num_people
FROM
    programmer
group by
    CASE
        when salary BETWEEN 2000 AND 3000 THEN '2000-3000'
        when salary BETWEEN 3001 AND 4000 THEN '3001-4000'
        when salary BETWEEN 4001 AND 5000 THEN '4001-5000'
        -- Add more salary ranges as needed
        else 'Above 5000'
    end
order by
    salary_group;
select splace, count(*) as  institute_name from studies group by(splace);
select course, count(*) as  institute_name from studies group by(course);
select dev_in, sum(dcost) as devlopmentcostoflanguage from software group by(dev_in);
select dev_in, sum(scost) as sellingcostoflanguage from software group by(dev_in);
ALTER TABLE programmer
CHANGE COLUMN name pname VARCHAR(10) NOT NULL;
ALTER TABLE programmer
RENAME COLUMN pname TO name;
select * from programmer;
ALTER TABLE programmer
RENAME COLUMN name TO pname;
SELECT pname, SUM(scost) AS total_cost
FROM software
GROUP BY pname;
SELECT pname, SUM(sold) AS sales_value
FROM software
GROUP BY pname;
select pname ,count(sold) as no_of_packages from software group by pname;
select pname ,sum(scost) as no_of_salescost from software group by pname;
select pname, max(dcost) AS costliest_package,min(dcost) AS cheapest_package
FROM software group by pname;
select dev_in,avg(dcost) as development_cost, avg(dcost+scost) as cost, avg(scost) as selling_cost, avg((scost+dcost)/sold) as price_per_copy from software group by dev_in;
select splace as institute_name, count(course) as num_of_course, avg(ccost) as course_cost from studies group by splace;
select splace as institute_name, count(pname) as num_of_student from studies group by splace;
SELECT pname AS programmer_name, 'Male' AS gender
FROM programmer
WHERE sex = 'm'

UNION

SELECT pname AS programmer_name, 'Female' AS gender
FROM programmer
WHERE sex = 'f'

UNION

SELECT pname AS programmer_name, 'Male' AS gender
FROM software
WHERE pname IN (SELECT pname FROM programmer WHERE sex = 'm')

UNION

SELECT pname AS programmer_name, 'Female' AS gender
FROM software
WHERE pname IN (SELECT pname FROM programmer WHERE sex = 'f')

UNION

SELECT pname AS programmer_name, 'Male' AS gender
FROM studies
WHERE pname IN (SELECT pname FROM programmer WHERE sex = 'm')

UNION

SELECT pname AS programmer_name, 'Female' AS gender
FROM studies
WHERE pname IN (SELECT pname FROM programmer WHERE sex = 'f');
SELECT pname, title from software order by pname; 
SELECT dev_in AS language_name, COUNT(*) AS number_of_packages
FROM software
GROUP BY dev_in;
SELECT dev_in AS language_name, COUNT(*) AS number_of_packages
FROM software where dcost<=1000
GROUP BY dev_in;
select dev_in, avg(dcost-scost) from software group by dev_in;
select pname, max(salary), min(salary), avg(salary) from programmer where salary >=2000 group by pname;
select pname, sum(dcost), sum(scost), sum(dcost-scost ) as amt_recovered from software  where dcost>scost group by pname;
-- query 3
SELECT pname AS programmer_name, salary FROM programmer
WHERE prof1 = 'c' OR prof2 = 'c'
ORDER BY salary DESC
LIMIT 1;
SELECT pname AS programmer_name, salary FROM programmer
WHERE (prof1 = 'cobol' OR prof2 = 'cobol') and sex='f'
ORDER BY salary DESC
LIMIT 1;
SELECT prof1 AS language, max(pname) AS programmer_name, MAX(salary) AS highest_salary
FROM programmer
GROUP BY prof1;
select pname ,ceil(datediff(curdate(),doj)/365) as year_of_experience from programmer 
order by year_of_experience asc 
limit 1;
select pname ,ceil(datediff(curdate(),doj)/365) as year_of_experience from programmer 
order by year_of_experience desc 
limit 1;
SELECT prof1 AS language1, prof2 as language2
FROM programmer
GROUP BY prof1, prof2
HAVING COUNT(*) = 1;
SELECT pname AS programmer_name, datediff(curdate(),dob)/365 AS age_in_years
FROM programmer
WHERE prof1 = 'DBASE' OR prof2 = 'DBASE'
ORDER BY age_in_years ASC
LIMIT 1;
select splace  as institute_name , count(pname) as no_of_student from studies 
group by splace order by  no_of_student desc limit 1;
SELECT p.pname AS programmer_name, s.splace AS institute, COUNT(*) AS num_students
FROM studies s
JOIN programmer p ON s.pname = p.pname
GROUP BY s.splace
ORDER BY num_students DESC
LIMIT 1;
SELECT p.pname AS programmer_name, s.splace AS institute, COUNT(*) AS num_students
FROM studies s
JOIN programmer p ON s.pname = p.pname
GROUP BY s.splace, p.pname
ORDER BY num_students DESC
LIMIT 1;
SELECT pname AS programmer_name, salary
FROM programmer
WHERE sex = 'f' 
AND salary > 3000 
AND prof1 NOT IN ('C', 'C++', 'Oracle', 'Dbase')
AND prof2 NOT IN ('C', 'C++', 'Oracle', 'Dbase');
select  course, ccost from studies order by ccost desc limit 1 ;
select course, count(pname) as num_of_student from studies group by course order by num_of_student desc limit 1;
select course, max(ccost) as cosliest_course from studies group by course order by cosliest_course desc limit 1;
SELECT  course, COUNT(*) AS num_students FROM studies GROUP BY  course
HAVING COUNT(*) < (SELECT AVG(num_students) FROM (SELECT COUNT(*) AS num_students FROM studies GROUP BY course) AS avg_students);
SELECT splace, course, COUNT(*) AS num_students FROM studies GROUP BY splace, course
HAVING COUNT(*) < (SELECT AVG(num_students) FROM (SELECT COUNT(*) AS num_students FROM studies GROUP BY course) AS avg_students);
select course from studies  where abs(ccost-(select avg(ccost) from studies))<=1000 group by course ;
select title as package, dcost as high_cost from software group by package, high_cost order by high_cost desc limit 1;
select title as package, dcost as low_cost from software group by package, low_cost order by low_cost asc limit 1;
select pname, min(sold) as least_copy from software group by pname order by least_copy asc limit 1;
select dev_in , (scost*sold) as sales_amt from software group by dev_in, sales_amt order by sales_amt desc limit 1;
select sold from software where abs(dcost-scost)=(select min(abs(dcost-scost)) from software);
select max(dcost) as costliest_package from software where dev_in='pascal' ;
select dev_in ,count(*) num_of_package from software group by dev_in order by num_of_package desc limit 1;
select pname ,count(*) highnum_of_package from software group by pname order by highnum_of_package desc limit 1;
select pname as author ,max(scost*sold) as costliest_package from software group by author order by  costliest_package desc limit 1;
select title from software where sold< (select avg(sold) from software);
select pname from programmer where sex='f' and salary > (select max(salary) as hihgsalary from programmer where sex='m' );
select prof1 as languages, count(pname) as most_programmer from programmer group by languages order by  most_programmer desc limit 1;
select pname from software where (scost*sold)> (2*dcost);
select pname , dev_in , min(dcost) as cheapcost from software group by pname, dev_in ;
SELECT pname, dob FROM programmer
WHERE sex = 'm' AND dob = (
    SELECT MIN(dob) FROM programmer
    WHERE sex = 'm' AND dob LIKE '1965%');
select dev_in ,pname , max(scost*sold) as high_cost, min(scost*sold) as low_cost  from software group by dev_in, pname;
select * from software;
select pname, max(doj) as oldest_programmer from programmer where sex='f' and doj like '1992%' group by pname  limit 1;
select year(dob) as birth_year, count(pname) as num_of_programmer from programmer group by birth_year order by num_of_programmer desc limit 1;
select month(doj) as join_month ,count(pname) as num_of_programmer from programmer group by join_month order by num_of_programmer desc limit 1;
select * from programmer;
select prof1 as lan1, prof2 as lan2, count(pname) as most from programmer group by lan1, lan2 order by most desc limit 1;
select pname from programmer where sex='m' and salary< (select avg(salary) from programmer where sex='f');
-- queries 4
select p1.pname, p1.dob, p1.doj, p1.sex, p1.prof1, p1.prof2, p1.salary from programmer p1
join programmer p2 ON p1.salary = p2.salary AND p1.pname <> p2.pname order by p1.salary;
select s.* from software s join programmer p on s.pname=p.pname where p.sex='m' and p.salary>3000;
select s.* from software s join programmer p on s.pname=p.pname  where s.dev_in='pascal' and p.sex='f';
select * from programmer where dob< '1990-01-01';
select s.* from software s join programmer p on s.pname=s.pname where p.sex='f' and s.dev_in='c' and p.pname='pragathi';
select * from programmer;
select * from software;
select s.splace as institute_name, count(so.title) as num_packages, sum(so.sold) as num_copies_sold,sum(so.sold * so.scost) as sales_value from software so
join studies s on so.pname = s.pname group by s.splace;
SELECT so.* FROM software so
JOIN programmer p ON so.pname = p.pname
JOIN studies s ON p.pname = so.pname
WHERE p.sex = 'm'
AND s.splace = (
    SELECT splace
    FROM studies
    GROUP BY splace
    ORDER BY COUNT(*) DESC
    LIMIT 1
) and so.dev_in = 'dbase';
SELECT * FROM software WHERE pname IN (SELECT pname FROM programmer WHERE (sex = 'm' AND dob < '1965-01-01') OR (sex = 'f' AND dob > '1975-12-31'));
select * from software where dev_in not in( select prof1 from programmer);
select * from software where dev_in not in( select prof1 from programmer union select prof1 from programmer);
select s.* from software s join programmer p on p.pname=s.pname join studies st ON p.pname = st.pname where p.sex='m' and st.splace='sabhari';
select p.pname from programmer p left join software s on s.pname=p.pname where s.pname is null;
SELECT SUM(scost) AS total_cost FROM software where dev_in='apple'; -- without using join
SELECT SUM(s.scost) AS total_cost FROM software s JOIN programmer p ON s.pname = p.pname WHERE p.prof1 = 'APPLE' OR p.prof2 = 'APPLE';
select p1.pname, p2.pname from programmer p1 join programmer p2 on p1.doj=p2.doj and p1.pname<>p2.pname ;-- this <> for control the duplicate
select p1.pname , p2.pname from programmer p1 join programmer p2 on p1.prof2=p2.prof2 and p1.pname<>p2.pname;
select sum(s.sold*s.scost) as sales_value ,st.splace as institute from software s join studies st on s.pname=st.pname group by st.splace;
SELECT st.splace AS institute FROM studies st JOIN (SELECT s.pname FROM software s ORDER BY s.scost DESc LIMIT 1) AS costliest_package 
ON st.pname = costliest_package.pname; -- using join
SELECT splace AS institute FROM studies WHERE pname = (select pname from software ORDER BY scost DESC limit 1); -- without using join
select p.prof1 as listlan1, p.prof2 as listlan2 from programmer p join  software s on p.panme=s.pname where s.dev_in !=listlan1 or listlan2;
SELECT  language FROM (SELECT prof1 AS language FROM programmer UNION SELECT prof2 AS language FROM programmer) AS languages
LEFT JOIN software ON languages.language = software.dev_in WHERE software.dev_in IS NULL;
-- union  - remove the duplicate
-- union  - doesn't remove duplicate
SELECT p.pname AS programmer_name, p.salary AS programmer_salary, s.title AS package_title, st.course AS course_undertook FROM programmer p
JOIN (SELECT pname, MAX(sold) AS max_sold FROM software GROUP BY pname) AS max_sold_package ON p.pname = max_sold_package.pname
JOIN software s ON p.pname = s.pname AND s.sold = max_sold_package.max_sold
JOIN studies st ON p.pname = st.pname;
select p.pname as programer_name, round(st.ccost/p.salary,2) as recover_month from programmer p
join studies st on p.pname=st.pname;
select s.title as package_name, s.dcost as costliest_package from software s join programmer p on p.pname= s.pname where (datediff(current_date,p. doj)/365)>3 order by costliest_package desc limit 1;
select avg(p.salary) from programmer p join software s on p.pname=s.pname where (scost*sold)>50000 group by p.salary;
select count(s.title) from software s join studies st on s.pname=st.pname join ( select splace from studies group by splace order by min(ccost) asc limit 1 )
min_fee_inst on st.splace = min_fee_inst.splace;
SELECT COUNT(*) AS num_packages_developed FROM software s JOIN studies st ON s.pname = st.pname
WHERE st.splace = (SELECT splace FROM studies GROUP BY splace ORDER BY MIN(ccost) LIMIT 1);
SELECT COUNT(*) AS num_packages FROM software s JOIN programmer p ON s.pname = p.pname WHERE p.sex = 'f'
AND p.salary > ( SELECT MAX(salary) FROM programmer WHERE sex = 'm' );
SELECT COUNT(*) AS num_packages FROM software
WHERE pname = ( SELECT p.pname FROM programmer p JOIN studies s ON p.pname = s.pname
WHERE s.splace = 'bdps' ORDER BY DATEDIFF(CURRENT_DATE, p.doj) DESC LIMIT 1);
SELECT p.pname AS programmer_name, COALESCE(s.splace, 'No Institute') AS institute_studied FROM programmer p
LEFT JOIN studies s ON p.pname = s.pname ORDER BY p.pname; -- coalesce return null value
select p.pname, count(s.title) as num_of_package from programmer p left join software s on p.pname=s.pname group by p.pname;
select p.* from programmer p join studies st on p.pname=st.pname where st.splace='s.s.i.l';













    

 
 
 




 
 
 
