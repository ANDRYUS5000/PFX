import {Router} from 'express'
import { verifySingup } from '../middlewares'
const router= Router()

import * as authCtrl from '../controllers/auth.controllers'

//ingresar
router.post('/signin', authCtrl.signIn)

//registrar usuarios como super admin
router.post('/registeruser',verifySingup.checkDuplicatedCedorEmail,verifySingup.checkRolesExisted,verifySingup.checkDependenciaExist,
authCtrl.registrarUsuario)



//ruta para crear espacios, primero se verifica si el espacio o no y en base a esto se ejecuta el método crear espacio
router.post('/creardependencia', authCtrl.crearDependencia)

//ruta para crear equipo
router.post('/crearequipo',verifySingup.checkEquipoExist,authCtrl.crearEquipo)

router.post('/creartabla',verifySingup.checkTablaExist,authCtrl.crearTabla)

//ruta para obtener las dependencias
router.get('/dependencias', authCtrl.dependencias)
//ruta para obtener los tipos de espacios físicos
router.get('/tipodependencias',authCtrl.tipoDependencias)
//ruta para obtener los roles
router.get('/roles',authCtrl.roles)
export default router;