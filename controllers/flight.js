const { response, request } = require( 'express' );
const { Sequelize, Op, QueryTypes } = require('sequelize');

const Passenger = require('../models/passenger');
const Airplane = require('../models/airplane');
const BoardingPass = require('../models/boardingPass');
const Flight = require('../models/flight');
const Purchase = require('../models/purchase');
const Seat = require('../models/seat');
const SeatType = require('../models/seatType');
const db = require('../database/connection');
// OBTENER CATEGORIAS
const getFlightByIdWithPassenger= async (req = request, res= response) => {

    // const { id } = req.params;

    // let flight = await Flight.findByPk(id);
      
    // const passengers = await db.query(`
    // SELECT passenger.* , boarding_pass.boarding_pass_id , boarding_pass.purchase_id ,boarding_pass.seat_id ,boarding_pass.seat_type_id , boarding_pass.flight_id 
    // FROM flight
    // INNER JOIN boarding_pass  ON flight.flight_id = boarding_pass.flight_id 
    // INNER JOIN passenger  ON boarding_pass.passenger_id  = passenger.passenger_id
    // WHERE boarding_pass.flight_id = `+ id + `
    // `);
    
    
    // data = {
    //     ...flight.toJSON(),
    //     passengers: passengers
    // }
    // const pas2 = JSON.stringify(data)
    // const data2 = convertKeysToCamelCase(JSON.parse(pas2));
      
    //   res.json({
    //     code: 200,
    //     data
    //   });



      
    
    

    // res.json({
    //     passengers
    // });
};

convertKeysToCamelCase = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(v => convertKeysToCamelCase(v));
    } else if (obj !== null && typeof obj === 'object') {
      return Object.keys(obj).reduce((result, key) => {
        const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
        result[camelCaseKey] = convertKeysToCamelCase(obj[key]);
        return result;
      }, {});
    }
    return obj;
  }

module.exports = {
    getFlightByIdWithPassenger,
}