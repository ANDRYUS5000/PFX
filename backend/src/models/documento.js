import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
//se crea el modelo de la versión para el concepto, aquí se definen los atributos del mismo

const documentoSchema=new Schema({
    fecha:{
        type: String,
        require:true,
    },
    para:{
        type:String
    },
    de:{
        type:String
    },
    asunto:{
        type:String
    },
    hallazgos:{
        type:String
    },
    notas:{
        type:String
    },
    recomendaciones:{
        type:String
    },
    firmaSop:{
        type:Schema.Types.ObjectId
    },
    firmaIIT:{
        type:Schema.Types.ObjectId
    }
},
{
    //agregamos método para generar fecha de creación y de modificación
    timestamps:true
})


export default model('Documento',documentoSchema)