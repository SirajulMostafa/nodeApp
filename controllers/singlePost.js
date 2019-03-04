const Post = require('../database/models/Post')


module.exports = async (req,res)=>{

    const post = await Post.findById(req.params.id)
    console.log("from single page")
    console.log(post)
    console.log("from single page")
    res.render("post",{
        post
    })
}