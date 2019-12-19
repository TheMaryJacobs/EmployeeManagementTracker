
USE cms_DB;
INSERT INTO departments (name)
VALUES ('Marketing');
INSERT INTO departments (name)
VALUES ('Sales');
INSERT INTO departments (name)
VALUES ('Operations');
INSERT INTO departments (name)
VALUES ('R&D');
INSERT INTO roles (title, salary, department_id)
VALUES ("Employee",95000, 5);
INSERT INTO roles (title, salary, department_id)
VALUES ("Liason",90000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Manager",100000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Vice President",150000, 5);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Britney", "Spears", 3, NULL);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Mary", "Jacobs", 4, 1);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Elon", "Musk", 2, 1);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Dwayne The", "Rock Johnson", 1, 1);
INSERT INTO employees (first_name , last_name , role_id, manager_id)
VALUES ("Aniken", "Skywalker", 5, 1);