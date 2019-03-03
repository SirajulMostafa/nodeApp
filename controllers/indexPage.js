const Post = require('../database/models/Post')

module.exports =  async(req,res)  =>{

    const posts = await Post.find({})
    console.log(req.session)
    console.log(posts)   
        res.render('index',{posts})//short form of Posts:Posts
    }