import {Schema,model} from 'mongoose'

const FrimaSchema=new Schema({
    nombre:{
        type:String
    },
    cargo:{
        type:String
    },
    file:{
        Type:Schema.Types.ObjectId
    }    
},
{
    //agregamos método para generar fecha de creación y de modificación
    timestamps:true
})


export default model('Firma',FrimaSchema)