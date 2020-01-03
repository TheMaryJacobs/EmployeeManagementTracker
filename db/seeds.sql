
--add department
INSERT INTO department (name)
VALUES ("Human Resources"), ("Marketing"), ("Engineering"), ("Accounting"), ("Sales");

-- add role
INSERT INTO role (title, salary, department_id)
VALUE ("manager", 90000.00, 2), ("engineer", 75000, 3), ("accountant", 63500, 4), ("recruiter", 55000, 1), ("sales person", 55000, 5);

--add employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Mary", "Jacobs", 1, null), ("Zach", "Duff", 1, 1), ("Courtney", "Scott", 3, 2), ("Aniken", "Skywalker", 5, 2);

