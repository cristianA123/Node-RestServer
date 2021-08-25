
 
const validarJWS = require('../middlewares/validar-jwt');
const valicarRoles = require('../middlewares/validar-roles');
const validarCampos = require('../middlewares/validar-campos');



module.exports = {
    ...validarJWS,
    ...valicarRoles,
    ...validarCampos
}