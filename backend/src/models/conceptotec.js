import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
//se crea el modelo de la versión para el concepto, aquí se definen los atributos del mismo

const conceptoSchema=new Schema({
    name:{type:String},
    version:{
        ref:"Version",
        Type:Schema.Types.ObjectId
    }    
},
{
    //agregamos método para generar fecha de creación y de modificación
    timestamps:true
})


export default model('Concepto',conceptoSchema)