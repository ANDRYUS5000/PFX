import Role from '../models/role'
import TipoDependencia from '../models/tipoDependencia';

//creación de roles básicos
export const createRoles=async()=>{
   try{
    const count=await Role.estimatedDocumentCount()
    if(count>0) return;

    const values= await Promise.all([
    new Role({name:"USER"}).save(),
    new Role({name:"ADMIN"}).save()])

    console.log("cargué los roles")
   }
   catch(error){
    console.error(error)
   }
   next();
};
//creación de tipos de espacios físicos básicos
export const createTipoDependencia=async()=>{
   try{
    const count=await TipoDependencia.estimatedDocumentCount()
    if(count>0) return;

    const values= await Promise.all([
    new TipoDependencia({name:"CERES",code:"6"}).save(),
    new TipoDependencia({name:"CONVENIO",code:"18"}).save(),
    new TipoDependencia({name:"DEPARTAMENTO",code:"1"}).save(),
    new TipoDependencia({name:"DIPLOMADOS",code:"20"}).save(),
    new TipoDependencia({name:"DOCTORADO",code:"13"}).save(),
    new TipoDependencia({name:"ESPECIALIZACION",code:"11"}).save(),
    new TipoDependencia({name:"ESPECIALIZACION CONVENIO",code:"15"}).save(),
    new TipoDependencia({name:"FACULTAD",code:"2"}).save(),
    new TipoDependencia({name:"LABORATORIO",code:"7"}).save(),
    new TipoDependencia({name:"MAESTRIA",code:"10"}).save(),
    new TipoDependencia({name:"MAESTRIA CONVENIO",code:"14"}).save(),
    new TipoDependencia({name:"OFICINA",code:"9"}).save(),
    new TipoDependencia({name:"OTRO",code:"4"}).save(),
    new TipoDependencia({name:"POSTGRADO",code:"8"}).save(),
    new TipoDependencia({name:"PROGRAMA",code:"3"}).save(),
   ])
   console.log("Cargué los tipos dep")
   }
   catch(error){
    console.error(error)
   }
};