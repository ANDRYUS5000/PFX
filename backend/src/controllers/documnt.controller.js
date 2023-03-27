import Doc from '../models/documento' ;

export const crearDoc=async(req,res)=>{
    const {fecha,para,de,asunto,hallasgoz,notas,recomend,firm1,firm2}=req.body
    const newDoc=new Doc({fecha,para,de,asunto,hallasgoz,notas,recomend,firm1,firm2})
    await newDoc.save()
    res.status(200).json(newDoc)
}