const {Router} = require('express')
const {check} = require('express-validator')
const {getEvaluacion, newEvaluacion, actualizarEvaluacion, eliminarEvaluacion}= require('../controllers/evaluacion')
const {validarCampos}= require('../middlewares/validar-campos')

const router = Router()

router.get('/', getEvaluacion);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('semana','La semana es obligatorio').not().isEmpty(),
    validarCampos
]
, newEvaluacion);

router.put('/:id',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('semana','La semana es obligatorio').not().isEmpty(),
    validarCampos
]
, actualizarEvaluacion);

router.delete('/:id', eliminarEvaluacion);

module.exports = router