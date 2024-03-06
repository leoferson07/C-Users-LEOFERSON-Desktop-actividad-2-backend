const {Router} = require('express')
const {check} = require('express-validator')
const {getSeccion, newSeccion, actualizarSeccion, eliminarSeccion}= require('../controllers/seccion')
const {validarCampos}= require('../middlewares/validar-campos')



const router = Router()

router.get('/', getSeccion);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
]
, newSeccion);

router.put('/:id',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
]
, actualizarSeccion);

router.delete('/:id', eliminarSeccion);

module.exports = router