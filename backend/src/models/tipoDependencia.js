import {Schema,model} from 'mongoose'

//se crea el modelo del tipo de espacio que solo tendrá nombre y object id

const tipoDependenciaSchema=new Schema(
    {
        name:String,
        code:{type:String,unique:true},
    },
    {
    versionKey:false
    }
)
//se exporta el modelo para usarlo en los controladores

export default model('TipoDependencia',tipoDependenciaSchema)