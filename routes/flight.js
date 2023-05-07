const { Router } = require( 'express' );
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { getFlightByIdWithPassenger } = require('../controllers/flight');


const router = Router();

router.get('/:id/passengers',
[
    check('id',"El id de la categoria no es ID valido").isNumeric(),
    // check('id').custom( existeCategoria ),
    validarCampos
]
, getFlightByIdWithPassenger )


module.exports = router;