const { DataTypes } = require('sequelize');
const db = require('../database/connection');
const Seat = require("./seat");

const BoardingPass = db.define('boarding_pass', {
    boarding_pass_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'purchase',
          key: 'purchase_id',
        },
    },
    passenger_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'passenger',
          key: 'passenger_id',
        },
    },
    seat_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'seat',
          key: 'seat_id',
        },
    },
    seat_type_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'seat_type',
          key: 'seat_type_id',
        },
    },
    flight_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'flight',
          key: 'flight_id',
        },
    },
   
}, {
    freezeTableName: true,
    timestamps: false
  })

  BoardingPass.belongsTo(Seat, { foreignKey: 'seat_type_id' });

module.exports = BoardingPass