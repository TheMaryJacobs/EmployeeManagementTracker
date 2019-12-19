// set variables to both the sequelize module, and the connection file where we connect to server
const Sequelize = require('sequelize');
const sequelize = require ("../config/connection");

const Employees = sequelize.define('employees', {
    // employee information
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    manager_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
   ////////////
});

Employees.sync();

module.exports = Employees;