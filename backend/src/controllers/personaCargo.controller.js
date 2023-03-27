import personaCargo from '../models/personacargo'


//Método para registrar un usuario, es diferente del método signup porque no se envía token ya que un super Administrador lo ejecuta

export const registrarPersona=async(req,res)=>{
     //se desestructuran los datos para obtener los parámetros necesarios
    
    const {name,ced}=req.body;
  //se crea un nuevo usuario
    const nuevaPersona=new personaCargo({
        name,
        ced,
        })
    
     //se envía el usuario a la base de datos
    const savedPersona=await nuevaPersona.save();
    //se envía el nombre del rol y el estatus 200
    res.status(200).json({savedPersona})
   
}
