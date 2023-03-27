import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
//se crea el modelo de la versión para el concepto, aquí se definen los atributos del mismo

const personaCargoSchema=new Schema({
    name:{type:String},
    ced:{type:String, unique:true}
},
{
    //agregamos método para generar fecha de creación y de modificación
    timestamps:true
})


export default model('personaCargo',personaCargoSchema)