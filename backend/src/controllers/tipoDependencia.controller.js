import TipoDependencia from "../models/tipoDependencia";

//método para obtener todos los tipos de espacios físicos almacenados en la base de datos

export const getTipoDependencia=async(req,res)=>{
    const tipos=await TipoDependencia.find();
    return tipos;   
    
}
