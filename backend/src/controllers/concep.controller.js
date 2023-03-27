import Concepto from '../models/conceptotec' ;

export const RegConcept=async(req,res)=>{
    const {name,version}=req.body
    const newCon=new Concepto({name, version})
    await newCon.save()
    res.status(200).json(newCon)
}