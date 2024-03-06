const {Router} = require('express')
const {check} = require('express-validator')
const {getMateria, newMateria, actualizarMateria, eliminarMateria}= require('../controllers/materia')
const {validarCampos}= require('../middlewares/validar-campos')



const router = Router()

router.get('/', getMateria);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('profesor','el profesor es obligatorio').not().isEmpty(),
    check('secciones','Las secciones son obligatorias').not().isEmpty(),
    validarCampos
]
, newMateria);

router.put('/:id',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('profesor','El profesor es obligatorio').not().isEmpty(),
    check('secciones','Las secciones son obligatorias').not().isEmpty(),
    validarCampos
]
, actualizarMateria);

router.delete('/:id', eliminarMateria);

module.exports = router