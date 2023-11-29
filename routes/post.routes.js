const express =require('express')
const {getAll,getBody,createPost,updatePost,deletePost}=require('../Controller/post.controller.js')

const router=express.Router()

router.get('/',getAll)

router.get('/getBody/:title',getBody)

router.post("/create",createPost)

router.put('/posts/:postId', updatePost);

router.delete('/delete/:Id',deletePost);

module.exports=router