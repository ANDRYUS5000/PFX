import Firma from '../models/firma'
const fs = require('fs')
const mongoose = require('mongoose')

export const UploadFirma=async(req,res)=>{
    //se obtiene la ruta del archivo
    var paths=req.file.originalname.split(".")
    const bucket=new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName:'uploads'})
    var file=fs.createReadStream(req.file.path).pipe(bucket.openUploadStream(req.file.originalname, {contentType:paths[paths.length-1]}))
    var fileid=file.id.toString()
    await Firma.findByIdAndUpdate(req.body.res,{file:fileid})
}

export const SaveFirma=async(req,res)=>{
    const {nombre,cargo}=req.body
    const f=new Firma({nombre,cargo})
    await f.save()
    .then((reserva)=>{
        //si se ejecutó la operación exitosamente se envia un estatus 200 y la firma
        return res.status(200).json(reserva)
    })
    .catch(err=>{
        //si se presenta error al enviar la firma se envia mensaje de error
        res.json('error XD')
    })
}