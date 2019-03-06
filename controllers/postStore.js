
const path = require('path')
const Post = require('../database/models/Post')


module.exports = 
(req, res) => {
    //    const {image} = req.files
    let image = req.files.afile
       //console.log( req.image)
       // image.mv(path.resolve(__dirname,'public/posts',image.name),(e)=>{
        image.mv(path.resolve(__dirname,'..','public/posts',image.name),(e)=>{
            Post.create({
                ...req.body,
                img:`/posts/${image.name}`,
                user_id: req.session.userId
            },(error,post)=>{
            res.redirect('/')
            })
        
        })
    
        // Post.create(req.body,(e,post)=>{
           
        //     console.log(e,req.body)
        //     res.redirect("/")
        // })
    
       // console.log(req.body)
        //res.redirect('/')
    }