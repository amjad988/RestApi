const mongoose=require('mongoose')

const postSchema=mongoose.Schema(
    {
        title:
        {
            type:String,
            required:"You need Provide Title"
        },
        body:
        {
            type:String,
            required:"Provide Body"
        }
    }
)

module.exports=mongoose.model("Post",postSchema)