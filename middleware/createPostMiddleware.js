
// const path = require('path')
// const Post = require('../database/models/Post')

module.exports   = (req,res,next)=>{

    if(!req.files.afile || !req.body.title || !req.body.content){
        return res.redirect('/posts/new')
    }
    next()
}