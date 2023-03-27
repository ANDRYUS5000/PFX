import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/role'
import Dependencia from '../models/dependencia'
import TipoDependencia from '../models/tipoDependencia'
import personaCargo from '../models/personacargo'
import equipo from '../models/equipo'
import Tabla from '../models/tabla'
import Version from '../models/version'

//controlador para manejar todo lo referente a token y usuarios


//método para ingresar una vez se tiene cuenta
export const signIn=async(req,res)=>{
    //con esto se obtiene los datos completos del rol y la dependencia usando sus objectId
    const userFound=await User.findOne({email:req.body.email}).populate(['roles','dependencia'])
    //si el usuario no existe se envía un mensaje de error
    if(!userFound){
        return res.status(400).json({message:"El usuario no existe"})
    }
     //si el usuario existe se valida que la contraseña ingresada coincida con la registrada en la base de datos

    const matchPassword=await User.comparePassword(req.body.password,userFound.password)
    //si la contraseña no coincide se envía un mensaje de contraseña inválida
    if(!matchPassword)
    {
        return res.status(401).json({token:'null',message:'Contraseña Inválida'})

    }
     //si el usuario existe y la contraseña coincide se retorna el token
   
    const token=jwt.sign({id:userFound._id},config.SECRET,{expiresIn:1800})
    //se envía el rol, el id del usuario y el token para luego ser gestionados desde el frontend
    res.json({roles:userFound.roles[0].toJSON().name,
                id:userFound._id,
                token})
}
export const crearTabla=async(req,res)=>{
    const {name,equipos}=req.body
    newTable=new Tabla({name})
    
    if(equipos.lenght>0)
    {
        const foundequipo= await Role.find({qr:{$in: equipos}})
        //en caso de existir se guarda el ObjectId del rol
       newUser.roles=foundRoles.map(role=>role._id)
        newTable.equipos=equipos
    }
    let tablita=await Tabla.findOne({name:req.body.name}).populate(['roles','dependencia'])
    const savedTable=await newTable.save();
    //se retorna el estado 200 si el registro fue exitoso
    res.status(200).json({savedTable})
}
export const crearEquipo=async(req,res)=>{
    const {qr,fabricante,referencia,disco_duro,ram,procesador,a_cargo,impqr,impref,impa_cargo}=req.body
    const newEquipo=new equipo({
        qr,
        fabricante,
        referencia,
        disco_duro,
        ram,
        procesador,
        impqr,
        impref
    })
    if(a_cargo){
        const foundPerson=await personaCargo.find({ced:{$in:a_cargo}})
        if (foundPerson)
        {
            newEquipo.a_cargo=foundPerson[0].toJSON()._id
        }
    }
    if(impa_cargo){
        const foundPers=await personaCargo.find({ced:{$in:impa_cargo}})
        if (foundPers)
        {
            newEquipo.impa_cargo=foundPers[0].toJSON()._id
        }
    }
    const savedEquip=await newEquipo.save();
    //se retorna el estado 200 si el registro fue exitoso
    res.status(200).json({savedEquip})
    
    
}
//método para crear un nuevo espacio, esto solo lo puede hacer un Super Administrador
export const crearDependencia = async (req, res) => {
    //se desestructuran los datos enviados por el usuario, para obtener los parámetros necesarios
    
    const {cod_uni,name,tipo_unidad}=req.body;
     //se crea un nuevo espacio
    const newDependencia=new Dependencia({
        name
    })
   //se busca el tipo de espacio en la base de datos
    if (tipo_unidad){
        const foundTipo=await TipoDependencia.find({name:{$in: tipo_unidad}});
           //se obtiene el objectId del tipo de espacio
        let tipo = foundTipo[0].toJSON()._id
        //se asigna la nueva variable al objeto
        newDependencia.tipo_unidad = tipo;
    }
    //si todos los datos son correctos, se envía el objeto a la base de datos y se solicita guardarlo
    const savedDep=await newDependencia.save();
    //se retorna el estado 200 si el registro fue exitoso
    res.status(200).json({savedDep})
}
//método para obtener la lista de dependencias almacenadas en la base de datos

