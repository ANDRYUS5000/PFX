import {Router} from 'express'
import { verifySingup } from '../middlewares'
const router= Router()

import * as personCtrl from '../controllers/personaCargo.controller'

//registrar persona
router.post('/registerperson', verifySingup.checkDuplicatedCed,personCtrl.registrarPersona)
export default router;