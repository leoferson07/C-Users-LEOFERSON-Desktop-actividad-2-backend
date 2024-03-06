const {Router} = require('express')
const {check} = require('express-validator')
const {getProfesor, newProfesor, actualizarProfesor, eliminarProfesor}= require('../controllers/profesor')
const {validarCampos}= require('../middlewares/validar-campos')



const router = Router()

router.get('/', getProfesor);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
]
, newProfesor);

router.put('/:id',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
]
, actualizarProfesor);

router.delete('/:id', eliminarProfesor);

module.exports = router