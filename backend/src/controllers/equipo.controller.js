import Equipo from '../models/equipo' ;

//método para traer todos los equipos
export const getEquipos=async(req,res)=>{
    const equipos=await Equipo.find();
    return equipos;   
    
}
