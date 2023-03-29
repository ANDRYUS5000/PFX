import {Router} from 'express'

import * as firmactrl from '../controllers/firma.controller'

const router= Router()

//librería necesaria para el manejo de archivos
const multer=require('multer')

//variable para subir los archivos
const storage = multer.diskStorage(
    {
        filename:(req,file,cb)=>{
            const ext =file.originalname.split(".").pop()
            cb(null, file.filename+'.'+ext)
        },
        // destination:(req,file,cb)=>{
        //     cb(null,'./public')
        // }
    }
)
//variable para realizar la carga del documento
const upload=multer({storage})

router.post('/save', firmactrl.SaveFirma)

router.post('/upload',upload.single('file'),firmactrl.UploadFirma)

export default router;