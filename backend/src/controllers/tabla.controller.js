import Tabla from '../models/tabla' ;

//método para traer todas las tablas
export const getTablas=async(req,res)=>{
    const eq=await Tabla.find().populate('equipos');
    res.status(200).json(eq)
}

export const getTabla=async(req,res)=>{
    const tabla=await Tabla.find();
    res.status(200).json(tabla)
}

export const crearTabla=async(req,res)=>{
    const {equipos,dependencia}=req.body.equipos
    const cad ='l-' + dependencia
    const l=await Tabla.find({})
    l.filter(ele=>{
        ele.code.includes(cad)
    })
    const code = cad + l.length 
    const newVer=new Tabla({code, equipos})
    await newVer.save()
    res.status(200).json(newVer)
}