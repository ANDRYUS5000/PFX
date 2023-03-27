import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
//se crea el modelo de la versión para el concepto, aquí se definen los atributos del mismo

const versionSchema=new Schema({
    code:{type:String,unique},
    dependencia:[{
        ref:"Dependencia",
        type:Schema.Types.ObjectId
        
    }],
    user:{
        ref:"User",
        type:Schema.Types.ObjectId
    },
    tabla:{
        ref:"Tabla",
        type:Schema.Types.ObjectId
    },
    documento:{
        ref:"Documento",
        type:Schema.Types.ObjectId
    },
    mapa:{
        type:File
    }
},
{
    //agregamos método para generar fecha de creación y de modificación
    timestamps:true
})



export default model('Version',versionSchema)