const {Router} = require('express')
const {check} = require('express-validator')
const {getEvento, newEvento, actualizarEvento, eliminarEvento}= require('../controllers/evento')
const {validarCampos}= require('../middlewares/validar-campos')



const router = Router()

router.get('/', getEvento);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('semana','La semana es obligatorio').not().isEmpty(),
    check('trimestre','El trimestre es obligatorio').not().isEmpty(),
    validarCampos
]
, newEvento);

router.put('/:id',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('semana','La semana es obligatorio').not().isEmpty(),
    check('trimestre','El trimestre es obligatorio').not().isEmpty(),
    validarCampos
]
, actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router