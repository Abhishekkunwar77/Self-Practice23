const mongoose=require("mongoose")

const categorySchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
        unique:true
    }
},
{timestamps:true}
)
module.exports= mongoose.model('category', categorySchema);