export const dependencias = function (req, res) {
    //variable que guarda todas las dependencias
    let dependencias = Dependencia.find({});
     //en caso de haber error en la consulta se lanza error
    dependencias.exec(function (err, dependencias) {
        if (err) {
            return res.status(500).json({
                message: 'Error al obtener las dependencias',
                error: err
            });
        }
         //se retorna estatus 200 si no existe error y se envía la lista de dependencias
        return res.status(200).json(dependencias);
    });
};
//método para obtener el usuario
export const getUser = async(req, res)=>{
    //se busca el usuario en la base de datos por medio de la cédula
    const user=User.findOne({_id:req.params.id});
    //en caso de error en la consulta se envía un estatus 500
    user.exec((err, user) =>{
        if (err) {
            return res.status(500).json({
                message: 'Error al obtener el user',
            });
        }
        //si no hay error se envía el usuario y estatus 200

        return res.status(200).json(user);
    });
}
//Método para obtener los tipos de espacios físicos
export const tipoDependencias = function (req, res) {
    //variable que almacena la lista de todo los tipos de espacios
    let tiposdependencias = TipoDependencia.find({});
     //en caso de existir error al traer los espacios se envía un status de error
    tiposdependencias.exec(function (err, tiposdependencias) {
        if (err) {
            return res.status(500).json({
                message: 'Error al obtener los tipos de espacios físicos',
                error: err
            });
        }
        //si no existe error al traer los tipos de espacios se envía un estatus 200 y los nombres de los espacios físicos
        return res.status(200).json(tiposdependencias.map(r=>{
            return r.name
        }));
    });
};

//Método para obtener los roles
export const roles = function (req, res) {
    //variable que almacena todos los roles
    let rolel = Role.find({});
    //si la variable está vacía se envía un error
    rolel.exec(function (err, rolel ){
        if (err) {
            return res.status(500).json({
                message: 'Error al obtener los roles',
                error: err
            });
        }
        //si no hubo error en obtener los roles se envía la lista
        
        return res.status(200).json(rolel);
    });
};
//Método para registrar un usuario, es diferente del método signup porque no se envía token ya que un super Administrador lo ejecuta

export const registrarUsuario=async(req,res)=>{
     //se desestructuran los datos para obtener los parámetros necesarios
    
    const {name,ced,roles,dependencia,email,password,telefono}=req.body;
  //se crea un nuevo usuario
    const newUser=new User({
        name,
        ced,
        email,
        password:await User.encryptPassword(password),
        telefono
    })
    //se valida si el rol diferente a USER existe
    if (roles){
        //se busca el rol enviado entre los roles existentes
       const foundRoles= await Role.find({name:{$in: roles}})
        //en caso de existir se guarda el ObjectId del rol
       newUser.roles=foundRoles.map(role=>role._id)
    }
     //de lo contrario se envía el parámetro USER
    else{
        const role = await Role.findOne({name:"USER"})
        newUser.roles=[role._id]
    }
    //se valida si la dependencia existe
    if(dependencia){
         //se obtiene todas las dependencias
        const foundDep=await Dependencia.find({});
        //se busca si la dependencia enviada coincide 
        let dep = foundDep.filter((item) => item.toJSON().id_unidad == dependencia);
        // y si coincide se almacena el ObjectId
        newUser.dependencia=dep[0];
    }
     //se envía el usuario a la base de datos
    const savedUser=await newUser.save();
    //se envía el nombre del rol y el estatus 200
    res.status(200).json({roles:savedUser.roles[0].toJSON().name})
    
}


export const crearVer=async(req,res)=>{
    const {dependencia,user,tabla,documento}=req.body
    const l=await (await Version.find({})).length
    const num=parseInt(l)+1
    const code=dependencia.code_uni +"-"+num
    const newVer=new Version({code, dependencia,user,tabla,documento})
    await newVer.save()
    res.status(200).json(newVer)
}