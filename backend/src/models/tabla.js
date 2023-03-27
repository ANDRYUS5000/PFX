import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
//se crea el modelo de la versión para el concepto, aquí se definen los atributos del mismo

const tablaSchema=new Schema({
    code:{type:String,unique:true},
    equipos:[{
        ref:"Equipo",
        type:Schema.Types.ObjectId
    }]
},
{
    //agregamos método para generar fecha de creación y de modificación
    timestamps:true
})


export default model('Tabla',tablaSchema)