const { response, request } = require( 'express' );

const Passenger = require('../models/passenger');
const Airplane = require('../models/airplane');
const BoardingPass = require('../models/boardingPass');
const Flight = require('../models/flight');
const Purchase = require('../models/purchase');
const Seat = require('../models/seat');
const SeatType = require('../models/seatType');

// OBTENER CATEGORIAS
const getFlightByIdWithPassenger= async (req = request, res= response) => {

    // const pas = await Passenger.findAll({
    //     attributes: ['name','passenger_id','dni','age','country']
    //   });

    // const pas = await Airplane.findAll();
    // const pas = await BoardingPass.findAll();
    // const pas = await Flight.findAll();
    // const pas = await Passenger.findAll();
    // const pas = await Purchase.findAll();
    // const pas = await Seat.findAll();
    // const pas = await SeatType.findAll()
        const pas = await Seat.findAll({
        //attributes: ['seat_type_id']
        
    });

    res.json({
      a: 'asa',
      pas
    });
};



module.exports = {
    getFlightByIdWithPassenger,
}