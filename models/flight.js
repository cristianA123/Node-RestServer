const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Flight = db.define('flight', {
    flight_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    takeoff_date_time: {
        type: DataTypes.INTEGER
    },
    takeoff_airport: {
        type: DataTypes.STRING
    },
    landing_date_time: {
        type: DataTypes.INTEGER
    },
    landing_airport: {
        type: DataTypes.STRING
    },
    airplane_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'airplane',
          key: 'airplane_id',
        },
    },
}, {
    freezeTableName: true,
    timestamps: false
  })

module.exports = Flight