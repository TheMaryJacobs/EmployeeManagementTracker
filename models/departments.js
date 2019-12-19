const Sequelize = require('sequelize');
const sequelize = require ("../config/connection");

const Departments = sequelize.define('departments', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // options
});

Departments.sync();


module.exports = Departments;