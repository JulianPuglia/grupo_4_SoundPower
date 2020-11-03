const dbusers = require('../data/dbusers');
const {check, validationResult,body} = require('express-validator');

module.exports=[
    check('email').isEmail().withMessage('Debes ingresar un email valido'),
    check('pass').isLength({min:8}).withMessage('Debe ingresar una contraseña, minimo 8 cararcteres'),
    check('cpass').isLength({min:8}).withMessage('Repita su contraseña'),
    check('fname').isLength().withMessage('Debes ingresar un nombre'),
    check('lname').isLength().withMessage('Debes ingresar un apellido'),
    check('phone').isInt({min:0}).withMessage('Debe llenar el campo telefono'),
    check('address').isLength().withMessage('Debe llenar el campo direccion')
]