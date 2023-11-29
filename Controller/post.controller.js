const postModel=require('../models/post.model.js');


//Add New Post in database
exports.createPost = async (req, res) => {
    try {
        const post = new postModel(req.body);
        const result = await post.save();
        res.status(200).json({
            post: result
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};

//Get All Post
exports.getAll=(req,res)=>
{
    const posts=postModel.find()
    .then((posts)=>{
        res.status(200).json({posts})
    })
    .catch(err=>console.log(err))
}


//get only body by passing title
exports.getBody = async (req, res) => {
    try {
        const titleToFind = req.params.title.trim();  
        const myTask = await postModel.findOne({ title: titleToFind });
        if (!myTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        const body1=myTask.body
        res.status(200).json({body1});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


//used to update post on basis od id
exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await postModel.findById(postId);
        if (!post) {
            return res.status(404).json({
                error: 'Post not found'
            });
        }
        post.set(req.body);
        const result = await post.save();
        res.status(200).json({
            post: result
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};


 
exports.deletePost = async (req, res) => {
    try {
        const id = req.params.Id;
        const deletedPost = await postModel.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json({ deletedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

 

