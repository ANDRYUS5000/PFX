import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
//se crea el modelo de la versión para el concepto, aquí se definen los atributos del mismo

const equipoSchema=new Schema({
    qr:{type:String,unique:true},
    fabricante:{type:String},
    referencia:{type:String},
    disco_duro:{type:String},
    ram:{type:String},
    procesador:{type:String},
    a_cargo:{ref:"personaCargo",
    type:Schema.Types.ObjectId},
    impqr:{type:String,unique:true},
    impref:{type:String},
    impa_cargo:{ ref:"personaCargo",
    type:Schema.Types.ObjectId}
    
},
{
    //agregamos método para generar fecha de creación y de modificación
    timestamps:true
})


export default model('Equipo',equipoSchema)