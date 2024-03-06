const {Router} = require('express')
const {check} = require('express-validator')
const {getTrimestre, newTrimestre, actualizarTrimestre, eliminarTrimestre}= require('../controllers/trimestre')
const {validarCampos}= require('../middlewares/validar-campos')

const router = Router()

router.get('/', getTrimestre);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('semanas','Las semanas son obligatoria').not().isEmpty(),
    check('fechaInicio','La fecha de inicio es obligatoria').not().isEmpty(),
    validarCampos
]
, newTrimestre);

router.put('/:id',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('semanas','Las semanas son obligatoria').not().isEmpty(),
    check('fechaInicio','La fecha de inicio es obligatoria').not().isEmpty(),
    validarCampos
]
, actualizarTrimestre);

router.delete('/:id', eliminarTrimestre);

module.exports = router