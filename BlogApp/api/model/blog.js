const mongoose=require("mongoose")

  const blogSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true,
    },
    

    category:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
       
    }
},
{timestamps:true}
)
module.exports= mongoose.model('blog', blogSchema);

